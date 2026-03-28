const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

function read(filePath) {
    return fs.readFileSync(path.join(ROOT, filePath), 'utf8');
}

function exists(filePath) {
    return fs.existsSync(path.join(ROOT, filePath));
}

function check(name, condition, failureMessage, failures) {
    if (!condition) {
        failures.push(`${name}: ${failureMessage}`);
    }
}

function run() {
    const failures = [];

    const indexHtml = read('index.html');
    const sitemap = read('sitemap.xml');
    const translations = read('js/modules/translations.js');
    const seoModule = read('js/modules/seo.js');
    const factsPage = read('facts.html');
    const imprintPage = read('imprint.html');
    const llms = read('llms.txt');

    check(
        'index-doctype',
        indexHtml.includes('<!DOCTYPE html>'),
        'Missing HTML5 doctype in index.html',
        failures
    );

    check(
        'meta-keywords',
        !indexHtml.includes('name="keywords"'),
        'Legacy meta keywords found in index.html',
        failures
    );

    check(
        'sitemap-language-urls',
        !sitemap.includes('?lang='),
        'Found query language URLs in sitemap.xml; expected static /de/, /uk/, etc.',
        failures
    );

    check(
        'checkout-consistency-translations',
        !translations.includes('check-out is until 12:00') && !translations.includes('12:00 Uhr erwartet') && !translations.includes('до 12:00') && !translations.includes('12:00 óráig'),
        'Found old 12:00 check-out values in translations',
        failures
    );

    check(
        'checkout-consistency-seo-schema',
        seoModule.includes("checkoutTime: '10:00'"),
        'Structured data checkoutTime is not 10:00',
        failures
    );

    check(
        'llms-file',
        exists('llms.txt'),
        'llms.txt not found',
        failures
    );

    check(
        'facts-page',
        exists('facts.html'),
        'facts.html not found',
        failures
    );

    check(
        'contact-phone-seo-module',
        seoModule.includes("CONTACT_PHONE = '+380 50 652 62 08'") || seoModule.includes("telephone: '+380 50 652 62 08'"),
        'SEO module does not include expected booking phone',
        failures
    );

    check(
        'contact-phone-facts',
        factsPage.includes('+380 50 652 62 08'),
        'facts.html does not include expected booking phone',
        failures
    );

    check(
        'contact-phone-imprint',
        imprintPage.includes('+380 50 652 62 08'),
        'imprint.html does not include expected booking phone',
        failures
    );

    check(
        'contact-phone-llms',
        llms.includes('+380 50 652 62 08'),
        'llms.txt does not include expected booking phone',
        failures
    );

    check(
        'contact-whatsapp-policy',
        factsPage.includes('Booking phone (WhatsApp)') && imprintPage.includes('Booking phone (WhatsApp)') && llms.includes('Booking phone (WhatsApp)'),
        'Booking phone policy wording is not synchronized across facts/imprint/llms',
        failures
    );

    const requiredHreflangs = [
        'https://sagerhouse.com/de/',
        'https://sagerhouse.com/uk/',
        'https://sagerhouse.com/ru/',
        'https://sagerhouse.com/sk/',
        'https://sagerhouse.com/cs/',
        'https://sagerhouse.com/hu/'
    ];

    for (const url of requiredHreflangs) {
        check(
            `hreflang-${url}`,
            indexHtml.includes(url),
            `Missing hreflang URL in index.html: ${url}`,
            failures
        );
    }

    if (failures.length) {
        console.error('SEO consistency check failed:');
        for (const failure of failures) {
            console.error(`- ${failure}`);
        }
        process.exit(1);
    }

    console.log('SEO consistency check passed.');
}

run();
