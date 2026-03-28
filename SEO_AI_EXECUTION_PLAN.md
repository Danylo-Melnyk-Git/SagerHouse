# SEO + AI SEO Execution Plan

Date: 2026-03-28

Project: Sager House

## Progress Summary

- Sprint 1 (facts + technical cleanup): completed.
- Sprint 2 (multilingual indexing hardening): completed.
- Sprint 3 (performance + trust hardening): in progress.

## What Is Done

Fact and metadata consistency:

- Check-out normalized to 10:00 across translations, schema, and terms.
- HTML5 doctype present in index page.
- Legacy meta keywords removed.

AI SEO discovery surface:

- llms.txt added.
- facts.html added.
- Crawl discovery paths updated (sitemap/robots references).

Multilingual indexability:

- Static language pages added: /de/, /uk/, /ru/, /sk/, /cs/, /hu/.
- Sitemap switched to static language URLs only.
- Homepage hreflang aligned to static language strategy.

Validation and regression safety:

- SEO consistency script added: scripts/seo-consistency-check.js.
- Current consistency status: 13/13 checks passed.
- Mobile smoke tests status (latest run): 8/8 passed.

## Current KPI Status

- Lighthouse current: Performance 86, SEO 100.
- LCP: 3605 ms (target <= 2500 ms, not met).
- CLS: 0.069 (target < 0.1, met).
- TBT: 17 ms.

Delta vs baseline (lighthouse-report-final.json):

- Performance: +13
- LCP: -778 ms
- CLS: -0.043
- TBT: -105 ms

## Remaining Work (Sprint 3)

LCP reduction to target:

- reduce above-the-fold render cost
- tighten image delivery strategy for hero region
- reduce non-critical main-thread work during initial render

Entity trust finalization:

- align and document business contact model consistently across:
  - js/modules/seo.js
  - imprint.html
  - terms.html
  - facts.html

Release governance:

- run Lighthouse + consistency script before release
- fail release if:
  - LCP regresses
  - CLS regresses above threshold
  - consistency checks fail

## Acceptance Gate

A release candidate is accepted when all are true:

- Performance >= 85
- SEO = 100
- LCP <= 2500 ms
- CLS < 0.1
- SEO consistency check = 13/13 pass
- no contradictory fact fields across schema/FAQ/legal/facts surfaces
