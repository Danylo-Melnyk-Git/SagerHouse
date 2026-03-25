# Sager House

Static multilingual website for a holiday apartment in Murau, Austria.

## Features

- ES modules architecture (vanilla JavaScript).
- Runtime HTML partials loading via `data-partial`.
- Dark theme with persisted preference.
- Multilanguage UI with browser language detection.
- Availability calendar (Flatpickr) synced with booking form.
- Booking form submission via Telegram API.

## Structure

```text
SagerHouse/
  index.html
  CNAME
  robots.txt
  sitemap.xml
  css/
    styles.css
    components/
      calendar.css
      theme.css
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
      partials.js
      README.md
  partials/
    header.html
    footer.html
    availability.html
    prices.html
    faq.html
    README.md
  images/
  QA_CHECKLIST.md
```

## Local Development

Partials are loaded through `fetch`, so run a local HTTP server.

```bash
python -m http.server 8000
```

Then open: `http://localhost:8000`

## SEO

- Core SEO metadata is managed in the `<head>` of `index.html`.
- Structured data uses `LodgingBusiness` JSON-LD.
- `robots.txt` and `sitemap.xml` are included for indexing.

## Maintenance

- Translations: `js/modules/translations.js`
- UI sections: `partials/*.html`
- Theme styles: `css/components/theme.css`
- Calendar styles: `css/components/calendar.css`

Keep canonical URL, sitemap URL, and CNAME aligned with production domain.
