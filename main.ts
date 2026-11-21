// makefun-poem-stopping-2
// A tiny Node program that writes an original short poem about stopping
// to entry.txt inside MAKEFUN_OUTPUT_DIR (default "/output") when run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `The Power to Stop

I stop before the message leaves my hand,
and read it once with cooler eyes.
The words I keep are kinder than the first —
the unsent sentence is my prize.

I stop at the edge of the crowded road,
not every race is mine to run.
A pause can hold what hurry would have spilled;
some victories are quietly won.

I leave a margin on the crowded page,
white space where a thought can breathe.
Not every silence asks to be filled in —
there is a strength in what we leave.

So let the engine cool, the cursor blink,
the door stay closed a moment more.
To stop is not to lose the way ahead;
it is to choose what moving's for.
`;

// Assemble the complete output text before writing, so the file is
// written in a single call: normalise line endings, strip any trailing
// blank lines, and guarantee exactly one newline at the end.
const text: string = poem.replace(/\r\n/g, "\n").trimEnd() + "\n";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile: string = join(outDir, "entry.txt");
writeFileSync(outFile, text, "utf8");
console.log(`Wrote poem to ${outFile}`);
