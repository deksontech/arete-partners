import fs from "node:fs";
import path from "node:path";

const pages = [
  {
    textDir: "global-capability-centers-docx-extract",
    outFile: "globalCapabilityCentersBaselineHtml.ts",
    exportName: "globalCapabilityCentersBaselineHtml",
    label: "Global Capability Centers",
  },
  {
    textDir: "education-docx-extract",
    outFile: "educationBaselineHtml.ts",
    exportName: "educationBaselineHtml",
    label: "EDUCATION",
  },
  {
    textDir: "automotive-docx-extract",
    outFile: "automotiveBaselineHtml.ts",
    exportName: "automotiveBaselineHtml",
    label: "AUTOMOTIVE",
  },
  {
    textDir: "aerospace-defence-docx-extract",
    outFile: "aerospaceDefenceBaselineHtml.ts",
    exportName: "aerospaceDefenceBaselineHtml",
    label: "Aerospace and Defence",
  },
  {
    textDir: "insurance-docx-extract",
    outFile: "insuranceBaselineHtml.ts",
    exportName: "insuranceBaselineHtml",
    label: "INSURANCE",
  },
  {
    textDir: "healthcare-docx-extract",
    outFile: "healthcareBaselineHtml.ts",
    exportName: "healthcareBaselineHtml",
    label: "HEALTHCARE",
  },
  {
    textDir: "industrial-manufacturing-sector-docx-extract",
    outFile: "industrialManufacturingSectorBaselineHtml.ts",
    exportName: "industrialManufacturingSectorBaselineHtml",
    label: "Industrial Manufacturing Sector",
  },
  {
    textDir: "pharma-docx-extract",
    outFile: "pharmaBaselineHtml.ts",
    exportName: "pharmaBaselineHtml",
    label: "Pharma",
  },
];

function extractElementorHtml(value) {
  const chunks = [];
  const visit = (node) => {
    if (!node || typeof node !== "object") return;
    if (node.settings && typeof node.settings.html === "string" && node.settings.html.trim()) {
      chunks.push(node.settings.html.trim());
    } else if (typeof node.htmlCache === "string" && node.htmlCache.trim()) {
      chunks.push(node.htmlCache.trim());
    }
    if (Array.isArray(node.elements)) {
      node.elements.forEach(visit);
    }
  };
  visit(value);
  return chunks.join("\n\n");
}

function replaceElementorJson(text) {
  return text
    .split(/\r?\n/)
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed.startsWith('{"type":"elementor"')) return line;
      try {
        return extractElementorHtml(JSON.parse(trimmed));
      } catch {
        return "";
      }
    })
    .join("\n");
}

function removeOrphanSectionClosers(text) {
  let depth = 0;
  return text
    .split(/\r?\n/)
    .filter((line) => {
      const opens = (line.match(/<section\b/gi) || []).length;
      const closes = (line.match(/<\/section>/gi) || []).length;
      if (closes && depth === 0 && opens === 0) return false;
      depth += opens - closes;
      if (depth < 0) depth = 0;
      return true;
    })
    .join("\n");
}

function normalizeIndustryHtml(text) {
  return removeOrphanSectionClosers(replaceElementorJson(text)).trim();
}

const healthcareContextHtml = `
<section class="hc-intro" id="hc-context">
  <div class="hc-intro__inner">
    <div class="hc-intro__card">
      <p class="hc-intro__text">
        At <strong>[Your Firm Name]</strong>, we partner with pharmaceutical companies to convert complexity into clarity and strategy into measurable outcomes. Our integrated approach—spanning strategy, operations, digital, ESG, and capability building—helps pharma organisations accelerate growth, build resilient operations, and deliver world-class quality.
      </p>
    </div>
  </div>
</section>`;

function restoreHealthcareContext(html, label) {
  if (label !== "HEALTHCARE" || html.includes('id="hc-context"')) return html;
  return html.replace(
    /(<\/section>\s*)(<!-- ===================== HEALTHCARE — KEY CHALLENGES)/,
    `$1\n\n${healthcareContextHtml}\n\n$2`,
  );
}

function normalizeIndustryLinks(html, label) {
  let output = html.replaceAll('href="#contact"', 'href="/contact-us"');

  if (label === "Pharma") {
    output = output.replaceAll('href="#services"', 'href="/services"');
  }

  if (label === "INSURANCE") {
    output = output
      .replaceAll('href="#ins-context"', 'href="#insurance-context"')
      .replaceAll('href="#insurance-how-we-help-slider"', 'href="#insurance-how-we-help"');
  }

  if (label === "Aerospace and Defence") {
    output = output
      .replaceAll('href="#ins-hero"', 'href="#ad-hero"')
      .replaceAll('href="#ins-context"', 'href="#ad-hero"')
      .replaceAll('href="#insurance-challenges"', 'href="#ad-challenges"')
      .replaceAll('href="#insurance-how-we-help-slider"', 'href="#ad-how-we-help"')
      .replaceAll('href="#insurance-why"', 'href="#ad-why-us"')
      .replaceAll('href="#insurance-cta"', 'href="#ad-cta"');
  }

  if (label === "EDUCATION") {
    output = output
      .replaceAll('href="#ad-challenges"', 'href="#edu-challenges"')
      .replaceAll('href="#ad-how-we-help"', 'href="#edu-how-we-help"')
      .replaceAll('href="#edu-collaboration"', 'href="#edu-collab-why"');
  }

  if (label === "HEALTHCARE") {
    output = output.replace(/\s*<a class="hcTabs__link" href="#hc-how-we-help">How We Help<\/a>/, "");
  }

  return output;
}

for (const page of pages) {
  const textPath = path.join(process.cwd(), "docs", page.textDir, "text.txt");
  const outPath = path.join(process.cwd(), "src", "content", page.outFile);
  const html = normalizeIndustryLinks(
    restoreHealthcareContext(normalizeIndustryHtml(fs.readFileSync(textPath, "utf8")), page.label),
    page.label,
  );

  fs.writeFileSync(
    outPath,
    [
      "// DO NOT EDIT THIS CONTENT.",
      `// This ${page.label} industry page baseline HTML was extracted from the supplied ${page.label}.docx.`,
      "// Only explicit written approval permits changes.",
      `export const ${page.exportName} = ${JSON.stringify(html)};`,
      "",
    ].join("\n"),
    "utf8",
  );

  console.log(`Wrote ${outPath}`);
}
