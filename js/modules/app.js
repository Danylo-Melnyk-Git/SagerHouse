/**
 * Application bootstrap (ES modules).
 */
import { initI18n, initThemeToggle, switchLanguage, getLanguage, t } from './i18n.js';
import { initMobileMenu } from './mobileMenu.js';
import { initGallery } from './gallery.js';
import { setupBookingCalendar } from './calendar.js';
import { enhanceHeroImage } from './hero.js';
import { initBookingForm } from './bookingForm.js';
import { loadPartials } from './partials.js';

async function initializeApp() {
    await loadPartials();
    initThemeToggle();
    initI18n();
    initMobileMenu();
    initGallery();
    setupBookingCalendar();
    enhanceHeroImage();
    initBookingForm();

    console.log('Sager House app initialized (modules)');
    console.log('Current language:', getLanguage());
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeApp();
    });
} else {
    initializeApp();
}

window.SagerHouse = {
    switchLanguage,
    getLanguage,
    t,
    initializeApp
};

export { initializeApp };
