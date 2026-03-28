# HTML Partials

This folder contains extracted HTML section templates.

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
- In the current production page, sections are rendered directly in `index.html`.
- Keep this folder as reusable templates/archive unless you decide to re-enable runtime partial mounting.
