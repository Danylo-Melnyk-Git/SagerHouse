# HTML Partials

This folder contains extracted HTML sections loaded at runtime by `js/modules/partials.js`.

Current partials:

- `header.html`
- `footer.html`
- `availability.html`
- `prices.html`
- `faq.html`

Usage in `index.html`:

- Add a placeholder element with `data-partial`, for example:
  `<div data-partial="partials/header.html"></div>`

Notes:

- Partials are loaded via `fetch`, so run the site through a local server (not `file://`).
