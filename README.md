# Sager House

Static multilingual website for a holiday apartment in Murau, Austria.

Detailed technical documentation: `ARCHITECTURE.md`.

## Features

- ES modules architecture (vanilla JavaScript).
- Dark theme with persisted preference.
- Multilanguage UI with browser language detection.
- Availability calendar (Flatpickr) synced with booking form.
- Booking form submission via Telegram API.
- Dedicated mobile optimization layer in `css/components/mobile.css`.
- Mobile smoke tests with Playwright (`npm run test:mobile`).

## Structure

```text
SagerHouse/
  index.html
  ARCHITECTURE.md
  .gitignore
  CNAME
  robots.txt
  sitemap.xml
  site.webmanifest
  playwright.config.js
  package.json
  package-lock.json
  css/
    styles.css
    components/
      calendar.css
      theme.css
      mobile.css
  js/
    modules/
      app.js
      i18n.js
      translations.js
      calendar.js
      bookingForm.js
      gallery.js
      hero.js
      mobileMenu.js
      seo.js
      README.md
  tests/
    mobile.spec.js
  partials/
    header.html
    footer.html
    availability.html
    prices.html
    faq.html
    README.md
  images/
    favicon-48x48.png
    favicon-192x192.png
  QA_CHECKLIST.md
```

## Local Development

Run a local HTTP server for ES modules and asset loading.

```bash
python -m http.server 8000
```

Then open: `http://localhost:8000`

## Scripts

```bash
npm run build:css
npm run test:mobile
```

## SEO

- Core SEO metadata is managed in the `<head>` of `index.html`.
- Structured data uses `LodgingBusiness` JSON-LD.
- `robots.txt` and `sitemap.xml` are included for indexing.

## Maintenance

- Translations: `js/modules/translations.js`
- UI sections: `partials/*.html`
- Theme styles: `css/components/theme.css`
- Calendar styles: `css/components/calendar.css`
- Mobile overrides: `css/components/mobile.css`
- Mobile tests: `tests/mobile.spec.js`

Keep canonical URL, sitemap URL, and CNAME aligned with production domain.
