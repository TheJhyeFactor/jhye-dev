import { randomBytes, createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { readFileSync, writeFileSync, chmodSync } from 'node:fs'
const file = '.vercel/privileged-setup.json'
let setup
try { setup = JSON.parse(readFileSync(file, 'utf8')) } catch {
  setup = { token: randomBytes(32).toString('base64url'), sessionSecret: randomBytes(48).toString('hex') }
  writeFileSync(file, JSON.stringify(setup), { mode: 0o600 })
}
chmodSync(file, 0o600)
const values = { PRIVILEGED_SETUP_TOKEN_HASH: createHash('sha256').update(setup.token).digest('hex'), PRIVILEGED_SESSION_SECRET: setup.sessionSecret, PRIVILEGED_OWNER_EMAIL: 'omeleyjhye@gmail.com' }
for (const [name, value] of Object.entries(values)) {
  const result = spawnSync('vercel', ['env', 'add', name, 'production', '--sensitive', '--force'], { input: value, encoding: 'utf8' })
  if (result.status !== 0) { console.error(`Could not configure ${name}: ${result.stderr}`); process.exit(1) }
  console.log(`Configured ${name} privately.`)
}
