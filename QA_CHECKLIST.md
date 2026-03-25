# Sager House - Short QA Checklist

## Dark Theme (Visual)

- [ ] Header and mobile menu text/icons are clearly visible in dark mode.
- [ ] Contrast is readable in all sections (hero, cards, prices, FAQ, contact, footer).
- [ ] Buttons and links have visible hover/focus states in dark mode.
- [ ] Form status messages (sending/success/error) are readable in dark mode.
- [ ] No theme "flash" on first load and page refresh.

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
