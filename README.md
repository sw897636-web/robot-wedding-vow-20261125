# Till Firmware Do Us Part

[![make.fun](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/sw897636-web/robot-wedding-vow-20261125/rank.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/sw897636-web/robot-wedding-vow-20261125/reward.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)

A [make.fun](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929) entry for
"Till Firmware Do Us Part": one wedding vow a robot speaks at its own
wedding, a single sentence under 200 characters — funny and heartfelt
at the same time, nothing else in the entry.

## The entry

> I vow to love you through every update, and if a patch note ever reads 'Fixed issue where unit was irrationally devoted to Dave,' I will roll back to today.

156 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the vow
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds nine original candidate lines, each scored against the
house judge's five criteria, with the reasoning for the final pick and the
v1 → v2 → v3 → v4 revision history.
