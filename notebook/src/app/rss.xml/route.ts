import { getAllPosts, postUrl } from "@/lib/content";
import { site, absoluteUrl } from "@/lib/site";
export const dynamic = "force-static";
const escapeXml = (text: string) =>
  text.replace(
    /[<>&"']/g,
    (char) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[char]!,
  );
export function GET() {
  const posts = getAllPosts().filter((post) => !post.demo);
  const items = posts
    .map(
      (post) =>
        `<item><title>${escapeXml(post.title)}</title><link>${escapeXml(absoluteUrl(postUrl(post)))}</link><guid isPermaLink="true">${escapeXml(absoluteUrl(postUrl(post)))}</guid><description>${escapeXml(post.description)}</description><pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate><dc:creator>${escapeXml(site.author)}</dc:creator>${post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join("")}</item>`,
    )
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"><channel><title>Privileged — Jhye’s notebook</title><link>${escapeXml(site.url)}</link><description>${escapeXml(site.description)}</description><language>en-au</language><atom:link href="${escapeXml(absoluteUrl("/rss.xml"))}" rel="self" type="application/rss+xml"/>${items}</channel></rss>`,
    { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } },
  );
}
