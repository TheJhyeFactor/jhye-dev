import { get, put, BlobPreconditionFailedError } from '@vercel/blob';
import { promises as fs } from 'node:fs';
import path from 'node:path';
export class ApiError extends Error { constructor(public status: number, message: string) { super(message); } }
const localDirectory = () => process.env.VERCEL !== '1' && process.env.NODE_ENV !== 'production' ? process.env.PRIVILEGED_LOCAL_DATA_DIR : undefined;
export async function readJson<T>(key: string): Promise<{ value: T; etag: string } | null> {
  const dir = localDirectory();
  if (dir) {
    try { const contents = await fs.readFile(path.join(dir, key), 'utf8'); const record = JSON.parse(contents); return record; }
    catch (e) { if ((e as NodeJS.ErrnoException).code === 'ENOENT') return null; throw e; }
  }
  const result = await get(key, { access: 'private', useCache: false });
  if (!result || result.statusCode !== 200) return null;
  return { value: await new Response(result.stream).json() as T, etag: result.blob.etag };
}
export async function writeJson<T>(key: string, value: T, etag?: string) {
  const dir = localDirectory();
  if (dir) {
    await fs.mkdir(path.dirname(path.join(dir, key)), { recursive: true });
    const lock = path.join(dir, `${key}.lock`); let handle;
    try { handle = await fs.open(lock, 'wx'); } catch { throw new ApiError(409, 'Another save is in progress. Please retry.'); }
    try {
      const current = await readJson(key);
      if (current?.etag !== etag) throw new ApiError(409, 'This content changed. Reload before saving again.');
      const next = crypto.randomUUID(); await fs.writeFile(path.join(dir, key), JSON.stringify({ value, etag: next }), { mode: 0o600 }); return next;
    } finally { await handle.close(); await fs.unlink(lock); }
  }
  try {
    const result = await put(key, JSON.stringify(value), { access: 'private', contentType: 'application/json', addRandomSuffix: false, ...(etag ? { ifMatch: etag } : { allowOverwrite: false }) });
    return result.etag;
  } catch (e) { if (e instanceof BlobPreconditionFailedError || (e as Error).message?.includes('already exists')) throw new ApiError(409, 'This content changed. Reload before saving again.'); throw e; }
}
