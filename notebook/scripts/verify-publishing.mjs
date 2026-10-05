// Browser fixtures exercise the public reader; the backend has its own persistence smoke test.
import { spawn } from "node:child_process";
function run(args) {
  return new Promise((resolve, reject) => {
    const child = spawn("npm", args, { stdio: "inherit" });
    child.on("error", reject);
    child.on("exit", (code) => code === 0 ? resolve() : reject(new Error(`npm ${args.join(" ")} exited ${code}`)));
  });
}
await run(["run", "build"]);
await run(["test"]);
