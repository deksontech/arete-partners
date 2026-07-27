# Arete Partners Next.js Rebuild

WordPress-free rebuild of the Arete Partners website using Next.js App Router, TypeScript, Tailwind CSS, reusable React components, semantic HTML, and local public assets.

## Local Setup

Required Node.js: 20 LTS or newer. Current build was validated with Node.js 24.14.1.

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

PowerShell execution policy may block `npm`; use `npm.cmd` on this Windows machine.

## Project Structure

- `src/content/site.ts` - structured extracted content, navigation, routes, redirects.
- `src/components/` - reusable header, footer, and page renderer.
- `src/app/` - App Router pages, metadata, sitemap, robots.
- `public/assets/` - supplied and extracted Arete media.
- `docs/` - content inventory, URL mapping, asset inventory, QA notes, limitations.

## Deployment

Build command: `npm run build`

Start command: `npm run start`

Recommended platforms: Vercel, Hostinger Node.js hosting, or another Node.js-compatible host.

Before switching the production domain, verify production build, redirects, links, mobile layouts, forms/integrations, and content verification.

## Environment Variables

See `.env.example`.

No secrets are committed. Contact-delivery variables are placeholders for a future native form integration if credentials are provided.

## Security Notes

The `.wpress` backup and extracted WordPress files are not placed in `public/`.

`npm audit --audit-level=high` currently reports high-severity advisories in transitive dependencies from the current Next/ESLint toolchain. `npm audit fix --force` proposes breaking downgrades and was not applied.
