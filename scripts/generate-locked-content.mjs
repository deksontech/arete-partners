import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd(), "..");
const appRoot = process.cwd();
const sourceDir = path.join(root, "analysis-pages");
const outputDir = path.join(appRoot, "src", "content", "locked");

const pages = [
  {
    key: "home",
    name: "Home",
    route: "/",
    currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/",
    source: "12-home.txt",
    image: "/assets/purple-wave.jpeg",
  },
  {
    key: "about",
    name: "About",
    route: "/about",
    currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/about/",
    source: "15-about.txt",
    image: "/assets/city-consulting.jpg",
  },
  {
    key: "services",
    name: "Services",
    route: "/services",
    currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/services/",
    source: "23-services.txt",
    image: "/assets/banner-new.jpg",
  },
  {
    key: "growthTransformation",
    name: "Growth & Transformation",
    route: "/growth-transformation",
    currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/growth-transformation/",
    source: "657-growth-transformation.txt",
    image: "/assets/banner-new.jpg",
  },
  {
    key: "pharmaceuticalSector",
    name: "Pharmaceutical Sector",
    route: "/pharmaceutical-sector",
    currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/pharmaceutical-sector/",
    source: "307-pharmaceutical-sector.txt",
    image: "/assets/city-consulting.jpg",
  },
  {
    key: "career",
    name: "Career",
    route: "/career",
    currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/career/",
    source: "19-career.txt",
    image: "/assets/city-consulting.jpg",
  },
  {
    key: "navigationFooter",
    name: "Navigation and Footer",
    route: "",
    currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/",
    source: "10-header.txt",
    image: "",
  },
];

function readLines(file) {
  const raw = fs.readFileSync(path.join(sourceDir, file), "utf8");
  return raw
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function pageObject(page) {
  const lines = readLines(page.source);
  const title = lines[0] ?? page.name;
  const description = lines[1] ?? title;

  return {
    ...page,
    title,
    description,
    lines,
  };
}

fs.mkdirSync(outputDir, { recursive: true });

const lockedPages = pages.map(pageObject);

for (const page of lockedPages) {
  const file = path.join(outputDir, `${page.key}.ts`);
  fs.writeFileSync(
    file,
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
  path.join(outputDir, "manifest.json"),
  JSON.stringify(lockedPages, null, 2),
  "utf8",
);

fs.writeFileSync(
  path.join(outputDir, "index.ts"),
  [
    "// DO NOT EDIT THIS CONTENT.",
    "// This content is locked and must match the original website exactly.",
    "// Only explicit written approval permits changes.",
    ...lockedPages.map((page) => `import { ${page.key} } from "./${page.key}";`),
    "",
    `export const lockedPages = [${lockedPages.map((page) => page.key).join(", ")}] as const;`,
    `export const pageByRoute = Object.fromEntries(lockedPages.filter((page) => page.route).map((page) => [page.route, page]));`,
    "",
  ].join("\n"),
  "utf8",
);

console.log(`Generated ${lockedPages.length} locked content files.`);
