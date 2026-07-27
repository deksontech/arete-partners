# Known Limitations

- The `.wpress` extractor ended with an `EISDIR` error after extracting the useful folders and database.
- The basic web fetcher was blocked by the live site, so visual fidelity has been based on extracted WordPress snapshots and assets rather than a fresh live screenshot set.
- Current contact form plugin behavior could not be reliably identified. The new site preserves contact links and documents future environment variables for a native integration.
- Some original content contains placeholders such as `[Your Firm Name]`; these are retained where they appeared in extracted content.
- `npm audit` reports high-severity transitive advisories in the current framework/tooling dependency tree. Forced fixes propose breaking changes and were not applied.
- Full responsive visual QA at every requested viewport was not completed with browser screenshots in this pass.

## Integrations Requiring Credentials

- Contact/enquiry delivery provider.
- Spam protection provider if a live form is enabled.

Suggested environment variables are in `.env.example`.
