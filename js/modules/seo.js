import { translations } from './translations.js';

const BASE_URL = 'https://sagerhouse.com/';
const DEFAULT_LANGUAGE = 'en';
const OG_IMAGE_URL = `${BASE_URL}images/og-share.jpg`;
const LANGUAGE_URLS = {
    en: BASE_URL,
    de: `${BASE_URL}?lang=de`,
    uk: `${BASE_URL}?lang=uk`,
    ru: `${BASE_URL}?lang=ru`,
    sk: `${BASE_URL}?lang=sk`,
    cs: `${BASE_URL}?lang=cs`,
    hu: `${BASE_URL}?lang=hu`
};

const OG_LOCALES = {
    en: 'en_US',
    de: 'de_AT',
    uk: 'uk_UA',
    ru: 'ru_RU',
    sk: 'sk_SK',
    cs: 'cs_CZ',
    hu: 'hu_HU'
};

const LANGUAGE_NAMES = {
    en: 'English',
    de: 'Deutsch',
    uk: 'Ukrainian',
    ru: 'Russian',
    sk: 'Slovak',
    cs: 'Czech',
    hu: 'Hungarian'
};

const SEO_CONFIG = {
    en: {
        title: 'Sager House Murau | Holiday Apartment in Austria | Sager Haus',
        description: 'Book Sager House in Murau, Austria. Holiday apartment in Styria with mountain views, ski access, hiking, free parking, and modern comfort.',
        keywords: 'Sager House, Sager Haus, SAGER-HAUS, Murau apartment, holiday apartment Murau, Austria apartment, Styria accommodation, ski apartment Murau, hiking holiday Austria',
        imageAlt: 'Sager House holiday apartment in Murau, Austria'
    },
    de: {
        title: 'Sager House Murau | Ferienwohnung in Oesterreich | Sager Haus',
        description: 'Buchen Sie Sager House in Murau, Oesterreich. Ferienwohnung in der Steiermark mit Bergblick, Skinaehe, Wanderurlaub, Parkplatz und modernem Komfort.',
        keywords: 'Sager House, Sager Haus, SAGER-HAUS, Ferienwohnung Murau, Apartment Murau, Unterkunft Steiermark, Skiurlaub Murau, Wanderurlaub Oesterreich, Urlaub Murau',
        imageAlt: 'Sager House Ferienwohnung in Murau, Oesterreich'
    },
    uk: {
        title: 'Sager House Murau | Апартаменти в Австрії | Sager Haus',
        description: 'Sager House у Мурау, Австрія: апартаменти для відпочинку з видом на гори, лижами, хайкінгом, паркуванням і сучасним комфортом у Штирії.',
        keywords: 'Sager House, Sager Haus, SAGER-HAUS, апартаменти Мурау, відпочинок Мурау, Австрія апартаменти, житло Штирія, лижі Мурау, Murau apartment',
        imageAlt: 'Апартаменти Sager House у Мурау, Австрія'
    },
    ru: {
        title: 'Sager House Murau | Апартаменты в Австрии | Sager Haus',
        description: 'Sager House в Мурау, Австрия: апартаменты для отдыха с видом на горы, лыжами, хайкингом, парковкой и современным комфортом в Штирии.',
        keywords: 'Sager House, Sager Haus, SAGER-HAUS, апартаменты Мурау, отдых Мурау, Австрия апартаменты, жилье Штирия, лыжи Мурау, Murau apartment',
        imageAlt: 'Апартаменты Sager House в Мурау, Австрия'
    },
    sk: {
        title: 'Sager House Murau | Apartman v Rakusku | Sager Haus',
        description: 'Rezervujte si Sager House v Murau. Apartman v Styrsku s vyhladom na hory, lyzovanim, turistikou, parkovanim a modernym komfortom.',
        keywords: 'Sager House, Sager Haus, SAGER-HAUS, apartman Murau, ubytovanie Murau, Rakusko apartman, Styrsko ubytovanie, lyzovanie Murau, dovolenka Murau',
        imageAlt: 'Apartman Sager House v Murau, Rakusko'
    },
    cs: {
        title: 'Sager House Murau | Apartman v Rakousku | Sager Haus',
        description: 'Rezervujte si Sager House v Murau. Apartman ve Styrsku s vyhledem na hory, lyzovanim, turistikou, parkovanim a modernim komfortem.',
        keywords: 'Sager House, Sager Haus, SAGER-HAUS, apartman Murau, ubytovani Murau, Rakousko apartman, Styrsko ubytovani, lyzovani Murau, dovolena Murau',
        imageAlt: 'Apartman Sager House v Murau, Rakousko'
    },
    hu: {
        title: 'Sager House Murau | Apartman Ausztriaban | Sager Haus',
        description: 'Foglalja le a Sager House szallast Murauban. Apartman Stajerorszagban hegyi kilatassal, sielessel, turazassal, parkolassal es modern kényelemmel.',
        keywords: 'Sager House, Sager Haus, SAGER-HAUS, murau apartman, murau szallas, ausztriai apartman, stajerorszag szallas, sieles murau, pihenes murau',
        imageAlt: 'Sager House apartman Murau, Ausztria'
    }
};

function normalizeLanguage(lang) {
    if (!lang) {
        return DEFAULT_LANGUAGE;
    }

    const normalized = lang.toLowerCase();
    if (normalized === 'ua') {
        return 'uk';
    }
    if (normalized === 'cz') {
        return 'cs';
    }

    return Object.prototype.hasOwnProperty.call(LANGUAGE_URLS, normalized)
        ? normalized
        : DEFAULT_LANGUAGE;
}

function buildLanguageUrl(lang) {
    return LANGUAGE_URLS[normalizeLanguage(lang)] || LANGUAGE_URLS[DEFAULT_LANGUAGE];
}

function getLanguageFromUrl() {
    if (typeof window === 'undefined') {
        return null;
    }

    const url = new URL(window.location.href);
    const param = url.searchParams.get('lang');
    if (!param) {
        return null;
    }

    return normalizeLanguage(param);
}

function syncUrlLanguageParam(lang) {
    if (typeof window === 'undefined') {
        return;
    }

    const nextLanguage = normalizeLanguage(lang);
    const url = new URL(window.location.href);

    if (nextLanguage === DEFAULT_LANGUAGE) {
        url.searchParams.delete('lang');
    } else {
        url.searchParams.set('lang', nextLanguage);
    }

    const nextUrl = `${url.pathname}${url.search}${url.hash}`;
    window.history.replaceState({}, '', nextUrl);
}

function getFaqEntries(lang) {
    const activeLanguage = normalizeLanguage(lang);
    const activeTranslations = translations[activeLanguage] || translations[DEFAULT_LANGUAGE];
    const fallbackTranslations = translations[DEFAULT_LANGUAGE];
    const entries = [];

    for (let index = 1; index <= 10; index += 1) {
        const questionKey = `faq.q${index}`;
        const answerKey = `faq.a${index}`;
        const question = activeTranslations[questionKey] || fallbackTranslations[questionKey];
        const answer = activeTranslations[answerKey] || fallbackTranslations[answerKey];

        if (!question || !answer) {
            continue;
        }

        entries.push({
            '@type': 'Question',
            name: question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: answer
            }
        });
    }

    return entries;
}

function buildStructuredData(lang) {
    const activeLanguage = normalizeLanguage(lang);
    const seo = SEO_CONFIG[activeLanguage] || SEO_CONFIG[DEFAULT_LANGUAGE];
    const activeTranslations = translations[activeLanguage] || translations[DEFAULT_LANGUAGE];
    const pageUrl = buildLanguageUrl(activeLanguage);

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': ['LodgingBusiness', 'ApartmentComplex'],
                '@id': `${pageUrl}#lodging`,
                name: 'Sager House',
                alternateName: ['Sager Haus', 'SAGER-HAUS'],
                url: pageUrl,
                description: seo.description,
                image: [
                    'https://sagerhouse.com/images/798174616.avif',
                    'https://sagerhouse.com/images/798174623.avif',
                    'https://sagerhouse.com/images/mauntin.avif'
                ],
                telephone: '+380 50 652 62 08',
                email: 'sager.apart.house@gmail.com',
                priceRange: '€€',
                inLanguage: activeLanguage,
                keywords: seo.keywords,
                checkinTime: '15:00',
                checkoutTime: '10:00',
                availableLanguage: Object.values(LANGUAGE_NAMES),
                areaServed: ['AT', 'DE', 'SK', 'CZ', 'HU', 'UA', 'EU'],
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Sankt-Leonhard-Platz 2/1',
                    addressLocality: 'Murau',
                    addressRegion: 'Styria',
                    postalCode: '8850',
                    addressCountry: 'AT'
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 47.1101,
                    longitude: 14.1706
                },
                hasMap: 'https://www.google.com/maps/place/Sankt-Leonhard-Platz+2%2F1,+8850+Murau,+Austria',
                amenityFeature: [
                    {
                        '@type': 'LocationFeatureSpecification',
                        name: activeTranslations['hero.wifi'] || translations.en['hero.wifi'],
                        value: true
                    },
                    {
                        '@type': 'LocationFeatureSpecification',
                        name: activeTranslations['hero.parking'] || translations.en['hero.parking'],
                        value: true
                    },
                    {
                        '@type': 'LocationFeatureSpecification',
                        name: activeTranslations['feature.heating'] || translations.en['feature.heating'],
                        value: true
                    },
                    {
                        '@type': 'LocationFeatureSpecification',
                        name: activeTranslations['feature.kitchen'] || translations.en['feature.kitchen'],
                        value: true
                    },
                    {
                        '@type': 'LocationFeatureSpecification',
                        name: activeTranslations['feature.dishwasher'] || translations.en['feature.dishwasher'],
                        value: true
                    },
                    {
                        '@type': 'LocationFeatureSpecification',
                        name: activeTranslations['feature.coffee-machine'] || translations.en['feature.coffee-machine'],
                        value: true
                    },
                    {
                        '@type': 'LocationFeatureSpecification',
                        name: activeTranslations['feature.separate-entrance'] || translations.en['feature.separate-entrance'],
                        value: true
                    },
                    {
                        '@type': 'LocationFeatureSpecification',
                        name: activeTranslations['feature.massage-chair'] || translations.en['feature.massage-chair'],
                        value: true
                    }
                ]
            },
            {
                '@type': 'WebSite',
                '@id': `${pageUrl}#website`,
                url: pageUrl,
                name: 'Sager House',
                alternateName: ['Sager Haus', 'SAGER-HAUS'],
                inLanguage: activeLanguage,
                description: seo.description
            },
            {
                '@type': 'FAQPage',
                '@id': `${pageUrl}#faq`,
                url: `${pageUrl}#faq`,
                inLanguage: activeLanguage,
                mainEntity: getFaqEntries(activeLanguage)
            }
        ]
    };
}

function setMetaContent(selector, value) {
    const element = document.querySelector(selector);
    if (element && value) {
        element.setAttribute('content', value);
    }
}

function applySeo(lang) {
    if (typeof document === 'undefined') {
        return;
    }

    const activeLanguage = normalizeLanguage(lang);
    const seo = SEO_CONFIG[activeLanguage] || SEO_CONFIG[DEFAULT_LANGUAGE];
    const pageUrl = buildLanguageUrl(activeLanguage);

    document.documentElement.lang = activeLanguage;
    document.title = seo.title;

    setMetaContent('#seo-description', seo.description);
    setMetaContent('#seo-keywords', seo.keywords);
    setMetaContent('#seo-language', activeLanguage);
    setMetaContent('#seo-og-title', seo.title);
    setMetaContent('#seo-og-description', seo.description);
    setMetaContent('#seo-og-url', pageUrl);
    setMetaContent('#seo-og-image', OG_IMAGE_URL);
    setMetaContent('#seo-og-image-secure', OG_IMAGE_URL);
    setMetaContent('#seo-og-locale', OG_LOCALES[activeLanguage] || OG_LOCALES[DEFAULT_LANGUAGE]);
    setMetaContent('#seo-og-image-alt', seo.imageAlt);
    setMetaContent('#seo-twitter-title', seo.title);
    setMetaContent('#seo-twitter-description', seo.description);
    setMetaContent('#seo-twitter-image', OG_IMAGE_URL);
    setMetaContent('#seo-twitter-image-alt', seo.imageAlt);

    const canonical = document.querySelector('#seo-canonical');
    if (canonical) {
        canonical.setAttribute('href', pageUrl);
    }

    const structuredData = document.querySelector('#seo-structured-data');
    if (structuredData) {
        structuredData.textContent = JSON.stringify(buildStructuredData(activeLanguage));
    }
}

export {
    applySeo,
    buildLanguageUrl,
    getLanguageFromUrl,
    syncUrlLanguageParam
};