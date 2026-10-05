import assert from 'node:assert/strict';
import { chromium } from '../notebook/node_modules/@playwright/test';
async function main() {
  const origin = 'http://127.0.0.1:4320';
  const browser = await chromium.launch();
  const context = await browser.newContext(); const anonymous = await browser.newContext();
  const page = await context.newPage(); const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  const headers = { Origin: origin }; const temporary = 'Local temporary password 123!'; const replacement = 'Local replacement password 456!';
  try {
    assert.equal((await anonymous.request.post(origin + '/privileged/api/password', { headers, data: { password: replacement } })).status(), 401);
    const setup = await context.request.post(origin + '/privileged/api/setup', { headers, data: { token: 'local-test-setup-token', password: temporary, temporary: true } });
    assert.equal(setup.status(), 201); assert.equal((await setup.json()).mustChangePassword, true);
    await context.request.post(origin + '/privileged/api/logout', { headers });
    await page.goto(origin + '/privileged/login/');
    await page.getByLabel('Email', { exact: true }).fill('omeleyjhye@gmail.com'); await page.getByLabel('Password', { exact: true }).fill(temporary);
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.getByRole('heading', { name: 'Choose your own password.', exact: true }).waitFor();
    assert.equal(await page.getByRole('heading', { name: 'Publishing desk', exact: true }).count(), 0);
    const oldCookies = await context.cookies(); const oldCookie = oldCookies.find((cookie) => cookie.name === 'privileged_session')!;
    const before = await context.request.get(origin + '/privileged/api/session'); assert.equal((await before.json()).mustChangePassword, true);
    for (const path of ['admin/posts', 'admin/media']) assert.equal((await context.request.get(origin + '/privileged/api/' + path)).status(), 403);
    assert.equal((await context.request.post(origin + '/privileged/api/admin/posts', { headers, data: {} })).status(), 403);
    assert.equal((await context.request.post(origin + '/privileged/api/password', { headers: { Origin: 'https://other.example' }, data: { password: replacement } })).status(), 403);
    assert.equal((await context.request.post(origin + '/privileged/api/password', { headers, data: { password: 'short' } })).status(), 400);
    assert.equal((await context.request.post(origin + '/privileged/api/password', { headers, data: { password: temporary } })).status(), 400);
    await page.getByLabel('New password', { exact: true }).fill(replacement); await page.getByLabel('Confirm password').fill(replacement + 'mismatch');
    await page.getByRole('button', { name: 'Save password and open editor' }).click(); await page.getByRole('alert').filter({ hasText: 'The passwords do not match.' }).waitFor();
    await page.getByLabel('Confirm password').fill(replacement); await page.getByRole('button', { name: 'Save password and open editor' }).click();
    await page.getByRole('heading', { name: 'Publishing desk', exact: true }).waitFor();
    assert.equal((await context.request.get(origin + '/privileged/api/admin/posts')).status(), 200);
    assert.equal((await (await context.request.get(origin + '/privileged/api/session')).json()).mustChangePassword, false);
    assert.equal((await anonymous.request.get(origin + '/privileged/api/session', { headers: { Cookie: `${oldCookie.name}=${oldCookie.value}` } })).status(), 401);
    await page.getByRole('button', { name: 'Sign out', exact: true }).click();
    await page.getByRole('heading', { name: 'Welcome back, Jhye.', exact: true }).waitFor();
    assert.equal((await context.request.post(origin + '/privileged/api/login', { headers, data: { email: 'omeleyjhye@gmail.com', password: temporary } })).status(), 401);
    await page.getByLabel('Email', { exact: true }).fill('omeleyjhye@gmail.com'); await page.getByLabel('Password', { exact: true }).fill(replacement);
    await page.getByRole('button', { name: 'Sign in', exact: true }).click(); await page.getByRole('heading', { name: 'Publishing desk', exact: true }).waitFor();
    assert.equal((await context.request.post(origin + '/privileged/api/password', { headers, data: { password: temporary } })).status(), 409);
    assert.deepEqual(errors, []);
    console.log('PASS: temporary sign-in requires password change, publishing APIs stay locked, weak/reused passwords and CSRF are rejected, session rotates, old password stops working, and subsequent login opens the editor.');
  } finally { await browser.close(); }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
