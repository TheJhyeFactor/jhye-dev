import assert from 'node:assert/strict';
import { chromium } from '../notebook/node_modules/@playwright/test';
async function main() {
const origin = 'http://127.0.0.1:4319';
const browser = await chromium.launch();
const account = await browser.newContext(); const anon = await browser.newContext(); const page = await account.newPage(); const errors: string[] = [];
page.on('pageerror', (e) => errors.push(e.message));
const headers = { Origin: origin }; const token = 'local-test-setup-token'; const password = 'Local test password 123!';
try {
  assert.equal((await anon.request.get(origin + '/privileged/api/admin/posts')).status(), 401);
  assert.equal((await anon.request.post(origin + '/privileged/api/setup', { headers, data: { token: 'incorrect', password } })).status(), 403);
  await page.goto(origin + '/privileged/login/#setup=' + token);
  await page.getByRole('heading', { name: 'Set your publishing password.' }).waitFor();
  await page.getByLabel('New password', { exact: true }).fill(password); await page.getByLabel('Confirm password').fill(password);
  await page.getByRole('button', { name: 'Set password and open editor' }).click();
  await page.getByRole('heading', { name: 'Publishing desk', exact: true }).waitFor();
  await page.getByText('Loading your posts…', { exact: true }).waitFor({ state: 'hidden' });
  await page.getByLabel('Title', { exact: true }).fill('Owner login verification');
  await page.getByLabel('Short introduction').fill('Temporary local verification of the publishing desk.');
  await page.getByRole('button', { name: '+ paragraph', exact: true }).click();
  await page.locator('.blocks-editor textarea').fill('Draft text remains private.');
  await page.getByRole('button', { name: 'Save draft', exact: true }).click();
  await page.getByRole('status').filter({ hasText: 'Draft saved' }).waitFor();
  assert.equal((await anon.request.get(origin + '/privileged/api/posts?slug=owner-login-verification')).status(), 404);
  await page.reload(); await page.getByRole('button', { name: /Owner login verification/ }).click();
  assert.equal(await page.getByLabel('Title', { exact: true }).inputValue(), 'Owner login verification');
  await page.getByRole('button', { name: 'Publish', exact: true }).click();
  await page.getByRole('status').filter({ hasText: 'Published.' }).waitFor();
  const published = await anon.request.get(origin + '/privileged/api/posts?slug=owner-login-verification'); assert.equal(published.status(), 200);
  const post = (await published.json()).post;
  assert.equal((await account.request.put(origin + '/privileged/api/admin/posts/' + post.id, { headers, data: { ...post, version: 1 } })).status(), 409);
  assert.equal((await account.request.put(origin + '/privileged/api/admin/posts/' + post.id, { headers: { Origin: 'https://other.example' }, data: post })).status(), 403);
  assert((await (await anon.request.get(origin + '/privileged/api/rss')).text()).includes(post.slug));
  await page.goto(origin + '/privileged/story/?slug=' + post.slug); await page.getByRole('heading', { name: post.title, exact: true }).waitFor();
  await page.goto(origin + '/privileged/admin/'); await page.getByRole('heading', { name: 'Publishing desk', exact: true }).waitFor();
  await page.screenshot({ path: '/tmp/privileged-own-editor.png', fullPage: true });
  await page.getByRole('button', { name: 'Sign out', exact: true }).click();
  await page.getByRole('heading', { name: 'Welcome back, Jhye.' }).waitFor();
  assert.equal((await account.request.get(origin + '/privileged/api/admin/posts')).status(), 401);
  await page.getByLabel('Email', { exact: true }).fill('omeleyjhye@gmail.com'); await page.getByLabel('Password', { exact: true }).fill(password);
  await page.getByRole('button', { name: 'Sign in', exact: true }).click(); await page.getByRole('heading', { name: 'Publishing desk', exact: true }).waitFor();
  assert.equal((await account.request.post(origin + '/privileged/api/setup', { headers, data: { token, password } })).status(), 409, 'Setup link only works once');
  await account.request.delete(origin + '/privileged/api/admin/posts/' + post.id + '?version=' + post.version, { headers });
  await page.setViewportSize({ width: 390, height: 844 }); await page.reload(); await page.getByRole('heading', { name: 'Publishing desk', exact: true }).waitFor();
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  assert.deepEqual(errors, []);
  console.log('PASS: own-domain setup, password sign-in, private drafts, persistence, publish, public reader, RSS, stale saves, CSRF, sign-out, one-use setup and mobile editor.');
} finally { await browser.close(); }

}
main().catch((e) => { console.error(e); process.exitCode = 1; });
