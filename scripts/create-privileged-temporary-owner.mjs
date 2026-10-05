import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { readFileSync, writeFileSync, chmodSync } from 'node:fs';
const origin = 'https://jhye.dev';
const headers = { Origin: origin, 'Content-Type': 'application/json' };
const request = (path, body, cookie) => fetch(origin + '/privileged/api/' + path, {
  method: body ? 'POST' : 'GET', headers: { ...headers, ...(cookie ? { Cookie: cookie } : {}) }, ...(body ? { body: JSON.stringify(body) } : {}),
});
// Check the deployed password-change endpoint before initializing the account.
assert.equal((await request('password', { password: 'No account is created by this check.' })).status, 401);
const file = '.vercel/privileged-temporary-password.json';
let credential;
try { credential = JSON.parse(readFileSync(file, 'utf8')); } catch {
  credential = { email: 'omeleyjhye@gmail.com', password: 'Privileged-' + randomBytes(15).toString('base64url') + '!' };
  writeFileSync(file, JSON.stringify(credential), { mode: 0o600 });
}
chmodSync(file, 0o600);
const token = JSON.parse(readFileSync('.vercel/privileged-setup.json', 'utf8')).token;
const setup = await request('setup', { token, password: credential.password, temporary: true });
assert([201, 409].includes(setup.status), 'Temporary owner initialization failed.');
const login = await request('login', { email: credential.email, password: credential.password });
assert.equal(login.status, 200, 'The saved temporary password did not sign in.');
assert.equal((await login.json()).mustChangePassword, true, 'Password change must be enforced.');
const sessionCookie = login.headers.get('set-cookie');
assert(sessionCookie && sessionCookie.includes('HttpOnly') && sessionCookie.includes('Secure') && sessionCookie.includes('SameSite=Strict'));
const cookie = sessionCookie.split(';')[0];
assert.equal((await (await request('session', null, cookie)).json()).mustChangePassword, true);
assert.equal((await request('admin/posts', null, cookie)).status, 403);
assert.equal((await request('admin/media', null, cookie)).status, 403);
assert.equal((await request('logout', {}, cookie)).status, 200);
console.log('PASS: temporary owner created on jhye.dev; password sign-in works, secure session is issued, and publishing stays locked until the password changes.');
console.log('Credential saved privately for direct delivery to the owner.');
