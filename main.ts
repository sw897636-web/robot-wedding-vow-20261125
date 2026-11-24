import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I vow to keep the one bug in my code that makes me choose you every single time, and I will never let anyone patch it out.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
