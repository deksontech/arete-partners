# Content Inventory

Source priority:

1. Supplied July 27, 2026 `.wpress` archive extracted to `site-export/july-2026`.
2. Previously extracted `site-export/full-site` and `analysis-pages` snapshots.
3. Separately supplied image assets in `Downloads`.

The live site returned access restrictions to the basic web fetcher. The `.wpress` extractor completed the meaningful extraction but ended with an `EISDIR` error after writing `database.sql`, uploads, plugins, themes, and related folders.

## Pages

| Page | Current URL | New route | Source |
| --- | --- | --- | --- |
| Home | `/` | `/` | `analysis-pages/12-home.html`, July database |
| About | `/about/` | `/about` | `analysis-pages/15-about.html`, July database |
| Services | `/services/` | `/services` | `analysis-pages/23-services.html`, July database |
| Growth & Transformation | `/growth-transformation/` | `/growth-transformation` | `analysis-pages/657-growth-transformation.html`, July database |
| Pharmaceutical Sector | `/pharmaceutical-sector/` | `/pharmaceutical-sector` | `analysis-pages/307-pharmaceutical-sector.html`, July database |
| Career | `/career/` | `/career` | `analysis-pages/19-career.html`, July database |
| Industries | inferred from navigation | `/industries` | `analysis-pages/10-header.html`, July database/navigation |
| Contact Us | `/contact-us/` | `/contact-us` | `analysis-pages/10-header.html`, July database/navigation |

## Navigation Labels

Home, About, Services, Industries, Career, Contact Us, Book Consultation, View Services.

Services menu: Services Portfolio, Strategy & Operations services by theme, All Services, Growth & Transformation, Operational Excellence, Process Advisory, Service Delivery, Corporate Function Transformation.

Industries menu: Pharmaceutical, Manufacturing, Healthcare, Insurance, Aerospace & Defence, Automotive, Global Capability Centers, Education.

## Forms and Functionality

No reliable standalone WordPress form markup was identified in the extracted page snapshots. Contact functionality is limited to preserved contact links until delivery credentials are provided.

Identified external/media functionality:

- YouTube iframe references in original HTML.
- Background MP4 in WordPress uploads.
- Internal anchor CTAs.
- Mail and phone links.

## Metadata

Page titles and descriptions are derived from visible page headings/subheadings where available. No separate WordPress SEO plugin metadata was safely extracted.

## Content Storage

Visible page content is stored separately from components in `src/content/site.ts`.

## Known Content Artifacts Preserved

The WordPress export includes visible placeholders and legacy remnants such as `[Your Firm Name]`, `YourBrand Consulting`, and mixed contact entries in header snapshots. The implemented pages preserve meaningful visible Arete content and document the remnants here for review.
