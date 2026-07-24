import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

process.env.ASTRO_TELEMETRY_DISABLED = "1";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const astro = join(root, "node_modules", ".bin", process.platform === "win32" ? "astro.cmd" : "astro");

for (const command of [`"${astro}" check`, `"${astro}" build`]) {
  const result = spawnSync(command, {
    env: process.env,
    shell: true,
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
