import { spawnSync } from 'node:child_process'
import { cpSync, existsSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
const notebook = path.join(root, 'notebook')
for (const task of ['typecheck', 'lint', 'build']) {
  const result = spawnSync('npm', ['run', task], { cwd: notebook, stdio: 'inherit', env: { ...process.env, NEXT_PUBLIC_SITE_URL: 'https://jhye.dev/privileged', PRIVILEGED_BASE_PATH: '/privileged' } })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}
const output = path.join(notebook, 'out')
if (!existsSync(path.join(output, 'index.html'))) throw new Error('Privileged export is missing.')
const target = path.join(root, 'public', 'privileged')
rmSync(target, { recursive: true, force: true })
cpSync(output, target, { recursive: true })
console.log('Privileged exported into jhye.dev/privileged/.')
