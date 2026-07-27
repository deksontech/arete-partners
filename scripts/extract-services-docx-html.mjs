import fs from "node:fs";
import path from "node:path";

const textPath = path.join(process.cwd(), "docs", "services-docx-extract", "text.txt");
const outPath = path.join(process.cwd(), "src", "content", "servicesBaselineHtml.ts");

const servicesHtml = fs
  .readFileSync(textPath, "utf8")
  .trim()
  .replaceAll("https://mediumpurple-ant-531485.hostingersite.com/growth-transformation/", "/growth-transformation")
  .replaceAll("https://mediumpurple-ant-531485.hostingersite.com/operational-excellence/", "/operational-excellence")
  .replaceAll("https://mediumpurple-ant-531485.hostingersite.com/process-advisory/", "/process-advisory")
  .replaceAll("https://mediumpurple-ant-531485.hostingersite.com/service-delivery/", "/service-delivery")
  .replaceAll("https://mediumpurple-ant-531485.hostingersite.com/corporate-function/", "/corporate-function");

fs.writeFileSync(
  outPath,
  [
    "// DO NOT EDIT THIS CONTENT.",
    "// This Services page baseline HTML was extracted from the supplied Services.docx.",
    "// Only explicit written approval permits changes.",
    `export const servicesBaselineHtml = ${JSON.stringify(servicesHtml)};`,
    "",
  ].join("\n"),
  "utf8",
);

console.log(`Wrote ${outPath}`);
