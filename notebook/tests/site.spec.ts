import { test, expect } from "@playwright/test";
const backend = "https://privileged-publisher.ellyjane-luki.chatgpt.site";
const fixture = { id: "test-post", title: "A published notebook entry", slug: "published-notebook-entry", description: "A verification fixture served only in the test browser.", kind: "research", category: "Security", tags: ["HTTP"], date: "2026-10-05", readingTime: 1, status: "published", blocks: [{ id: "paragraph", type: "paragraph", text: "Text <script>alert(1)</script> remains plain text." }, { id: "heading", type: "heading", text: "Working evidence" }, { id: "embed", type: "embed", url: "javascript:alert(1)" }] };
test.beforeEach(async ({ page }) => {
  await page.route(`${backend}/api/posts**`, async (route) => {
    const slug = new URL(route.request().url()).searchParams.get("slug");
    await route.fulfill({ status: slug && slug !== fixture.slug ? 404 : 200, contentType: "application/json", body: JSON.stringify(slug ? { post: fixture } : { posts: [fixture] }) });
  });
});
test("public notebook pages keep their layout and omit sample stories", async ({ page }, info) => {
  const errors: string[] = []; page.on("pageerror", (e) => errors.push(e.message));
  for (const path of ["/", "/research/", "/notes/", "/projects/", "/about/", "/research/ollama-download-stall/"]) {
    expect((await page.goto(path))?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.locator(".demo-tag, .article-demo")).toHaveCount(0);
  }
  await page.goto("/"); await expect(page.getByRole("heading", { name: fixture.title })).toBeVisible();
  await expect(page.getByRole("link", { name: "Login", exact: true })).toHaveAttribute("href", backend);
  await page.screenshot({ path: `artifacts/home-${info.project.name}.png`, fullPage: true });
  expect(errors).toEqual([]);
});
test("published API entries support category, search and article navigation", async ({ page }) => {
  await page.goto("/research/");
  await expect(page.locator(".archive-list .post-row")).toHaveCount(2);
  await page.getByRole("button", { name: "Security", exact: true }).click();
  await expect(page.locator(".archive-list .post-row")).toHaveCount(1);
  await page.getByRole("button", { name: "All", exact: true }).click();
  await page.getByRole("textbox", { name: "Search posts" }).fill("ollama");
  await expect(page.locator(".archive-list .post-row")).toHaveCount(1);
  await page.getByRole("textbox", { name: "Search posts" }).fill("no-match");
  await expect(page.getByRole("heading", { name: "No entries found." })).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await page.getByRole("heading", { name: fixture.title, exact: true }).click();
  await expect(page).toHaveURL(/\/story\/\?slug=published-notebook-entry/);
  await expect(page.locator("h1")).toHaveText(fixture.title);
  await expect(page.locator(".live-prose")).toContainText("<script>alert(1)</script>");
  await expect(page.locator(".live-prose iframe")).toHaveCount(0);
  await page.goto("/story/?slug=missing");
  await expect(page.getByRole("heading", { name: "Story unavailable" })).toBeVisible();
});
test("navigation and authentic story work on desktop and mobile", async ({ page }, info) => {
  await page.goto("/");
  if (info.project.name === "mobile") await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Research", exact: true }).click();
  await expect(page).toHaveURL(/\/research\/$/);
  await page.getByRole("heading", { name: "When a Download Can Connect but Never Start", exact: true }).click();
  await expect(page.locator(".article-author")).toContainText("Written by Jhye");
  await expect(page.locator(".prose")).toContainText("reliability bug");
  const ids = await page.locator(".prose h2").evaluateAll((els) => els.map((e) => e.id));
  const links = await page.locator(".table-of-contents a").evaluateAll((els) => els.map((e) => e.getAttribute("href")?.slice(1)));
  expect(links).toEqual(ids);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /jhye.dev\/privileged\/research\/ollama-download-stall/);
});
test("generated feeds and sitemap contain the real story and exclude removed demos", async ({ request }) => {
  const rss = await request.get("/rss.xml"); expect(rss.status()).toBe(200);
  expect(await rss.text()).toContain("ollama-download-stall");
  expect(await rss.text()).not.toContain("api-authentication-flaw");
  const sitemap = await request.get("/sitemap.xml"); expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain("jhye.dev/privileged/research/ollama-download-stall");
  expect((await request.get("/research/api-authentication-flaw/")).status()).toBe(404);
});
