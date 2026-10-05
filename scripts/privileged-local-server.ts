import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import handler from '../api/privileged';
const root = path.resolve('out');
const mime: Record<string, string> = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.txt': 'text/plain', '.woff2': 'font/woff2', '.png': 'image/png', '.webp': 'image/webp' };
const server = createServer(async (req, res) => {
  const url = new URL(req.url || '/', 'http://localhost');
  if (url.pathname.startsWith('/privileged/api/')) {
    const request = req as VercelRequest; request.query = Object.fromEntries(url.searchParams); request.query.path = url.pathname.slice('/privileged/api/'.length);
    request.cookies = Object.fromEntries((req.headers.cookie || '').split('; ').filter(Boolean).map((s) => [s.slice(0, s.indexOf('=')), s.slice(s.indexOf('=') + 1)]));
    let body = ''; for await (const chunk of req) body += chunk; request.body = body ? JSON.parse(body) : {};
    const response = res as VercelResponse; response.status = (code: number) => { res.statusCode = code; return response; };
    response.json = (value: unknown) => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(value)); return response; };
    response.send = (value: unknown) => { res.end(String(value)); return response; };
    await handler(request, response); return;
  }
  try {
    let file = path.join(root, decodeURIComponent(url.pathname)); if (!file.startsWith(root)) throw new Error('Invalid path');
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const contents = await readFile(file); res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream'); res.end(contents);
  } catch { res.statusCode = 404; res.end('Not found'); }
});
server.listen(Number(process.env.PRIVILEGED_TEST_PORT || 4319), '127.0.0.1', () => console.log('Local Privileged verification server ready.'));
