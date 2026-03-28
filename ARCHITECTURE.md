# Sager House Architecture

## Purpose

Sager House is a static multilingual website for a holiday apartment in Murau, Austria.

## Technology Stack

- HTML5 (single-page marketing layout)
- CSS:
  - Tailwind CSS (compiled build)
  - Custom component styles (`css/styles.css`, `css/components/*.css`)
- JavaScript:
  - Vanilla ES Modules (no framework)
- External runtime dependencies (CDN):
  - Flatpickr (availability calendar)
  - Iconify (icons)
- Development dependency:
  - Playwright (`@playwright/test`) for mobile smoke tests
- Hosting model:
  - Static hosting (no backend in this repository)

## Build and Run

- Build CSS:
  - `npm run build:css`
- Run mobile smoke tests:
  - `npm run test:mobile`
- Local development server (required because of browser fetch behavior and module loading):
  - `python -m http.server 8000`
  - open `http://localhost:8000`

## High-Level Architecture

- `index.html` is the main document and UI layout.
- `js/modules/app.js` is the application bootstrap/entrypoint.
- Feature modules initialize independently:
  - i18n and theme
  - mobile menu
  - gallery interactions
  - calendar/form date sync
  - booking form submit
  - SEO metadata updates
- Styling is split between generated Tailwind output and custom CSS layers, including a dedicated mobile override layer.

## Project Tree

```text
SagerHouse/
  index.html
  ARCHITECTURE.md
  README.md
  QA_CHECKLIST.md
  .gitignore
  package.json
  package-lock.json
  playwright.config.js
  tailwind.config.js
  robots.txt
  sitemap.xml
  site.webmanifest
  favicon.ico
  CNAME
  css/
    tailwind.input.css
    tailwind.css
    styles.css
    components/
      calendar.css
      theme.css
      mobile.css
  js/
    modules/
      app.js
      bookingForm.js
      calendar.js
      gallery.js
      hero.js
      i18n.js
      mobileMenu.js
      seo.js
      translations.js
      README.md
  tests/
    mobile.spec.js
  images/
    *.avif (+ jpg/webp variants)
    favicon-48x48.png
    favicon-192x192.png
  partials/
    availability.html
    faq.html
    footer.html
    header.html
    prices.html
    README.md
```

## Frontend Module Responsibilities

- `js/modules/app.js`
  - App entrypoint, wires all module initializers.
- `js/modules/i18n.js`
  - Language detection and switching.
  - Theme detection/toggling and persistence in `localStorage`.
  - Re-renders translated nodes via `data-i18n` attributes.
- `js/modules/translations.js`
  - Translation dictionary for supported languages.
  - Language-specific overrides for selected keys.
- `js/modules/seo.js`
  - Applies localized title/meta tags.
  - Updates canonical/OG/Twitter tags.
  - Generates language-specific JSON-LD structured data.
- `js/modules/calendar.js`
  - Initializes Flatpickr calendar.
  - Syncs calendar date range with booking form inputs.
- `js/modules/bookingForm.js`
  - Handles booking form submit.
  - Sends form data to Telegram API.
- `js/modules/mobileMenu.js`
  - Mobile navigation open/close behavior.
- `js/modules/gallery.js`
  - Gallery item interaction hooks.
- `js/modules/hero.js`
  - Hero image presentation enhancement.

Note:

- `partials/` content is retained in the repository, but the current `index.html` renders sections directly (no active `data-partial` placeholders).

## UI/State Model

### Persistent client state

- `sagerhouse_language` in `localStorage`
- `sagerhouse_theme` in `localStorage`

### URL state

- `?lang=<code>` query parameter is synced with language selection.

### DOM translation mechanism

- Elements with `data-i18n` are updated at runtime from translation keys.

## SEO Architecture

- Static SEO fallback exists in `<head>` of `index.html`.
- Runtime SEO update layer adjusts metadata after language initialization.
- Structured data uses Schema.org (`LodgingBusiness`, `WebSite`, `FAQPage`).

## Styling Architecture

- Tailwind utility classes are used heavily in HTML markup.
- Tailwind preflight is disabled in `tailwind.config.js`.
- Custom rules in `css/styles.css` and component files provide:
  - dark theme overrides
  - calendar look-and-feel
  - mobile-specific spacing and typography tuning (`mobile.css`)
  - interaction and animation refinements

## Testing Architecture

- Automated mobile smoke checks are implemented with Playwright:
  - Config: `playwright.config.js`
  - Suite: `tests/mobile.spec.js`
- Current automated coverage focuses on:
  - mobile menu behavior
  - hero image ratio
  - calendar rendering and date sync
  - scroll/focus transition from calendar to booking form
  - mobile visibility rules (e.g. map hidden)
- Manual checklist remains in `QA_CHECKLIST.md`.

## Deployment and Operational Notes

- Static website; deployable to any static host.
- Keep these aligned when changing domain or locale strategy:
  - `CNAME`
  - canonical URL in SEO config
  - `sitemap.xml`
  - `robots.txt`

## Known Architecture Risks

- Telegram token/chat id are present in frontend code (`bookingForm.js`), meaning secrets are exposed client-side.
- There is no backend/API gateway in this repository for secure message relay.
- Limited automated tests; QA is documented as manual checklist.

## Recommended Next Architecture Improvements

1. Move booking submit to a small backend endpoint/serverless function and remove Telegram secrets from frontend.
2. Add CI pipeline for `npm run build:css` and `npm run test:mobile`.
3. Add HTML/link validation and Lighthouse budget checks.
4. Expand automated tests for i18n/theme and dark-mode visual regressions.
5. Decide whether `partials/` should stay as an archive/template source or be removed to reduce maintenance surface.
