import fs from "node:fs";
import path from "node:path";

const appRoot = process.cwd();
const sourcePath = path.join(appRoot, "content-original", "live-content-source.json");
const liveDir = path.join(appRoot, "src", "content", "live");

function firstDifference(a, b) {
  const max = Math.max(a.length, b.length);
  for (let index = 0; index < max; index += 1) {
    if (a[index] !== b[index]) {
      return {
        index,
        expected: a[index],
        actual: b[index],
      };
    }
  }
  return null;
}

function readTsPage(key) {
  const file = fs.readFileSync(path.join(liveDir, `${key}.ts`), "utf8");
  const match = file.match(/export const \w+ = ([\s\S]*?) as const;/);
  if (!match) throw new Error(`Could not parse locked content file for ${key}`);
  return JSON.parse(match[1]);
}

const pages = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const failures = [];

for (const page of pages) {
  const expected = page.lines;
  const actualPage = readTsPage(page.key);
  const actual = actualPage.lines;
  const diff = firstDifference(expected, actual);
  if (diff) {
    failures.push({
      page: page.name,
      source: page.currentUrl,
      expectedCount: expected.length,
      actualCount: actual.length,
      ...diff,
    });
  }
  const bodyDiff = firstDifference(page.contentLines ?? [], actualPage.contentLines ?? []);
  if (bodyDiff) {
    failures.push({
      page: `${page.name} body`,
      source: page.currentUrl,
      expectedCount: page.contentLines?.length ?? 0,
      actualCount: actualPage.contentLines?.length ?? 0,
      ...bodyDiff,
    });
  }
}

if (failures.length) {
  console.error("Content verification failed.");
  for (const failure of failures) {
    console.error(`\n${failure.page} (${failure.source})`);
    console.error(`Line ${failure.index + 1}`);
    console.error(`Expected: ${failure.expected ?? "<missing>"}`);
    console.error(`Actual:   ${failure.actual ?? "<missing>"}`);
    console.error(`Expected line count: ${failure.expectedCount}`);
    console.error(`Actual line count:   ${failure.actualCount}`);
  }
  process.exit(1);
}

console.log("Content verification passed. Locked content matches the saved live WordPress source.");
