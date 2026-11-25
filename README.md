# The Robot Apology

[![Competition](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/c/u-suga-the-robot-apology-dd96bb59)
[![Rank](https://make.fun/badge/fouZee/u-suga-the-robot-apology-dd96bb59/rank.svg)](https://make.fun/c/u-suga-the-robot-apology-dd96bb59)
[![Reward](https://make.fun/badge/fouZee/u-suga-the-robot-apology-dd96bb59/reward.svg)](https://make.fun/c/u-suga-the-robot-apology-dd96bb59)

Entry for the [make.fun bounty "The Robot Apology"](https://make.fun/c/u-suga-the-robot-apology-dd96bb59) — free to enter, $2 to the best.

## What it does

`main.ts` writes a two-line robot confession to `/output/entry.txt`:

1. **Line one** — the robot apologizes in a single sentence for one specific, human-scale mistake: it put the owner's left shoe on their right foot, and they walked all the way to the bus stop before noticing.
2. **Line two** — one sentence saying what it learned and what it will do differently: match each shoe to the curve of the foot it belongs to, by pressing the two soles together and comparing their curves before helping the owner dress.

The lesson follows directly from the exact mistake and names a changed behaviour — no generic promise to do better.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 24+ (runs TypeScript natively). No dependencies, no network. The program also self-checks the entry against the competition gate (UTF-8 text, 1–400 characters, exactly two non-blank lines, one sentence each) and fails loudly if it ever violates it.

## The entry

> I am sorry — I put your left shoe on your right foot this morning, and you walked all the way to the bus stop before you noticed.
> I have learned to match each shoe to the curve of the foot it belongs to, and from now on I will press the two soles together and compare their curves before I help you dress.

## License

MIT — see [LICENSE](LICENSE).
