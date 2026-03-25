/**
 * i18n and theme state management.
 */
import { translations } from './translations.js';
import { applySeo, getLanguageFromUrl, syncUrlLanguageParam } from './seo.js';

const LANGUAGE_STORAGE_KEY = 'sagerhouse_language';
const THEME_STORAGE_KEY = 'sagerhouse_theme';
const SUPPORTED_LANGUAGE_ALIASES = {
    en: 'en',
    de: 'de',
    uk: 'uk',
    ua: 'uk',
    ru: 'ru',
    sk: 'sk',
    cs: 'cs',
    cz: 'cs',
    hu: 'hu'
};

function detectPreferredLanguage() {
    const urlLanguage = getLanguageFromUrl();
    if (urlLanguage && translations[urlLanguage]) {
        return urlLanguage;
    }

    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage && translations[savedLanguage]) {
        return savedLanguage;
    }

    const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length
        ? navigator.languages
        : [navigator.language || 'en'];

    for (const locale of browserLanguages) {
        if (!locale) continue;

        const normalizedLocale = locale.toLowerCase();
        const baseLocale = normalizedLocale.split('-')[0];
        const detectedLanguage = SUPPORTED_LANGUAGE_ALIASES[normalizedLocale] || SUPPORTED_LANGUAGE_ALIASES[baseLocale];

        if (detectedLanguage && translations[detectedLanguage]) {
            return detectedLanguage;
        }
    }

    return 'en';
}

function detectPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

let currentLanguage = detectPreferredLanguage();
let currentTheme = detectPreferredTheme();

function updatePageTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[currentLanguage][key] || translations.en[key] || key;

        if (!translations[currentLanguage][key] && !translations.en[key]) {
            console.warn('[i18n] missing translation key', key, 'for language', currentLanguage);
        }

        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            if (el.hasAttribute('placeholder')) {
                el.placeholder = translation;
            } else {
                el.value = translation;
            }
        } else if (el.tagName === 'LABEL') {
            el.textContent = translation;
        } else {
            el.innerHTML = translation;
        }
    });
}

function updateLanguageButtons() {
    const allLangButtons = document.querySelectorAll('[data-lang-switch]');
    allLangButtons.forEach(btn => {
        const lang = btn.getAttribute('data-lang-switch');
        btn.classList.toggle('active', lang === currentLanguage);
    });

    const allLangSelects = document.querySelectorAll('[data-lang-select]');
    allLangSelects.forEach(select => {
        select.value = currentLanguage;
    });
}

function updateThemeButtons() {
    const iconName = currentTheme === 'dark' ? 'solar:sun-linear' : 'solar:moon-linear';
    const labelKey = currentTheme === 'dark' ? 'theme.toggle-light' : 'theme.toggle-dark';
    const label = t(labelKey);

    document.querySelectorAll('[data-theme-icon]').forEach(icon => {
        icon.setAttribute('icon', iconName);
    });

    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
        button.setAttribute('aria-label', label);
        button.setAttribute('title', label);
    });
}

function setupLanguageSwitchers() {
    const langButtons = document.querySelectorAll('[data-lang-switch]');
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang-switch');
            switchLanguage(lang);
        });
    });

    const langSelects = document.querySelectorAll('[data-lang-select]');
    langSelects.forEach(select => {
        select.value = currentLanguage;
        select.addEventListener('change', () => {
            switchLanguage(select.value);
        });
    });
}

function switchLanguage(lang) {
    if (!translations[lang]) return;

    currentLanguage = lang;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);

    document.documentElement.lang = lang;
    syncUrlLanguageParam(lang);
    updatePageTranslations();
    updateLanguageButtons();
    updateThemeButtons();
    applySeo(lang);
}

function applyTheme(theme, shouldPersist = true) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';

    document.documentElement.classList.toggle('dark-theme', currentTheme === 'dark');
    document.documentElement.style.colorScheme = currentTheme;

    if (shouldPersist) {
        localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
    }

    updateThemeButtons();
}

function toggleTheme() {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

function initThemeToggle() {
    applyTheme(currentTheme, false);

    const themeButtons = document.querySelectorAll('[data-theme-toggle]');
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            toggleTheme();
        });
    });
}

function initI18n() {
    if (translations[currentLanguage]) {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
    } else {
        currentLanguage = 'en';
    }

    document.documentElement.lang = currentLanguage;
    syncUrlLanguageParam(currentLanguage);
    updateLanguageButtons();
    updatePageTranslations();
    applySeo(currentLanguage);
    setupLanguageSwitchers();
}

function getLanguage() {
    return currentLanguage;
}

function t(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
}

export {
    initI18n,
    initThemeToggle,
    switchLanguage,
    getLanguage,
    t,
    applyTheme,
    toggleTheme
};
