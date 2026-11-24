import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I promise to protect the one bug in my code that makes me choose you every single time, and never let anyone patch it out.";

// The entry must be a single line, 1-200 characters, and not blank.
// Refuse to write anything invalid rather than emit a malformed entry.
if (VOW.length < 1 || VOW.length > 200) {
  console.error(`Invalid vow: length ${VOW.length}, must be 1-200 characters.`);
  process.exit(1);
}
if (VOW.trim().length === 0) {
  console.error("Invalid vow: vow must not be whitespace-only.");
  process.exit(1);
}
if (VOW.includes("\n") || VOW.includes("\r")) {
  console.error("Invalid vow: vow must be a single line.");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
