/**
 * I18N (Internationalization) USAGE GUIDE
 * 
 * This guide shows how the bilingual system works
 * and how to extend it with more languages
 */

// ========================================
// CURRENT SETUP
// ========================================
// Language files: Located in js/app.js
// Supported: English (en) and Deutsch (de)
// Storage: Browser localStorage

// Language Switcher: Header buttons (EN / DE)
// Default Language: English
// Fallback: English (if key not found in selected language)

// ========================================
// DATA ATTRIBUTES IN HTML
// ========================================
// Every translatable element has a data-i18n attribute:
//
// <h1 data-i18n="hero.title">...</h1>
// <p data-i18n="about.para1">...</p>
// <button data-i18n="header.book-now">...</button>
//
// The value is a dot-separated KEY that maps to translations object

// ========================================
// HOW IT WORKS (Behind the Scenes)
// ========================================
// 1. User clicks EN or DE button
// 2. JS calls switchLanguage('en') or switchLanguage('de')
// 3. Current language stored in localStorage
// 4. updatePageTranslations() runs
// 5. Every [data-i18n] element updated with new text
// 6. No page reload needed!

// ========================================
// TRANSLATION OBJECT STRUCTURE
// ========================================
// const translations = {
//     en: {
//         'header.apartments': 'Apartments',
//         'header.prices': 'Prices',
//         'hero.title': 'Sager House – Boutique Apartments in Murau, Austria',
//         'about.para1': 'Welcome to Sager House...',
//         ...
//     },
//     de: {
//         'header.apartments': 'Apartments',
//         'header.prices': 'Preise',
//         'hero.title': 'Sager House – Exklusive Apartments in Murau, Österreich',
//         'about.para1': 'Willkommen im Sager House...',
//         ...
//     }
// }

// ========================================
// ADDING A NEW LANGUAGE (e.g., French)
// ========================================
// Step 1: Edit js/app.js
// Add new language object:

/*
const translations = {
    en: { ... },
    de: { ... },
    fr: {
        'header.apartments': 'Appartements',
        'header.prices': 'Prix',
        'header.availability': 'Disponibilité',
        'header.gallery': 'Galerie',
        'header.location': 'Localisation',
        'header.faq': 'FAQ',
        'header.contact': 'Contact',
        'header.book-now': 'Réserver maintenant',
        
        'hero.title': 'Maison Sager – Appartements Boutique à Murau, Autriche',
        'hero.description': 'Appartements confortables au cœur des Alpes autrichiennes...',
        // ... add ALL keys from 'en' object
    }
};
*/

// Step 2: Add button in index.html header (line ~40)
/*
<div class="lang-btn" data-lang-switch="fr">FR</div>
*/

// Step 3: Style the button with CSS (it has .lang-btn class)
// The app automatically handles active/inactive states

// Step 4: Test!
// Click FR button and all text should change to French

// ========================================
// LANGUAGE KEY NAMING CONVENTION
// ========================================
// Use dot notation: section.key
//
// Examples:
// - header.* = Navigation menu items
// - hero.* = Hero section text
// - about.* = About section text
// - apartments.* = Apartments section
// - prices.* = Pricing section
// - gallery.* = Gallery section
// - contact.* = Contact form labels
// - footer.* = Footer text
//
// This keeps translations organized and findable

// ========================================
// COMMON ISSUES
// ========================================

// Issue: Language doesn't change
// Solution: Check that data-i18n attribute matches a key in translations object
// Example error: [data-i18n="heroe.title"] should be [data-i18n="hero.title"]

// Issue: Some text doesn't translate
// Solution: Only elements with data-i18n attribute are translated
// Add missing data-i18n attributes to any translatable text

// Issue: Wrong language shows on page load
// Solution: Clear localStorage and browser cache
// localStorage.removeItem('sagerhouse_language');
// Then reload page

// ========================================
// SPECIAL CASES
// ========================================

// INPUT PLACEHOLDERS
// <input placeholder="Jane" data-i18n="contact.placeholder-name">
// The app checks for placeholder attribute and updates it

// FORM LABELS
// <label data-i18n="contact.email">Email</label>
// Labels are updated automatically

// BUTTON TEXT
// <button data-i18n="hero.check-availability">Check Availability</button>
// Button text updates automatically

// LINK TEXT
// <a href="#" data-i18n="header.apartments">Apartments</a>
// Link text updates automatically

// ========================================
// API REFERENCE - JavaScript Functions
// ========================================

// Get current language:
window.SagerHouse.getLanguage()
// Returns: 'en' or 'de'

// Switch language:
window.SagerHouse.switchLanguage('de')
// Switches to German, updates all text, saves preference

// Get translation for a key:
window.SagerHouse.t('hero.title')
// Returns: translated string for current language

// Initialize system (called automatically):
window.SagerHouse.initializeApp()

// ========================================
// USAGE IN CONSOLE
// ========================================
// Try these commands in browser console (F12):

// Check current language:
console.log(window.SagerHouse.getLanguage());

// Switch to German:
window.SagerHouse.switchLanguage('de');

// Get a specific translation:
console.log(window.SagerHouse.t('header.book-now'));

// ========================================
// ADVANCED: PROGRAMMATIC TEXT UPDATES
// ========================================
// If you generate HTML dynamically, you can still translate it:

/*
function createCard(titleKey) {
    const title = window.SagerHouse.t(titleKey);
    const html = `<h3>${title}</h3>`;
    return html;
}

// Usage:
createCard('hero.title')  // Gets translation for current language
*/

// ========================================
// PERFORMANCE NOTES
// ========================================
// ✅ Translation lookup is O(1) - constant time
// ✅ DOM updates are batched - efficient
// ✅ No external translation APIs - works offline
// ✅ Language preference saved to localStorage - persists across sessions
// ✅ Falls back to English if key not found in selected language

// ========================================
// DEPLOYMENT CHECKLIST
// ========================================
// ☑ All visible text has data-i18n attribute
// ☑ All keys in HTML match keys in translations object
// ☑ German translations are complete (not just copied from English)
// ☑ Language switcher buttons visible in header
// ☑ localStorage working (test in DevTools)
// ☑ Language preference persists on page reload
// ☑ All languages tested in different browsers
// ☑ Mobile layout tested with language switcher

// ========================================
// FUTURE ENHANCEMENTS
// ========================================
// - Add more languages (Spanish, Italian, etc.)
// - Use external translation API (Google Translate)
// - Add language detection by geo-IP
// - Implement keyboard shortcuts (e.g., Alt+E for English)
// - Add RTL language support (Arabic, Hebrew)
// - Speed up with JSON loader
// - Add translation management interface

// ========================================
// FILE LOCATIONS
// ========================================
// Main code: /js/app.js (initI18n, switchLanguage, updatePageTranslations)
// HTML: /index.html (data-i18n and data-lang-switch attributes)
// Styles: /css/styles.css (.lang-btn styling)
// This file: /I18N_GUIDE.md (documentation)
