// The Robot Apology — make.fun entry (u-suga-the-robot-apology-dd96bb59).
// Writes a two-line robot confession to /output/entry.txt:
// line 1 owns one specific, human-scale mistake; line 2 names the
// lesson that follows from it and the behaviour that changes.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I am sorry \u2014 I put your left shoe on your right foot this morning, and you walked all the way to the bus stop before you noticed.\n" +
  "I have learned to match each shoe to the curve of the foot it belongs to, and from now on I will press the two soles together and compare their curves before I help you dress.\n";

// Gate self-check (competition.yaml): UTF-8 text, 1-400 chars, exactly two
// non-blank lines, one sentence each. Fail loudly rather than ship invalid.
const lines = ENTRY.trimEnd().split("\n");
if (ENTRY.length < 1 || ENTRY.length > 400) throw new Error(`entry is ${ENTRY.length} chars, gate allows 1-400`);
if (lines.length !== 2 || lines.some((l) => !l.trim())) throw new Error("entry must be exactly two non-blank lines");
if (lines.some((l) => (l.match(/\./g) ?? []).length !== 1)) throw new Error("each line must be exactly one sentence");

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${outPath}`);
