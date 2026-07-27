import fs from "node:fs";
import path from "node:path";

const appRoot = process.cwd();
const workspaceRoot = path.resolve(appRoot, "..");
const sqlPath = path.join(workspaceRoot, "site-export", "july-2026", "database.sql");
const outDir = path.join(appRoot, "src", "content", "wordpress");

const pageIds = new Set([12, 15, 19, 23, 307, 657]);
const routeBySlug = new Map([
  ["home", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["career", "/career"],
  ["pharmaceutical-sector", "/pharmaceutical-sector"],
  ["growth-transformation", "/growth-transformation"],
]);

function splitRows(valuesText) {
  const rows = [];
  let depth = 0;
  let inString = false;
  let escaped = false;
  let current = "";

  for (const char of valuesText) {
    current += char;
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "'") {
        inString = false;
      }
      continue;
    }
    if (char === "'") inString = true;
    if (char === "(") depth += 1;
    if (char === ")") depth -= 1;
    if (depth === 0 && current.trim().endsWith(")")) {
      rows.push(current.trim().replace(/,$/, ""));
      current = "";
    }
  }
  return rows;
}

function parseRow(rowText) {
  const text = rowText.trim().replace(/^\(/, "").replace(/\)$/, "");
  const values = [];
  let inString = false;
  let escaped = false;
  let current = "";

  for (const char of text) {
    if (inString) {
      if (escaped) {
        current += "\\" + char;
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "'") {
        inString = false;
      } else {
        current += char;
      }
      continue;
    }
    if (char === "'") {
      inString = true;
      continue;
    }
    if (char === ",") {
      values.push(decodeSqlValue(current));
      current = "";
      continue;
    }
    current += char;
  }
  values.push(decodeSqlValue(current));
  return values;
}

function decodeSqlValue(value) {
  const trimmed = value.trim();
  if (trimmed === "NULL") return null;
  if (/^-?\d+$/.test(trimmed)) return Number(trimmed);
  return trimmed
    .replace(/\\r/g, "\r")
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t")
    .replace(/\\"/g, "\"")
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, "\\");
}

function getInsertRows(sql, table) {
  const rows = [];
  const marker = `INSERT INTO \`${table}\` VALUES `;
  let index = 0;
  while (true) {
    const start = sql.indexOf(marker, index);
    if (start === -1) break;
    const valuesStart = start + marker.length;
    const end = sql.indexOf(";\n", valuesStart);
    const statement = sql.slice(valuesStart, end === -1 ? undefined : end);
    rows.push(...splitRows(statement).map(parseRow));
    index = end === -1 ? sql.length : end + 2;
  }
  return rows;
}

function htmlToLines(html) {
  return decodeHtml(html)
    .replace(/<style[\s\S]*?<\/style>/gi, "\n")
    .replace(/<script[\s\S]*?<\/script>/gi, "\n")
    .replace(/<link[\s\S]*?>/gi, "\n")
    .replace(/<!--[\s\S]*?-->/g, "\n")
    .replace(/<\/(h[1-6]|p|li|a|button|div|section|article|header|footer|span|strong|b|em)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .split(/\n+/)
    .map(cleanLine)
    .filter(Boolean);
}

function decodeHtml(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&rdquo;/g, "”")
    .replace(/&ldquo;/g, "“")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8217;/g, "’")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”");
}

function cleanLine(line) {
  return line
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

function collectFromSettings(settings, lines, media) {
  const textKeys = [
    "title",
    "editor",
    "text",
    "text_editor",
    "button_text",
    "link_text",
    "selected_icon",
    "label",
    "description",
    "html",
    "heading",
    "sub_title",
    "tab_title",
    "tab_content",
    "item_title",
    "item_description",
    "search_input_placeholder_text",
    "nothing_found_message_text",
    "pagination_prev_label",
    "pagination_next_label",
  ];

  for (const [key, value] of Object.entries(settings ?? {})) {
    if (typeof value === "string") {
      if (/\.(png|jpe?g|webp|gif|mp4|svg|pdf)(\?|$)/i.test(value) || value.includes("/wp-content/uploads/")) {
        media.add(value);
      }
      if (textKeys.includes(key)) {
        const extracted = key === "html" || value.includes("<") ? htmlToLines(value) : [cleanLine(decodeHtml(value))].filter(Boolean);
        lines.push(...extracted);
      }
    } else if (Array.isArray(value)) {
      for (const item of value) {
        if (item && typeof item === "object") collectFromSettings(item, lines, media);
        if (typeof item === "string") lines.push(...htmlToLines(item));
      }
    } else if (value && typeof value === "object") {
      collectFromSettings(value, lines, media);
    }
  }
}

function walkElementor(elements, lines, media) {
  for (const element of elements ?? []) {
    collectFromSettings(element.settings, lines, media);
    walkElementor(element.elements, lines, media);
  }
}

function uniqueInOrder(items) {
  const seen = new Set();
  const result = [];
  for (const item of items) {
    const cleaned = cleanLine(item);
    if (!cleaned || seen.has(cleaned)) continue;
    seen.add(cleaned);
    result.push(cleaned);
  }
  return result;
}

const sql = fs.readFileSync(sqlPath, "utf8");
const postRows = getInsertRows(sql, "SERVMASK_PREFIX_posts");
const metaRows = getInsertRows(sql, "SERVMASK_PREFIX_postmeta");

const posts = new Map();
for (const row of postRows) {
  const [id, , , , postContent, postTitle, , postStatus, , , , postName, , , , , , , , , postType] = row;
  if (pageIds.has(id) || (postType === "page" && postStatus === "publish")) {
    posts.set(id, {
      id,
      title: postTitle,
      slug: postName || (id === 12 ? "home" : String(id)),
      postContent,
      postType,
      postStatus,
      elementor: null,
    });
  }
}

for (const row of metaRows) {
  const [, postId, metaKey, metaValue] = row;
  if (metaKey === "_elementor_data" && posts.has(postId)) {
    posts.get(postId).elementor = metaValue;
  }
}

const extractedPages = [];
for (const post of posts.values()) {
  if (!pageIds.has(post.id)) continue;
  const lines = [];
  const media = new Set();

  if (post.title) lines.push(cleanLine(post.title));

  if (post.elementor) {
    try {
      const data = JSON.parse(post.elementor);
      walkElementor(data, lines, media);
    } catch (error) {
      lines.push(...htmlToLines(post.postContent ?? ""));
      lines.push(`ELEMENTOR_PARSE_ERROR: ${error.message}`);
    }
  } else {
    lines.push(...htmlToLines(post.postContent ?? ""));
  }

  const route = routeBySlug.get(post.slug) ?? `/${post.slug}`;
  extractedPages.push({
    id: post.id,
    key: post.slug === "home" ? "home" : post.slug.replace(/-([a-z])/g, (_, char) => char.toUpperCase()),
    name: post.title || post.slug,
    slug: post.slug,
    route,
    currentUrl: route === "/" ? "https://mediumpurple-ant-531485.hostingersite.com/" : `https://mediumpurple-ant-531485.hostingersite.com/${post.slug}/`,
    title: post.title || post.slug,
    description: uniqueInOrder(lines).find((line) => line !== post.title && line.length > 25) ?? post.title,
    lines: uniqueInOrder(lines),
    media: [...media],
  });
}

extractedPages.sort((a, b) => [...pageIds].indexOf(a.id) - [...pageIds].indexOf(b.id));

fs.mkdirSync(outDir, { recursive: true });
for (const page of extractedPages) {
  fs.writeFileSync(
    path.join(outDir, `${page.key}.ts`),
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

fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(extractedPages, null, 2), "utf8");
fs.writeFileSync(
  path.join(outDir, "index.ts"),
  [
    "// DO NOT EDIT THIS CONTENT.",
    "// This content is locked and must match the original website exactly.",
    "// Only explicit written approval permits changes.",
    ...extractedPages.map((page) => `import { ${page.key} } from "./${page.key}";`),
    "",
    `export const wordpressPages = [${extractedPages.map((page) => page.key).join(", ")}] as const;`,
    "",
  ].join("\n"),
  "utf8",
);

console.log(`Extracted ${extractedPages.length} WordPress pages.`);
for (const page of extractedPages) {
  console.log(`${page.id} ${page.slug} ${page.lines.length} lines`);
}
