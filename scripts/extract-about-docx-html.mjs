import fs from "node:fs";
import path from "node:path";

const textPath = path.join(process.cwd(), "docs", "about-us-docx-extract", "text.txt");
const outPath = path.join(process.cwd(), "src", "content", "aboutBaselineHtml.ts");

const aboutHtml = fs.readFileSync(textPath, "utf8").trim();

fs.writeFileSync(
  outPath,
  [
    "// DO NOT EDIT THIS CONTENT.",
    "// This About page baseline HTML was extracted from the supplied ABOUT US.docx.",
    "// Only explicit written approval permits changes.",
    `export const aboutBaselineHtml = ${JSON.stringify(aboutHtml)};`,
    "",
  ].join("\n"),
  "utf8",
);

console.log(`Wrote ${outPath}`);
