# Content Verification Report

Status: locked baseline verified against extracted source snapshots.

What was verified:

- Locked page content was generated from `analysis-pages/*.txt`.
- `npm run verify-content` compares every locked line against the extracted source snapshot and fails on wording, punctuation, capitalisation, added lines, removed lines, or reordered lines.
- All implemented primary routes render from locked content in `src/content/locked/`.
- No page content is buried in large one-off page components.
- Build output confirms every intended route is generated.
- The July 27, 2026 `.wpress` archive produced readable `database.sql` and upload assets.

Known differences and limitations:

- The original WordPress/Elementor export contains duplicated hero variants, placeholder text, and legacy header/footer remnants. The locked baseline preserves the extracted snapshot text exactly, including imperfect or placeholder content.
- The first implementation had rewritten content. That direction has been stopped; current routed pages now use locked generated content.
- The July database contains additional raw Elementor sections beyond the earlier `analysis-pages` snapshots. These should be reviewed before production cutover if strict byte-for-byte visible text parity is required.
- The live website could not be used as a full automated visual/text source because the basic fetcher was blocked.

Unverified content:

- Any content that exists only inside raw Elementor JSON blocks that was not represented in `analysis-pages/*.html`.
- Hidden or plugin-generated form messages.
- WordPress SEO plugin metadata, if present.

Recommendation:

Before pointing the live domain at this site, run a browser-based crawl of the current WordPress site and compare extracted visible text against `src/content/site.ts`.

Latest command results:

- `npm.cmd run verify-content` passed.
- `npm.cmd run typecheck` passed.
- `npm.cmd run lint` passed.
- `npm.cmd run build` passed.
