import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from '../notebook/node_modules/@playwright/test/index.mjs'

const root = fileURLToPath(new URL('../out/', import.meta.url))
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.txt': 'text/plain', '.woff2': 'font/woff2', '.png': 'image/png', '.webp': 'image/webp' }
const server = createServer(async (request, response) => {
  try {
    let file = path.join(root, decodeURIComponent(new URL(request.url, 'http://localhost').pathname))
    if (!file.startsWith(root)) { response.writeHead(403).end(); return }
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html')
    const bytes = await readFile(file)
    response.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' })
    response.end(request.method === 'HEAD' ? undefined : bytes)
  } catch { response.writeHead(404).end('Not found') }
})
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
const origin = `http://127.0.0.1:${server.address().port}`
const backend = 'https://privileged-publisher.ellyjane-luki.chatgpt.site'
const browser = await chromium.launch({ headless: true })
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } })
    const errors = []; page.on('pageerror', (e) => errors.push(e.message))
    await page.route(`${backend}/api/posts**`, (route) => route.fulfill({ contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ posts: [] }) }))
    assert.equal((await page.goto(`${origin}/research/`)).status(), 200)
    await page.getByRole('link', { name: 'Enter Privileged' }).click()
    await page.getByRole('heading', { name: 'When a Download Can Connect but Never Start' }).waitFor()
    assert.equal(new URL(page.url()).pathname, '/privileged/')
    assert.equal(await page.locator('.site-header').count(), 1)
    assert.equal(await page.locator('.demo-tag, .article-demo').count(), 0)
    assert.equal(await page.getByRole('link', { name: 'Login', exact: true }).getAttribute('href'), backend)
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
    await page.screenshot({ path: `/tmp/privileged-integrated-${width}.png`, fullPage: true })
    if (width === 390) await page.getByRole('button', { name: 'Open menu' }).click()
    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Notes', exact: true }).click()
    await page.getByRole('heading', { name: 'No entries found.' }).waitFor()
    assert.equal(await page.locator('.archive-list .post-row').count(), 0)
    assert.deepEqual(errors, [])
    await page.close()
  }
  console.log('PASS: portfolio entry, full-document navigation, separate notebook styles, embedded routes, mobile layout, login link and removed demos.')
} finally { await browser.close(); await new Promise((resolve) => server.close(resolve)) }
