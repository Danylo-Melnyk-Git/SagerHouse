# Sager House SEO + AI SEO Audit

Date: 2026-03-28

Scope: technical SEO, multilingual SEO, Core Web Vitals, structured data, and AI SEO readiness.

## Current Snapshot

- Overall status: strong technical SEO baseline with improved performance, but LCP is still above target.
- Lighthouse (current): Performance 86, SEO 100.
- SEO consistency checks: 13/13 passed.
- Mobile smoke tests (latest available run): 8/8 passed.

## KPI Scoreboard

Source reports:

- Baseline: lighthouse-report-final.json (2026-03-25)
- Current: lighthouse-report-current.json (2026-03-28)

| KPI | Baseline | Current | Delta |
| --- | ---: | ---: | ---: |
| Performance score | 73 | 86 | +13 |
| SEO score | 100 | 100 | 0 |
| LCP | 4383 ms | 3605 ms | -778 ms |
| CLS | 0.112 | 0.069 | -0.043 |
| TBT | 122 ms | 17 ms | -105 ms |

Notes:

- Current Lighthouse report contains performance + SEO categories only.
- CLS target (< 0.1) is met.
- LCP target (<= 2.5 s) is not met yet.

## SEO Status (Now)

Completed:

- Static language pages implemented: /de/, /uk/, /ru/, /sk/, /cs/, /hu/.
- Hreflang cluster aligned to static language URLs.
- Duplicate ?lang= URLs removed from sitemap.
- meta keywords removed.
- llms.txt added.
- facts.html added.
- Checkout fact aligned to 10:00 across schema/FAQ/legal sources.

Validated by checks:

- index-doctype
- meta-keywords
- sitemap-language-urls
- checkout-consistency-translations
- checkout-consistency-seo-schema
- llms-file
- facts-page
- 6 hreflang URL presence checks

Result:

- 13/13 passed.

## AI SEO Status (Now)

Implemented AI-oriented assets:

- llms.txt is available.
- facts.html is available as concise fact surface.
- Robots and sitemap include discovery paths for AI crawlers.
- Fact consistency guardrail script is active in repository (scripts/seo-consistency-check.js).

AI SEO readiness level:

- high-medium.

Why not fully high yet:

- LCP is still slower than target, which can reduce render/crawl efficiency.
- Business entity consistency still needs review (Austria address vs +380 phone pattern).

## Open Risks

- LCP remains above target.
- Current LCP: 3605 ms.
- Target LCP: <= 2500 ms.
- Business trust consistency requires final policy decision.
- Keep and document the cross-country contact model, or align contact signals.

## Next Actions

- Performance pass focused on LCP.
- Tighten above-the-fold critical path.
- Reduce hero payload and render delay.
- Verify preload and cache strategy.
- Entity consistency decision and final policy lock.
- Mirror same contact values across schema, imprint, and legal pages.
- Run Lighthouse and consistency checks on each release candidate.
- Block release on KPI regressions.
