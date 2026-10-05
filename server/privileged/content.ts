import { postSchema, embedUrl, type PublishedPost } from './publishing';
import { readJson, writeJson, ApiError } from './storage';
export type Media = { id: string; name: string; mime: string; size: number; pathname: string; ready: boolean; created_at: string };
export type Catalog = { posts: PublishedPost[]; media: Media[] };
export async function catalog() { const result = await readJson<Catalog>('private/catalog.json'); return { value: result?.value || { posts: [], media: [] }, etag: result?.etag }; }
export async function saveCatalog(value: Catalog, etag?: string) {
  if (Buffer.byteLength(JSON.stringify(value)) > 5 * 1024 * 1024) throw new ApiError(413, 'The notebook has reached its content limit. Export or archive older posts first.');
  await writeJson('private/catalog.json', value, etag);
}
export function validatePost(input: unknown, content: Catalog) {
  const parsed = postSchema.safeParse(input);
  if (!parsed.success) throw new ApiError(400, parsed.error.issues.map((e) => `${e.path.join('.')}: ${e.message}`).join('; '));
  const post = parsed.data;
  if (post.slug === 'ollama-download-stall') throw new ApiError(409, 'That slug belongs to the original research story.');
  if (post.status === 'published' && !post.blocks.some((b) => ['image', 'video', 'embed'].includes(b.type) || b.text.trim())) throw new ApiError(400, 'Add content before publishing.');
  for (const b of post.blocks) {
    if (b.type === 'embed' && !embedUrl(b.url)) throw new ApiError(400, 'Use a YouTube or Vimeo link.');
    if (b.type === 'image' && !b.alt.trim()) throw new ApiError(400, 'Add an image description.');
    if (b.type === 'image' || b.type === 'video') {
      const asset = content.media.find((m) => m.id === b.assetId && m.ready);
      if (!asset || !asset.mime.startsWith(b.type === 'image' ? 'image/' : 'video/')) throw new ApiError(400, 'Upload each image or video before saving.');
      b.url = `/privileged/api/media/${asset.id}`;
    }
  }
  const words = post.blocks.map((b) => b.text).join(' ').trim().split(/\s+/).length;
  return { ...post, readingTime: Math.max(1, Math.ceil(words / 220)) };
}
export const mediaInfo = (m: Media) => ({ id: m.id, name: m.name, mime: m.mime, size: m.size, created_at: m.created_at, url: `/privileged/api/media/${m.id}` });
export const mediaTypes = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif', 'video/mp4': 'mp4', 'video/webm': 'webm' };
export function validMedia(bytes: Uint8Array, type: string) {
  const chars = (a: number, b: number) => String.fromCharCode(...bytes.slice(a, b));
  return type === 'image/jpeg' ? bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255
    : type === 'image/png' ? bytes[0] === 137 && chars(1, 4) === 'PNG'
    : type === 'image/webp' ? chars(0, 4) === 'RIFF' && chars(8, 12) === 'WEBP'
    : type === 'image/gif' ? ['GIF87a', 'GIF89a'].includes(chars(0, 6))
    : type === 'video/mp4' ? chars(4, 8) === 'ftyp'
    : type === 'video/webm' && bytes[0] === 26 && bytes[1] === 69 && bytes[2] === 223 && bytes[3] === 163;
}
