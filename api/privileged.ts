import type { VercelRequest, VercelResponse } from '@vercel/node';
import { get, head } from '@vercel/blob';
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { admin, signedIn, originCheck, setup, login, signOut } from '../server/privileged/auth';
import { ApiError } from '../server/privileged/storage';
import { catalog, saveCatalog, validatePost, mediaInfo, mediaTypes, validMedia } from '../server/privileged/content';
const escape = (s: string) => s.replace(/[<>&"']/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[c]!));
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store'); res.setHeader('X-Content-Type-Options', 'nosniff');
  try {
    const path = String(req.query.path || '').replace(/^\/+|\/+$/g, '');
    const method = req.method || 'GET';
    const json = (value: unknown, status = 200) => res.status(status).json(value);
    if (!['GET', 'HEAD'].includes(method) && Buffer.byteLength(JSON.stringify(req.body || '')) > 500000) throw new ApiError(413, 'The request is too large.');
    if (path === 'session' && method === 'GET') { const account = await signedIn(req); if (!account) throw new ApiError(401, 'Sign in to manage Privileged.'); return json({ email: account.email }); }
    if (path === 'setup' && method === 'POST') return json(await setup(req, res), 201);
    if (path === 'login' && method === 'POST') return json(await login(req, res));
    if (path === 'logout' && method === 'POST') { originCheck(req); signOut(res); return json({ ok: true }); }
    if (path === 'upload' && method === 'POST') {
      const body = req.body as HandleUploadBody;
      const result = await handleUpload({ request: req, body,
        onBeforeGenerateToken: async (pathname, clientPayload) => {
          await admin(req);
          let data; try { data = JSON.parse(clientPayload || '{}'); } catch { throw new ApiError(400, 'Invalid upload.'); }
          const mime = data.mime as keyof typeof mediaTypes; const ext = mediaTypes[mime];
          const id = pathname.match(/^media\/([0-9a-f-]{36})\.(jpg|png|webp|gif|mp4|webm)$/)?.[1];
          if (!id || !ext || pathname !== `media/${id}.${ext}` || typeof data.name !== 'string') throw new ApiError(400, 'Use a supported photo or video.');
          const c = await catalog();
          if (c.value.media.some((m) => m.id === id)) throw new ApiError(409, 'Choose the file again to start a new upload.');
          c.value.media.push({ id, name: data.name.slice(0, 200), mime, size: 0, pathname, ready: false, created_at: new Date().toISOString() });
          await saveCatalog(c.value, c.etag);
          return { allowedContentTypes: [mime], maximumSizeInBytes: (mime.startsWith('image/') ? 10 : 50) * 1024 * 1024, addRandomSuffix: false, allowOverwrite: false, validUntil: Date.now() + 30 * 60000, tokenPayload: JSON.stringify({ id }) };
        }, onUploadCompleted: async () => { /* Files are checked and registered by the authenticated completion endpoint. */ },
      });
      return json(result);
    }
    if (path === 'admin/media') {
      await admin(req); const c = await catalog();
      if (method === 'GET') return json({ media: c.value.media.filter((m) => m.ready).sort((a, b) => b.created_at.localeCompare(a.created_at)).map(mediaInfo) });
      if (method === 'POST') {
        const media = c.value.media.find((m) => m.id === req.body?.id);
        if (!media) throw new ApiError(400, 'Start the upload from the editor.');
        const info = await head(media.pathname); const limit = (media.mime.startsWith('image/') ? 10 : 50) * 1024 * 1024;
        if (!info.size || info.size > limit || info.contentType !== media.mime) throw new ApiError(400, 'The file size or type is invalid.');
        const contents = await get(media.pathname, { access: 'private', useCache: false, headers: { Range: 'bytes=0-31' } });
        if (!contents?.stream) throw new ApiError(400, 'The uploaded file is unavailable.');
        const reader = contents.stream.getReader(); const chunk = await reader.read(); await reader.cancel();
        if (!chunk.value || !validMedia(chunk.value, media.mime)) throw new ApiError(400, 'The file contents do not match its type.');
        media.ready = true; media.size = info.size; await saveCatalog(c.value, c.etag);
        return json({ media: mediaInfo(media) }, 201);
      }
    }
    const mediaId = path.match(/^media\/([0-9a-f-]{36})$/)?.[1];
    if (mediaId && ['GET', 'HEAD'].includes(method)) {
      const c = await catalog(); const media = c.value.media.find((m) => m.id === mediaId && m.ready);
      const published = c.value.posts.some((p) => p.status === 'published' && p.blocks.some((b) => b.assetId === mediaId));
      if (!media || (!published && !await signedIn(req))) throw new ApiError(404, 'Media unavailable.');
      const range = req.headers.range;
      if (range && !/^bytes=\d*-\d*$/.test(range)) throw new ApiError(416, 'Invalid byte range.');
      const result = await get(media.pathname, { access: 'private', useCache: false, ...(range ? { headers: { Range: range } } : {}) });
      if (!result?.stream) throw new ApiError(404, 'Media unavailable.');
      const contentRange = result.headers.get('content-range');
      res.status(contentRange ? 206 : 200).setHeader('Content-Type', media.mime);
      res.setHeader('Accept-Ranges', 'bytes');
      const length = result.headers.get('content-length'); if (length) res.setHeader('Content-Length', length);
      if (contentRange) res.setHeader('Content-Range', contentRange);
      res.setHeader('Content-Disposition', `inline; filename="${media.name.replace(/[^a-zA-Z0-9_. -]/g, '_')}"`);
      if (method === 'HEAD') { await result.stream.cancel(); return res.end(); }
      await pipeline(Readable.fromWeb(result.stream as import('node:stream/web').ReadableStream), res); return;
    }
    if (path === 'posts' && method === 'GET') {
      const c = await catalog(); const published = c.value.posts.filter((p) => p.status === 'published').sort((a, b) => b.date.localeCompare(a.date) || b.updatedAt.localeCompare(a.updatedAt));
      const slug = req.query.slug;
      if (slug) { const post = published.find((p) => p.slug === slug); if (!post) throw new ApiError(404, 'Story unavailable.'); return json({ post }); }
      return json({ posts: published.map((p) => { const { blocks, ...summary } = p; void blocks; return summary; }) });
    }
    if (path === 'rss' && method === 'GET') {
      const c = await catalog(); const posts = c.value.posts.filter((p) => p.status === 'published').map((p) => ({ title: p.title, description: p.description, date: p.date, url: `https://jhye.dev/privileged/story/?slug=${encodeURIComponent(p.slug)}` }));
      posts.push({ title: 'When a Download Can Connect but Never Start', description: 'Tracing an upstream Ollama download stall to the first-byte boundary, then fixing the timeout path with focused regression coverage.', date: '2026-10-05', url: 'https://jhye.dev/privileged/research/ollama-download-stall/' });
      const items = posts.sort((a, b) => b.date.localeCompare(a.date)).map((p) => `<item><title>${escape(p.title)}</title><link>${escape(p.url)}</link><guid isPermaLink="true">${escape(p.url)}</guid><description>${escape(p.description)}</description><pubDate>${new Date(p.date + 'T00:00:00Z').toUTCString()}</pubDate></item>`).join('');
      res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8'); return res.send(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Privileged</title><link>https://jhye.dev/privileged/</link><description>Jhye's research notebook</description>${items}</channel></rss>`);
    }
    if (path === 'admin/posts' || /^admin\/posts\/[0-9a-f-]{36}$/.test(path)) {
      await admin(req); const c = await catalog(); const id = path.split('/')[2];
      if (!id && method === 'GET') return json({ posts: [...c.value.posts].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)) });
      const index = c.value.posts.findIndex((p) => p.id === id);
      if (id && index < 0) throw new ApiError(404, 'Post unavailable.');
      if ((!id && method === 'POST') || (id && method === 'PUT')) {
        const input = validatePost(req.body, c.value);
        if (id && input.version !== c.value.posts[index].version) throw new ApiError(409, 'This post changed. Reload before saving.');
        if (c.value.posts.some((p) => p.slug === input.slug && p.id !== id)) throw new ApiError(409, 'Choose a different slug.');
        const post = { ...input, id: id || crypto.randomUUID(), version: id ? c.value.posts[index].version + 1 : 1, updatedAt: new Date().toISOString() };
        if (id) c.value.posts[index] = post; else c.value.posts.push(post);
        await saveCatalog(c.value, c.etag); return json({ post }, id ? 200 : 201);
      }
      if (id && method === 'DELETE') {
        if (Number(req.query.version) !== c.value.posts[index].version) throw new ApiError(409, 'This post changed. Reload before deleting.');
        c.value.posts.splice(index, 1); await saveCatalog(c.value, c.etag); return json({ ok: true });
      }
    }
    throw new ApiError(404, 'Page unavailable.');
  } catch (e) {
    if (res.headersSent) { res.end(); return; }
    if (e instanceof ApiError) return res.status(e.status).json({ error: e.message });
    console.error('Privileged API failed', e instanceof Error ? e.message : 'Unknown error');
    return res.status(500).json({ error: 'The request could not be completed. Please try again.' });
  }
}
