import fs from "node:fs";
import path from "node:path";

const pages = [
  {
    textDir: "process-advisory-docx-extract",
    outFile: "processAdvisoryBaselineHtml.ts",
    exportName: "processAdvisoryBaselineHtml",
    label: "Process Advisory",
  },
  {
    textDir: "growth-transformation-docx-extract",
    outFile: "growthTransformationBaselineHtml.ts",
    exportName: "growthTransformationBaselineHtml",
    label: "Growth and Transofrmation",
  },
  {
    textDir: "careers-docx-extract",
    outFile: "careersBaselineHtml.ts",
    exportName: "careersBaselineHtml",
    label: "CAREERS",
  },
  {
    textDir: "operational-excellence-docx-extract",
    outFile: "operationalExcellenceBaselineHtml.ts",
    exportName: "operationalExcellenceBaselineHtml",
    label: "Operational Excellence",
  },
  {
    textDir: "corporate-function-docx-extract",
    outFile: "corporateFunctionBaselineHtml.ts",
    exportName: "corporateFunctionBaselineHtml",
    label: "Corporate Funtion",
  },
  {
    textDir: "service-delivery-docx-extract",
    outFile: "serviceDeliveryBaselineHtml.ts",
    exportName: "serviceDeliveryBaselineHtml",
    label: "Service Delivery",
  },
];

for (const page of pages) {
  const textPath = path.join(process.cwd(), "docs", page.textDir, "text.txt");
  const outPath = path.join(process.cwd(), "src", "content", page.outFile);
  const html = fs.readFileSync(textPath, "utf8").trim();

  fs.writeFileSync(
    outPath,
    [
      "// DO NOT EDIT THIS CONTENT.",
      `// This ${page.label} page baseline HTML was extracted from the supplied ${page.label}.docx.`,
      "// Only explicit written approval permits changes.",
      `export const ${page.exportName} = ${JSON.stringify(html)};`,
      "",
    ].join("\n"),
    "utf8",
  );

  console.log(`Wrote ${outPath}`);
}
