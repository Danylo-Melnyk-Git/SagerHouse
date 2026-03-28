# SEO + AI SEO Follow-up Checklist

Date: 2026-03-28

## What To Improve Next

- Reduce LCP from 3.6s to <= 2.5s on mobile.
- Keep CLS below 0.1 after any hero/layout changes.
- Keep contact entity signals identical across all trust surfaces.
- Keep multilingual static pages synchronized with core facts.

## What To Verify Before Release

- Lighthouse current report is generated and attached.
- Performance score >= 85.
- SEO score = 100.
- LCP <= 2500 ms.
- CLS < 0.1.
- TBT remains low and stable.

## Entity Trust Checks

- Same address in:
  - index structured data
  - js/modules/seo.js structured data builder
  - facts.html
  - imprint.html
  - llms.txt
- Same booking phone value in all surfaces: +380 50 652 62 08.
- Same booking phone policy wording in canonical trust docs:
  - facts.html uses "Booking phone (WhatsApp)"
  - imprint.html uses "Booking phone (WhatsApp)"
  - llms.txt uses "Booking phone (WhatsApp)"
- Same email value in all surfaces (booking inbox email).

## Multilingual Checks

- /de/, /uk/, /ru/, /sk/, /cs/, /hu/ return valid HTML and self-canonical.
- Hreflang cluster contains all language URLs and x-default.
- No ?lang= URLs in sitemap.xml.
- Key facts (check-in/out, address, contact) match across language pages and facts surface.

## Automation Checks

- Run: node scripts/seo-consistency-check.js
- Ensure check result is pass with no failures.
- Re-run Lighthouse after any above-the-fold change.

## Optional Hardening

- Add CI gate for SEO consistency script.
- Add CI budget gate for LCP/CLS.
- Add a changelog line when contact facts are modified.
