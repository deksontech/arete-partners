import fs from "node:fs";
import path from "node:path";

const textPath = path.join(process.cwd(), "docs", "home-page-docx-extract", "text.txt");
const outPath = path.join(process.cwd(), "src", "content", "homeBaselineHtml.ts");

const text = fs.readFileSync(textPath, "utf8");
const marker = "<!-- ===================== ABOUT US — SECTION 1 (HERO – CLEAN)";
const end = text.indexOf(marker);
const homepageHtml = end === -1 ? text : text.slice(0, end).trim();

fs.writeFileSync(
  outPath,
  [
    "// DO NOT EDIT THIS CONTENT.",
    "// This homepage baseline HTML was extracted from the supplied Home page.docx.",
    "// Only explicit written approval permits changes.",
    `export const homeBaselineHtml = ${JSON.stringify(homepageHtml)};`,
    "",
  ].join("\n"),
  "utf8",
);

console.log(`Wrote ${outPath}`);
