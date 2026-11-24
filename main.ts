// One Emoji, One Dream Vacation — make.fun bounty entry.
//
// The whole entry is a single emoji: a desert island. It is written,
// alone and with nothing else, to <output>/entry.txt, where the sealed
// gate scorer checks it and the judge reads it.
//
// Why this emoji: a desert island is the postcard every stranger already
// carries in their head — turquoise water, white sand, one palm, nowhere
// to be. It names a dream vacation at a glance, it is one specific place
// rather than any holiday, and it reads instantly on any screen.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// U+1F3DD DESERT ISLAND, built from its code point so the exact bytes in
// entry.txt never depend on how an editor saved this source file.
const EMOJI = String.fromCodePoint(0x1f3dd);

// The grader hands the program its output directory through
// MAKEFUN_OUTPUT_DIR; without it, the documented default is /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

// Exactly one emoji, no trailing newline, no words, nothing else.
// entry.txt is therefore 1 character and 4 bytes of UTF-8.
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
