# Sager House - Short QA Checklist

## Automated Mobile Smoke

- [ ] Run `npm run test:mobile` and ensure all tests pass.
- [ ] Confirm test run does not require code changes or retries.

## Dark Theme (Visual)

- [ ] Header and mobile menu text/icons are clearly visible in dark mode.
- [ ] Contrast is readable in all sections (hero, cards, prices, FAQ, contact, footer).
- [ ] Buttons and links have visible hover/focus states in dark mode.
- [ ] Form status messages (sending/success/error) are readable in dark mode.
- [ ] No theme "flash" on first load and page refresh.

## Mobile Layout (Top Priority)

- [ ] Header controls are aligned and equal-height on small screens.
- [ ] Mobile menu opens from the right smoothly and keeps consistent button sizing.
- [ ] Hero top area spacing (header -> hero title -> hero image) looks cohesive.
- [ ] Availability calendar fits mobile width without horizontal overflow.
- [ ] Calendar "Use dates" button remains readable and clickable on narrow devices.
- [ ] Booking form side paddings are comfortable on mobile.
- [ ] Why section mobile shell has rounded edges and no clipping artifacts.
- [ ] Location map is hidden on mobile as expected.

## Language QA

- [ ] Switch language in desktop selector and verify immediate text update.
- [ ] Switch language in mobile selector and verify immediate text update.
- [ ] Verify user language choice persists after refresh.
- [ ] Verify browser language auto-detection works for supported locales.
- [ ] Verify unsupported browser locale falls back to English.

## Translation Coverage

- [ ] Review all pages in `uk` and mark unnatural wording for override updates.
- [ ] Review all pages in `ru` and mark unnatural wording for override updates.
- [ ] Verify `sk`, `cs`, `hu` cover all visible keys without English fallback.
- [ ] Verify apartment title/size/sleeps labels are localized in every language.

## Quick Smoke

- [ ] Open desktop and mobile viewport, check layout integrity.
- [ ] Submit booking form: validation, sending, success and error texts are localized.
- [ ] In mobile menu, navigate to Availability and ensure menu closes.
- [ ] Select date range in calendar and verify check-in/check-out sync in booking form.
