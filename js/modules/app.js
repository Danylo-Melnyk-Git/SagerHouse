/**
 * Application bootstrap (ES modules).
 */
import { initI18n, initThemeToggle, switchLanguage, getLanguage, t } from './i18n.js';
import { initMobileMenu } from './mobileMenu.js';

function scheduleDeferredInitialization(task) {
    if (typeof window !== 'undefined' && typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(task, { timeout: 1500 });
        return;
    }

    window.setTimeout(task, 250);
}

async function initializeDeferredFeatures() {
    const [galleryModule, calendarModule, heroModule, bookingFormModule] = await Promise.all([
        import('./gallery.js'),
        import('./calendar.js'),
        import('./hero.js'),
        import('./bookingForm.js')
    ]);

    galleryModule.initGallery();
    calendarModule.setupBookingCalendar();
    heroModule.enhanceHeroImage();
    bookingFormModule.initBookingForm();
}

async function initializeApp() {
    initThemeToggle();
    initI18n();
    initMobileMenu();

    scheduleDeferredInitialization(() => {
        initializeDeferredFeatures().catch((error) => {
            console.error('Deferred module initialization failed', error);
        });
    });

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
