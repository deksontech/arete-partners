import fs from "node:fs";
import path from "node:path";

const appRoot = process.cwd();
const liveOutDir = path.join(appRoot, "src", "content", "live");
const originalDir = path.join(appRoot, "content-original");
const originalPath = path.join(originalDir, "live-content-source.json");

const pages = [
  { key: "home", name: "Home", route: "/", url: "https://mediumpurple-ant-531485.hostingersite.com/", image: "/assets/purple-wave.jpeg", start: "The Arete Partners Way" },
  { key: "about", name: "About", route: "/about", url: "https://mediumpurple-ant-531485.hostingersite.com/about/", image: "/assets/city-consulting.jpg", start: "About Us" },
  { key: "services", name: "Services", route: "/services", url: "https://mediumpurple-ant-531485.hostingersite.com/services/", image: "/assets/banner-new.jpg", start: "Purpose and Our Goal Statement" },
  { key: "career", name: "Career", route: "/career", url: "https://mediumpurple-ant-531485.hostingersite.com/career/", image: "/assets/city-consulting.jpg", start: "Careers" },
  { key: "growthTransformation", name: "Growth & Transformation", route: "/growth-transformation", url: "https://mediumpurple-ant-531485.hostingersite.com/growth-transformation/", image: "/assets/banner-new.jpg", start: "From scattered initiatives to a single growth & transformation spine" },
  { key: "pharmaceuticalSector", name: "Pharmaceutical Sector", route: "/pharmaceutical-sector", url: "https://mediumpurple-ant-531485.hostingersite.com/pharmaceutical-sector/", image: "/assets/city-consulting.jpg", start: "Pharmaceutical Sector" },
  { key: "industries", name: "Industries", route: "/industries", url: "https://mediumpurple-ant-531485.hostingersite.com/industries/", image: "/assets/banner-new.jpg", start: "Industries" },
  { key: "team", name: "Team", route: "/team", url: "https://mediumpurple-ant-531485.hostingersite.com/team/", image: "/assets/city-consulting.jpg", start: "Team" },
  { key: "products", name: "Products", route: "/products", url: "https://mediumpurple-ant-531485.hostingersite.com/products/", image: "/assets/banner-new.jpg", start: "Products" },
  { key: "trainings", name: "Trainings", route: "/trainings", url: "https://mediumpurple-ant-531485.hostingersite.com/trainings/", image: "/assets/city-consulting.jpg", start: "Trainings" },
  { key: "contactUs", name: "Contact Us", route: "/contact-us", url: "https://mediumpurple-ant-531485.hostingersite.com/contact-us/", image: "/assets/purple-wave.jpeg", start: "Contact Us" },
];

function decodeHtml(text) {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function cleanLine(line) {
  return decodeHtml(line)
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

function htmlToVisibleLines(html) {
  const bodyMatch = html.match(/<body[\s\S]*?<\/body>/i);
  const body = bodyMatch ? bodyMatch[0] : html;
  return body
    .replace(/<script[\s\S]*?<\/script>/gi, "\n")
    .replace(/<style[\s\S]*?<\/style>/gi, "\n")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "\n")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "\n")
    .replace(/<!--[\s\S]*?-->/g, "\n")
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, "\n")
    .replace(/<video[\s\S]*?<\/video>/gi, "\n")
    .replace(/<img[^>]*alt=["']([^"']+)["'][^>]*>/gi, "\n$1\n")
    .replace(/<\/(h[1-6]|p|li|a|button|div|section|article|header|footer|span|strong|b|em|small|label|option)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .split(/\n+/)
    .map(cleanLine)
    .filter(Boolean)
    .filter((line) => !/^var\(|^@|^\{|\}$/.test(line));
}

function uniqueAdjacent(lines) {
  const result = [];
  for (const line of lines) {
    if (result[result.length - 1] !== line) result.push(line);
  }
  return result;
}

function pageTitle(html, fallback) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? cleanLine(match[1]) : fallback;
}

const extracted = [];

for (const page of pages) {
  const response = await fetch(page.url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; AreteContentExtractor/1.0)",
    },
  });
  if (!response.ok) throw new Error(`Failed to fetch ${page.url}: ${response.status}`);
  const html = await response.text();
  const lines = uniqueAdjacent(htmlToVisibleLines(html));
  const startIndex = Math.max(0, lines.findIndex((line) => line === page.start || line.includes(page.start)));
  const contentLines = lines.slice(startIndex);
  extracted.push({
    ...page,
    currentUrl: page.url,
    title: pageTitle(html, page.name),
    description: contentLines.find((line) => line.length > 28) ?? page.name,
    lines,
    contentLines,
  });
  console.log(`${page.route} ${lines.length} lines`);
}

fs.mkdirSync(liveOutDir, { recursive: true });
fs.mkdirSync(originalDir, { recursive: true });
fs.writeFileSync(originalPath, JSON.stringify(extracted, null, 2), "utf8");

for (const page of extracted) {
  fs.writeFileSync(
    path.join(liveOutDir, `${page.key}.ts`),
    [
      "// DO NOT EDIT THIS CONTENT.",
      "// This content is locked and must match the original website exactly.",
      "// Only explicit written approval permits changes.",
      `export const ${page.key} = ${JSON.stringify(page, null, 2)} as const;`,
      "",
    ].join("\n"),
    "utf8",
  );
}

fs.writeFileSync(
  path.join(liveOutDir, "index.ts"),
  [
    "// DO NOT EDIT THIS CONTENT.",
    "// This content is locked and must match the original website exactly.",
    "// Only explicit written approval permits changes.",
    ...extracted.map((page) => `import { ${page.key} } from "./${page.key}";`),
    "",
    `export const livePages = [${extracted.map((page) => page.key).join(", ")}] as const;`,
    "",
  ].join("\n"),
  "utf8",
);

console.log(`Saved live content source to ${originalPath}`);
