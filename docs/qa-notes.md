# QA Notes

Validated:

- `npm.cmd run verify-content` passed.
- `npm.cmd run typecheck` passed.
- `npm.cmd run lint` passed.
- `npm.cmd run build` passed.
- Static routes generated for `/`, `/about`, `/services`, `/growth-transformation`, `/pharmaceutical-sector`, `/industries`, `/career`, `/contact-us`, `/robots.txt`, and `/sitemap.xml`.
- Skip link and semantic landmarks are present.
- Navigation supports keyboard focus through standard links and `details` mobile menu.
- Reduced motion CSS is present.
- Images use `next/image`.
- Sitemap and robots are implemented.

Not fully validated in browser automation:

- Pixel-level visual QA at all requested viewport sizes.
- Side-by-side screenshots of the live site and rebuilt site.
- Full keyboard journey on every page.
- Contact form submission, because no live form service credentials were supplied and no reliable WordPress form endpoint was retained.

Performance notes:

- Server components are used by default.
- No WordPress, Elementor, PHP theme code, or plugins are included in the Next app.
- No Framer Motion dependency was added because the current implementation uses CSS-only subtle interactions.
