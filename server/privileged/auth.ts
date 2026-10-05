import { createHmac, createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readJson, writeJson, ApiError } from './storage';
const scrypt = promisify(scryptCallback);
export type Owner = { email: string; salt: string; passwordHash: string; epoch: string; mustChangePassword?: boolean };
const secret = () => { const value = process.env.PRIVILEGED_SESSION_SECRET; if (!value || value.length < 40) throw new ApiError(503, 'Publishing is not configured yet.'); return value; };
const cookie = 'privileged_session';
export function originCheck(req: VercelRequest) {
  const origin = req.headers.origin;
  const host = req.headers.host;
  if (!origin || new URL(origin).host !== host || (process.env.NODE_ENV === 'production' && !origin.startsWith('https://'))) throw new ApiError(403, 'Write requests must come from this site.');
}
const same = (a: string, b: string) => { const x = Buffer.from(a); const y = Buffer.from(b); return x.length === y.length && timingSafeEqual(x, y); };
export async function owner() { return (await readJson<Owner>('private/owner.json'))?.value; }
export async function signedIn(req: VercelRequest) {
  const token = req.cookies?.[cookie] || req.headers.cookie?.split('; ').find((s) => s.startsWith(cookie + '='))?.slice(cookie.length + 1);
  if (!token) return null;
  const [payload, signature] = token.split('.'); if (!payload || !signature) return null;
  if (!same(createHmac('sha256', secret()).update(payload).digest('base64url'), signature)) return null;
  try { const data = JSON.parse(Buffer.from(payload, 'base64url').toString()); if (data.expires < Date.now()) return null;
    const account = await owner(); return account && account.epoch === data.epoch ? account : null;
  } catch { return null; }
}
export async function admin(req: VercelRequest) {
  const account = await signedIn(req); if (!account) throw new ApiError(401, 'Sign in to manage Privileged.');
  if (!['GET', 'HEAD'].includes(req.method || 'GET')) originCheck(req);
  if (account.mustChangePassword) throw new ApiError(403, 'Change your temporary password before publishing.');
  return account;
}
export function session(res: VercelResponse, account: Owner) {
  const payload = Buffer.from(JSON.stringify({ epoch: account.epoch, expires: Date.now() + 12 * 3600000 })).toString('base64url');
  const token = payload + '.' + createHmac('sha256', secret()).update(payload).digest('base64url');
  res.setHeader('Set-Cookie', `${cookie}=${token}; HttpOnly; SameSite=Strict; Path=/privileged; Max-Age=43200${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`);
}
export function signOut(res: VercelResponse) { res.setHeader('Set-Cookie', `${cookie}=; HttpOnly; SameSite=Strict; Path=/privileged; Max-Age=0${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`); }
export async function setup(req: VercelRequest, res: VercelResponse) {
  originCheck(req); secret();
  const token = String(req.body?.token || '');
  const tokenHash = createHash('sha256').update(token).digest('hex');
  if (!process.env.PRIVILEGED_SETUP_TOKEN_HASH || !same(tokenHash, process.env.PRIVILEGED_SETUP_TOKEN_HASH)) throw new ApiError(403, 'This setup link is invalid.');
  if (await owner()) throw new ApiError(409, 'Your account is already set up. Use the login form.');
  const email = process.env.PRIVILEGED_OWNER_EMAIL || 'omeleyjhye@gmail.com';
  const password = req.body?.password;
  if (typeof password !== 'string' || password.length < 12 || password.length > 256) throw new ApiError(400, 'Use a password between 12 and 256 characters.');
  const salt = randomBytes(24).toString('hex'); const hash = await scrypt(password, salt, 64) as Buffer;
  const account = { email, salt, passwordHash: hash.toString('hex'), epoch: crypto.randomUUID(), mustChangePassword: req.body?.temporary === true };
  await writeJson('private/owner.json', account); session(res, account); return { email, mustChangePassword: account.mustChangePassword };
}
export async function changePassword(req: VercelRequest, res: VercelResponse) {
  originCheck(req);
  const account = await signedIn(req);
  if (!account) throw new ApiError(401, 'Sign in to change your temporary password.');
  if (!account.mustChangePassword) throw new ApiError(409, 'Your publishing password has already been changed.');
  const password = req.body?.password;
  if (typeof password !== 'string' || password.length < 12 || password.length > 256) throw new ApiError(400, 'Use a password between 12 and 256 characters.');
  const previousHash = await scrypt(password, account.salt, 64) as Buffer;
  if (same(previousHash.toString('hex'), account.passwordHash)) throw new ApiError(400, 'Choose a new password, different from the temporary one.');
  const current = await readJson<Owner>('private/owner.json');
  if (!current || current.value.epoch !== account.epoch) throw new ApiError(409, 'Your account changed. Sign in again.');
  const salt = randomBytes(24).toString('hex'); const hash = await scrypt(password, salt, 64) as Buffer;
  const updated = { ...account, salt, passwordHash: hash.toString('hex'), epoch: crypto.randomUUID(), mustChangePassword: false };
  await writeJson('private/owner.json', updated, current.etag);
  session(res, updated); return { email: updated.email, mustChangePassword: false };
}
export async function login(req: VercelRequest, res: VercelResponse) {
  originCheck(req); secret();
  const ip = String(req.headers['x-vercel-forwarded-for'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown').split(',')[0];
  const rateKey = 'private/attempts/' + createHmac('sha256', secret()).update(ip).digest('hex') + '.json';
  const attempts = await readJson<{ count: number; until: number }>(rateKey);
  const active = attempts && attempts.value.until > Date.now() ? attempts.value : { count: 0, until: Date.now() + 15 * 60000 };
  if (active.count >= 8) throw new ApiError(429, 'Too many sign-in attempts. Try again in 15 minutes.');
  const account = await owner();
  const password = typeof req.body?.password === 'string' ? req.body.password.slice(0, 257) : '';
  const hash = await scrypt(password, account?.salt || 'unconfigured-owner', 64) as Buffer;
  const valid = account && same(hash.toString('hex'), account.passwordHash) && String(req.body?.email || '').toLowerCase() === account.email.toLowerCase();
  await writeJson(rateKey, valid ? { count: 0, until: 0 } : { ...active, count: active.count + 1 }, attempts?.etag);
  if (!valid) throw new ApiError(401, 'The email or password is incorrect.');
  session(res, account); return { email: account.email, mustChangePassword: !!account.mustChangePassword };
}
