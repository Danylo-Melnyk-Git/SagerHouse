# JS Modules

- `app.js`: bootstrap and app initialization.
- `seo.js`: runtime SEO metadata/canonical updates per language.
- `translations.js`: translation dictionary and overrides.
- `i18n.js`: language/theme state and translation rendering.
- `mobileMenu.js`: mobile navigation interactions.
- `gallery.js`: gallery click interactions.
- `calendar.js`: availability calendar and date sync with form fields.
- `hero.js`: hero image enhancement.
- `bookingForm.js`: Telegram booking form submission.

`index.html` loads `js/modules/app.js` as an ES module entrypoint.

Notes:

- Calendar module includes retry-safe Flatpickr initialization for CDN race conditions.
- Mobile behavior is primarily styled by `css/components/mobile.css` and validated by `tests/mobile.spec.js`.
- `partials.js` may exist historically, but the current page is rendered directly from `index.html`.
