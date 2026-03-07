/**
 * SAGER HOUSE - Main Application Script
 * Handles i18n (EN/DE/UK/RU), Gallery, and Booking integrations
 */

// ========================================
// I18N (Internationalization) System - 4 Languages
// ========================================

const translations = {
    en: {
        'header.apartments': 'Apartments',
        'header.prices': 'Prices',
        'header.availability': 'Availability',
        'header.gallery': 'Gallery',
        'header.location': 'Location',
        'header.faq': 'FAQ',
        'header.contact': 'Contact',
        'header.book-now': 'Book Now',
        
        'hero.title': 'Sager House – Premium Apartments in Murau, Austria',
        'hero.description': 'Modern 1-bedroom apartment with mountain views in the heart of the Austrian Alps. Experience comfort, authenticity, and Alpine hospitality.',
        'hero.check-availability': 'Check Availability',
        'hero.request-booking': 'Request Booking',
        'hero.from-price': 'From €120 per night',
        'hero.guests': 'Up to 4 guests',
        'hero.wifi': 'Free WiFi',
        'hero.parking': 'Free Parking',
        'hero.mountain-views': 'Mountain Views',
        
        'about.title': 'Your Holiday Apartment in Murau, Styria',
        'about.para1': 'Welcome to Sager House, a carefully designed 1-bedroom apartment in the historic center of Murau. Located at Sankt-Leonhard-Platz 2/1, just 200 meters from the town center and close to the railway station, our apartment offers an ideal retreat for those seeking authentic Alpine experience combined with modern comfort.',
        'about.para2': 'During winter months, Sager House is the perfect base for your ski holiday. The renowned Kreischberg ski area is just 10 minutes away. After an exhilarating day on the slopes, retreat to your cozy sanctuary equipped with everything for your relaxation, including a massage armchair to ease tired muscles.',
        'about.para3': 'Summer transforms Murau into a paradise for outdoor enthusiasts. Countless hiking trails wind through lush Alpine meadows and dense forests, starting right from our doorstep. Whether you seek an active holiday or a peaceful escape surrounded by nature, Sager House provides the perfect foundation for an authentic Austrian experience.',
        'about.coming-soon': 'Additional apartments coming soon. We are preparing them to provide you with the highest comfort standards.',
        
        'apartments.title': 'Our Apartment',
        'apartments.subtitle': 'Thoughtfully designed. Meticulously maintained.',
        'apartment.one-bedroom': 'The Sager Apartment',
        'apartment.features-title': 'Amenities',
        'apartment.request': 'Request Booking',
        'apartment.coming-soon': 'Coming Soon',
        'apartment.not-available': 'Currently not available for booking. We are preparing it for your comfort.',
        
        'feature.bedroom': '1 Double Bedroom',
        'feature.sleeps': 'Sleeps 4 people',
        'feature.size': '67 m²',
        'feature.kitchen': 'Fully Equipped Kitchen',
        'feature.dishwasher': 'Dishwasher',
        'feature.coffee-machine': 'Coffee Machine',
        'feature.wifi': 'High-Speed WiFi',
        'feature.separate-entrance': 'Separate Entrance',
        'feature.wardrobe': 'Built-in Wardrobe',
        'feature.kettle': 'Electric Kettle',
        'feature.massage-chair': 'Massage Armchair',
        'feature.heating': 'Electric Heating',
        'feature.shower': 'Modern Shower',
        'feature.sofa-bed': 'Sofa Bed (1 additional guest)',
        
        'sunna.title': 'Sunna – Coming Soon',
        'sunna.subtitle': 'Exciting new wellness experiences in development',
        'sunna.coming-soon': 'Coming Soon',
        'sunna.hint': 'Scroll horizontally to explore',
        
        'availability.title': 'Check Availability',
        'availability.subtitle': 'Find your perfect dates for an unforgettable stay.',
        'availability.placeholder': 'Real-time calendar synchronization for live availability.',
        'availability.contact-hint': 'Use the contact form below to request your preferred dates.',
        'availability.check-dates': 'Check Available Dates',
        
        'prices.title': 'Apartment Prices',
        'prices.subtitle': 'Transparent pricing for every season.',
        'prices.winter': 'High Season',
        'prices.summer': 'Summer Season',
        'prices.mid': 'Low Season',
        'prices.per-night': '/night',
        'prices.winter-dates': 'Dec 15 – Mar 31',
        'prices.summer-dates': 'Jun 15 – Sep 15',
        'prices.mid-dates': 'Apr 1 – Jun 14 & Sep 16 – Dec 14',
        
        'why.title': 'Why Choose Sager House',
        'why.proximity': 'Central Location',
        'why.proximity-desc': '200m from Murau town center, near train station',
        'why.ski': 'Perfect for Skiing',
        'why.ski-desc': '10 minutes to Kreischberg ski resort',
        'why.parking': 'Free Parking',
        'why.parking-desc': 'Reserved space for our guests',
        'why.kitchen': 'Fully Equipped',
        'why.kitchen-desc': 'Modern kitchen with all amenities',
        'why.comfort': 'Maximum Comfort',
        'why.comfort-desc': 'Massage chair and modern furniture',
        'why.quiet': 'Peaceful Area',
        'why.quiet-desc': 'Quiet location for ultimate relaxation',
        'why.activities': 'Year-Round Activities',
        'why.activities-desc': 'Hiking, skiing, and local attractions',
        
        'gallery.title': 'Gallery – Explore Sager House',
        
        'location.title': 'Location – Heart of Murau',
        'location.para1': 'Sager House is perfectly positioned at Sankt-Leonhard-Platz 2/1 in Murau\'s historic center. A short walk brings you to charming cafés, traditional restaurants, and cultural landmarks. The location is ideal whether you\'re arriving by car or train.',
        'location.para2': 'Winter sports enthusiasts will appreciate the proximity to Kreischberg ski resort (10 minutes drive). Summer hikers can explore endless trails through Alpine meadows. Our strategic location serves as the perfect basecamp for unforgettable experiences in all seasons.',
        'location.directions': 'Get Directions',
        'location.rating': 'Location Rating: 9.2/10',
        
        'faq.title': 'Frequently Asked Questions',
        
        'faq.q1': 'What are the check-in and check-out times?',
        'faq.a1': 'Check-in is available between 15:00 and 23:00. Check-out is until 12:00. Early check-in or late check-out may be possible on request – contact us to arrange.',
        
        'faq.q2': 'What is your cancellation policy?',
        'faq.a2': 'Cancellations up to 14 days before arrival are free of charge. Later cancellations or no-shows may incur fees up to 100% of the booking amount.',
        
        'faq.q3': 'Is parking available?',
        'faq.a3': 'Yes, free parking is provided in a reserved space directly at the property.',
        
        'faq.q4': 'Are children welcome?',
        'faq.a4': 'Absolutely! Children of all ages are welcome. From age 6, they are charged as an additional adult. We do not provide cribs, but can arrange a child bed upon request.',
        
        'faq.q5': 'What are the house rules?',
        'faq.a5': 'No parties or events. Smoking is strictly prohibited. Pets are welcome by special request and are subject to an additional fee.',
        
        'faq.q6': 'What payment methods do you accept?',
        'faq.a6': 'We accept bank transfers, credit cards (Visa, Mastercard), and PayPal. Payment details will be provided upon booking confirmation.',
        
        'faq.q7': 'Is WiFi included?',
        'faq.a7': 'Yes, high-speed WiFi is complimentary for all guests. You\'ll receive the connection details upon arrival.',
        
        'faq.q8': 'Is there an additional tourist tax?',
        'faq.a8': 'Yes, a local tourist tax applies and will be charged separately upon arrival or checkout. Please inquire about the current rate.',
        
        'faq.q9': 'How many guests can stay?',
        'faq.a9': 'The apartment is designed for up to 4 guests: a double bed in the bedroom and a sofa bed in the living room.',
        
        'faq.q10': 'What are the nearby activities?',
        'faq.a10': 'Skiing, hiking, mountain biking, wildlife observation, and cultural attractions. The apartment is perfectly positioned for winter sports and summer outdoor adventures.',
        
        'contact.title': 'Reserve Your Stay',
        'contact.description': 'Experience the refined comfort of Sager House. Whether for a weekend retreat or an extended alpine holiday, we look forward to welcoming you.',
        'contact.contact-info': 'Contact Information',
        'contact.first-name': 'First name',
        'contact.last-name': 'Last name',
        'contact.email': 'Email',
        'contact.check-in': 'Check-in',
        'contact.check-out': 'Check-out',
        'contact.guests': 'Number of Guests',
        'contact.message': 'Special Requests',
        'contact.submit': 'Submit Request',
        
        'footer.copyright': '© 2026 Sager House. All rights reserved.',
        'footer.imprint': 'Imprint',
        'footer.privacy': 'Privacy Policy',
        'footer.address': 'Sankt-Leonhard-Platz 2/1, 8850 Murau, Austria',
        'footer.phone': '+380 50 652 62 08',
        'footer.email': 'sager.apart.house@gmail.com',
    },
    de: {
        'header.apartments': 'Apartments',
        'header.prices': 'Preise',
        'header.availability': 'Verfügbarkeit',
        'header.gallery': 'Galerie',
        'header.location': 'Standort',
        'header.faq': 'FAQ',
        'header.contact': 'Kontakt',
        'header.book-now': 'Jetzt buchen',
        
        'hero.title': 'Sager House – Premium Apartments in Murau, Österreich',
        'hero.description': 'Modernes 1-Zimmer-Apartment mit Bergblick im Herzen der Österreichischen Alpen. Erleben Sie Komfort, Authentizität und alpine Gastfreundschaft.',
        'hero.check-availability': 'Verfügbarkeit prüfen',
        'hero.request-booking': 'Buchung anfordern',
        'hero.from-price': 'Ab €120 pro Nacht',
        'hero.guests': 'Bis zu 4 Gäste',
        'hero.wifi': 'Kostenloses WLAN',
        'hero.parking': 'Kostenlose Parkplätze',
        'hero.mountain-views': 'Bergblicke',
        
        'about.title': 'Ihr Ferienhaus in Murau, Steiermark',
        'about.para1': 'Willkommen im Sager House, einem sorgfältig gestalteten 1-Zimmer-Apartment im historischen Zentrum von Murau. Das Apartment befindet sich am Sankt-Leonhard-Platz 2/1, nur 200 Meter vom Stadtzentrum entfernt und in der Nähe des Bahnhofs. Es ist der ideale Rückzugsort für diejenigen, die authentisches Alpenleben mit modernem Komfort verbinden möchten.',
        'about.para2': 'In den Wintermonaten ist das Sager House der perfekte Ausgangspunkt für Ihren Skiurlaub. Das renommierte Skigebiet Kreischberg ist nur 10 Minuten entfernt. Nach einem erlebnisreichen Tag auf der Piste können Sie sich in Ihrem gemütlichen Rückzugsort entspannen, ausgestattet mit allem für Ihre Erholung, einschließlich eines Massagesessels zur Entspannung müder Muskeln.',
        'about.para3': 'Im Sommer verwandelt sich Murau in ein Paradies für Naturliebhaber. Unzählige Wanderwege führen durch üppige Alpenwiesen und dichte Wälder, die direkt vor unserer Tür beginnen. Ob Sie einen aktiven Urlaub oder eine friedliche Flucht inmitten der Natur suchen – das Sager House bietet die perfekte Grundlage für ein echtes Österreich-Erlebnis.',
        'about.coming-soon': 'Weitere Apartments sind in Kürze verfügbar. Wir bereiten sie vor, um Ihnen höchste Komfortnormen zu bieten.',
        
        'apartments.title': 'Unser Apartment',
        'apartments.subtitle': 'Durchdacht gestaltet. Sorgfältig gepflegt.',
        'apartment.one-bedroom': 'Das Sager Apartment',
        'apartment.features-title': 'Ausstattung',
        'apartment.request': 'Buchung anfordern',
        'apartment.coming-soon': 'In Kürze verfügbar',
        'apartment.not-available': 'Derzeit nicht für Buchungen verfügbar. Wir bereiten es für Ihren Komfort vor.',
        
        'feature.bedroom': '1 Doppelzimmer',
        'feature.sleeps': 'Platz für 4 Personen',
        'feature.size': '67 m²',
        'feature.kitchen': 'Vollständig ausgestattete Küche',
        'feature.dishwasher': 'Spülmaschine',
        'feature.coffee-machine': 'Kaffeemaschine',
        'feature.wifi': 'Schnelles WLAN',
        'feature.separate-entrance': 'Separater Eingang',
        'feature.wardrobe': 'Einbaugarderobe',
        'feature.kettle': 'Elektrischer Wasserkocher',
        'feature.massage-chair': 'Massagesessel',
        'feature.heating': 'Elektroheizung',
        'feature.shower': 'Modernes Duschbad',
        'feature.sofa-bed': 'Schlafsofa (1 zusätzlicher Gast)',
        
        'sunna.title': 'Sunna – In Kürze verfügbar',
        'sunna.subtitle': 'Spannende neue Wellness-Erlebnisse in Entwicklung',
        'sunna.coming-soon': 'In Kürze verfügbar',
        'sunna.hint': 'Horizontal scrollen zum Erkunden',
        
        'availability.title': 'Verfügbarkeit prüfen',
        'availability.subtitle': 'Finden Sie Ihre perfekten Termine für einen unvergesslichen Aufenthalt.',
        'availability.placeholder': 'Echtzeit-Kalender-Synchronisierung für aktuelle Verfügbarkeit.',
        'availability.contact-hint': 'Verwenden Sie das Kontaktformular unten, um Ihre Wunschdaten anzufordern.',
        'availability.check-dates': 'Verfügbare Termine prüfen',
        
        'prices.title': 'Apartment-Preise',
        'prices.subtitle': 'Transparente Preisgestaltung für jede Jahreszeit.',
        'prices.winter': 'Hochsaison',
        'prices.summer': 'Sommersaison',
        'prices.mid': 'Nebensaison',
        'prices.per-night': '/Nacht',
        'prices.winter-dates': '15. Dez – 31. Mär',
        'prices.summer-dates': '15. Jun – 15. Sep',
        'prices.mid-dates': '1. Apr – 14. Jun & 16. Sep – 14. Dez',
        
        'why.title': 'Warum Sager House wählen',
        'why.proximity': 'Zentrale Lage',
        'why.proximity-desc': '200m vom Zentrum Muraus, nah dem Bahnhof',
        'why.ski': 'Ideal zum Skifahren',
        'why.ski-desc': '10 Minuten zum Skigebiet Kreischberg',
        'why.parking': 'Kostenlose Parkplätze',
        'why.parking-desc': 'Reservierter Platz für unsere Gäste',
        'why.kitchen': 'Vollständig ausgestattet',
        'why.kitchen-desc': 'Moderne Küche mit allen Annehmlichkeiten',
        'why.comfort': 'Maximaler Komfort',
        'why.comfort-desc': 'Massagesessel und modernes Mobiliar',
        'why.quiet': 'Ruhige Gegend',
        'why.quiet-desc': 'Ruhige Lage für ultimative Entspannung',
        'why.activities': 'Ganzjährig Aktivitäten',
        'why.activities-desc': 'Wandern, Skifahren und lokale Attraktionen',
        
        'gallery.title': 'Galerie – Erkunden Sie das Sager House',
        
        'location.title': 'Standort – Herz von Murau',
        'location.para1': 'Das Sager House befindet sich perfekt am Sankt-Leonhard-Platz 2/1 im historischen Zentrum von Murau. Ein kurzer Spaziergang führt Sie zu charmanten Cafés, traditionellen Restaurants und Kulturdenkmälern. Der Standort ist ideal, ob Sie mit dem Auto oder dem Zug anreisen.',
        'location.para2': 'Wintersportbegeisterte werden die Nähe zum Skigebiet Kreischberg (10 Minuten Fahrt) zu schätzen wissen. Sommerwanderer können endlose Wege durch Alpenwiesen erkunden. Unsere strategische Lage ist der perfekte Ausgangspunkt für unvergessliche Erlebnisse in allen Jahreszeiten.',
        'location.directions': 'Richtungen abrufen',
        'location.rating': 'Standortbewertung: 9.2/10',
        
        'faq.title': 'Häufig gestellte Fragen',
        
        'faq.q1': 'Welche sind die Check-in und Check-out Zeiten?',
        'faq.a1': 'Der Check-in ist zwischen 15:00 und 23:00 Uhr möglich. Der Check-out wird bis 12:00 Uhr erwartet. Früherer Check-in oder verspäteter Check-out kann auf Anfrage möglich sein – kontaktieren Sie uns.',
        
        'faq.q2': 'Wie ist Ihre Stornierungspolitik?',
        'faq.a2': 'Stornierungen bis 14 Tage vor Ankunft sind kostenlos. Spätere Stornierungen oder Nichterscheinen können Gebühren bis zu 100% des Buchungsbetrags verursachen.',
        
        'faq.q3': 'Ist Parken verfügbar?',
        'faq.a3': 'Ja, kostenlose Parkplätze stehen in einem reservierten Platz direkt am Grundstück zur Verfügung.',
        
        'faq.q4': 'Sind Kinder willkommen?',
        'faq.a4': 'Selbstverständlich! Kinder jeden Alters sind willkommen. Ab 6 Jahren werden sie wie ein zusätzlicher Erwachsener berechnet. Wir stellen keine Kinderbetten bereit, können aber ein Kinderbett auf Anfrage arrangieren.',
        
        'faq.q5': 'Was sind die Hausregeln?',
        'faq.a5': 'Keine Feiern oder Veranstaltungen. Rauchen ist strikt verboten. Haustiere sind auf spezielle Anfrage willkommen und unterliegen einer zusätzlichen Gebühr.',
        
        'faq.q6': 'Welche Zahlungsmethoden akzeptieren Sie?',
        'faq.a6': 'Wir akzeptieren Banküberweisung, Kreditkarten (Visa, Mastercard) und PayPal. Zahlungsdetails werden nach Buchungsbestätigung bereitgestellt.',
        
        'faq.q7': 'Ist WLAN inbegriffen?',
        'faq.a7': 'Ja, schnelles WLAN ist für alle Gäste kostenlos enthalten. Sie erhalten die Verbindungsdaten bei Ihrer Ankunft.',
        
        'faq.q8': 'Gibt es eine zusätzliche Fremdenverkehrsabgabe?',
        'faq.a8': 'Ja, es fällt eine lokale Fremdenverkehrsabgabe an und wird bei Ankunft oder Checkout separat berechnet. Erkundigen Sie sich nach dem aktuellen Satz.',
        
        'faq.q9': 'Wie viele Gäste können übernachten?',
        'faq.a9': 'Das Apartment ist für bis zu 4 Gäste ausgelegt: ein Doppelbett im Schlafzimmer und ein Schlafsofa im Wohnzimmer.',
        
        'faq.q10': 'Welche Aktivitäten gibt es in der Nähe?',
        'faq.a10': 'Skifahren, Wandern, Mountainbiken, Naturbeobachtung und Kultursehenswürdigkeiten. Das Apartment ist perfekt positioniert für Wintersport und sommerliche Outdoor-Abenteuer.',
        
        'contact.title': 'Buchen Sie Ihren Aufenthalt',
        'contact.description': 'Erleben Sie den raffinierten Komfort des Sager House. Ganz gleich, ob für einen Wochenendtrip oder einen längeren Alpenurlaub, wir freuen uns auf Ihren Besuch.',
        'contact.contact-info': 'Kontaktinformation',
        'contact.first-name': 'Vorname',
        'contact.last-name': 'Nachname',
        'contact.email': 'E-Mail',
        'contact.check-in': 'Ankunft',
        'contact.check-out': 'Abreise',
        'contact.guests': 'Anzahl der Gäste',
        'contact.message': 'Spezielle Anfragen',
        'contact.submit': 'Anfrage absenden',
        
        'footer.copyright': '© 2026 Sager House. Alle Rechte vorbehalten.',
        'footer.imprint': 'Impressum',
        'footer.privacy': 'Datenschutz',
        'footer.address': 'Sankt-Leonhard-Platz 2/1, 8850 Murau, Österreich',
        'footer.phone': '+380 50 652 62 08',
        'footer.email': 'sager.apart.house@gmail.com',
    },
    uk: {
        'header.apartments': 'Апартаменти',
        'header.prices': 'Ціни',
        'header.availability': 'Доступність',
        'header.gallery': 'Галерея',
        'header.location': 'Розташування',
        'header.faq': 'FAQ',
        'header.contact': 'Контакт',
        'header.book-now': 'Забронювати',
        
        'hero.title': 'Sager House – Преміум апартаменти в Мурау, Австрія',
        'hero.description': 'Сучасна однокімнатна квартира з видом на гори в серці Австрійських Альп. Відчуйте комфорт, автентичність та альпійське гостинство.',
        'hero.check-availability': 'Перевірити доступність',
        'hero.request-booking': 'Запросити бронювання',
        'hero.from-price': 'Від €120 за ніч',
        'hero.guests': 'До 4 гостей',
        'hero.wifi': 'Безкоштовний Wi-Fi',
        'hero.parking': 'Безкоштовне паркування',
        'hero.mountain-views': 'Вид на гори',
        
        'about.title': 'Ваша квартира для відпустки в Мурау, Штирія',
        'about.para1': 'Добро пожалувати до Sager House, ретельно розробленої однокімнатної квартири в історичному центрі Мурау. Розташована за адресою Sankt-Leonhard-Platz 2/1, всього 200 метрів від центру міста і поблизу залізничної станції, наша квартира пропонує ідеальний притулок для тих, хто шукає аутентичний альпійський досвід у поєднанні з сучасним комфортом.',
        'about.para2': 'У зимові місяці Sager House – ідеальна база для вашої лижної відпустки. Знаменита гірськолижна база Kreischberg знаходиться всього за 10 хвилин їзди. Після захоплюючого дня на схилах повертайтеся до вашого затишного притулку, обладнаного всім для вашого розслаблення, включаючи масажне крісло для розслаблення втомлених м\'язів.',
        'about.para3': 'Влітку Мурау перетворюється в рай для любителів природи. Численні пішохідні стежки ведуть через буйні альпійські луки та густі ліси, починаючи прямо від нашого порогу. Незалежно від того, чи ви шукаєте активну відпустку чи спокійний втік у природу – Sager House пропонує ідеальну основу для аутентичного австрійського досвіду.',
        'about.coming-soon': 'Додаткові апартаменти невдовзі. Ми готуємо їх, щоб забезпечити вам найвищі стандарти комфорту.',
        
        'apartments.title': 'Наш апартамент',
        'apartments.subtitle': 'Продуманий дизайн. Ретельне обслуговування.',
        'apartment.one-bedroom': 'Апартамент Sager',
        'apartment.features-title': 'Зручності',
        'apartment.request': 'Запросити бронювання',
        'apartment.coming-soon': 'Невдовзи',
        'apartment.not-available': 'Наразі недоступно для бронювання. Ми готуємо його для вашого комфорту.',
        
        'feature.bedroom': '1 спальня з двоспальним ліжком',
        'feature.sleeps': 'Місця для 4 осіб',
        'feature.size': '67 м²',
        'feature.kitchen': 'Повністю обладнана кухня',
        'feature.dishwasher': 'Посудомийна машина',
        'feature.coffee-machine': 'Кавоварка',
        'feature.wifi': 'Високошвидкісний Wi-Fi',
        'feature.separate-entrance': 'Окремий вхід',
        'feature.wardrobe': 'Вбудована шафа',
        'feature.kettle': 'Електричний чайник',
        'feature.massage-chair': 'Масажне крісло',
        'feature.heating': 'Електричне опалення',
        'feature.shower': 'Сучасна ванна',
        'feature.sofa-bed': 'Диван-ліжко (1 додаткова людина)',
        
        'sunna.title': 'Sunna – Невдовзи',
        'sunna.subtitle': 'Захопливі нові вельнес-досвіди у розробці',
        'sunna.coming-soon': 'Невдовзи',
        'sunna.hint': 'Гортайте горизонтально для дослідження',
        
        'availability.title': 'Перевірити доступність',
        'availability.subtitle': 'Знайдіть ідеальні дати для незабутнього перебування.',
        'availability.placeholder': 'Синхронізація календаря в реальному часі для поточної доступності.',
        'availability.contact-hint': 'Використовуйте форму контакту нижче, щоб запросити бажані дати.',
        'availability.check-dates': 'Перевірити доступні дати',
        
        'prices.title': 'Ціни квартири',
        'prices.subtitle': 'Прозорі ціни для кожного сезону.',
        'prices.winter': 'Високий сезон',
        'prices.summer': 'Літній сезон',
        'prices.mid': 'Низький сезон',
        'prices.per-night': '/ніч',
        'prices.winter-dates': '15 грн – 31 бер',
        'prices.summer-dates': '15 чер – 15 вер',
        'prices.mid-dates': '1 кві – 14 чер & 16 вер – 14 грн',
        
        'why.title': 'Чому вибрати Sager House',
        'why.proximity': 'Центральне розташування',
        'why.proximity-desc': '200м від центру Мурау, поблизу вокзалу',
        'why.ski': 'Ідеально для катання на лижах',
        'why.ski-desc': '10 хвилин до гірськолижної бази Kreischberg',
        'why.parking': 'Безкоштовне паркування',
        'why.parking-desc': 'Зарезервоване місце для наших гостей',
        'why.kitchen': 'Повністю обладнано',
        'why.kitchen-desc': 'Сучасна кухня з усіма зручностями',
        'why.comfort': 'Максимальний комфорт',
        'why.comfort-desc': 'Масажне крісло та сучасні меблі',
        'why.quiet': 'Спокійна місцевість',
        'why.quiet-desc': 'Тиха локація для максимального розслаблення',
        'why.activities': 'Цілорічна діяльність',
        'why.activities-desc': 'Походи, катання на лижах та місцеві визначні пам\'ятки',
        
        'gallery.title': 'Галерея – Дослідіть Sager House',
        
        'location.title': 'Розташування – Серце Мурау',
        'location.para1': 'Sager House розташований ідеально за адресою Sankt-Leonhard-Platz 2/1 в історичному центрі Мурау. Короткої прогулянкою ви дійдете до чарівних кафе, традиційних ресторанів та культурних пам\'яток. Розташування ідеально як для автомобілістів, так і для тих, хто приїжджає поїздом.',
        'location.para2': 'Любителів зимових видів спорту однозначно порадують близкість до гірськолижної бази Kreischberg (10 хвилин їзди). Літні туристи можуть дослідити нескінченні стежки через альпійські луки. Наше стратегічне розташування є ідеальною базою для незабутніх приключень у будь-якому сезоні.',
        'location.directions': 'Отримати маршрут',
        'location.rating': 'Оцінка розташування: 9.2/10',
        
        'faq.title': 'Часто задавані питання',
        
        'faq.q1': 'Які час заселення та виселення?',
        'faq.a1': 'Заселення можливо з 15:00 до 23:00. Виселення очікується до 12:00. Раннє заселення або пізне виселення можливе за запитом – зв\'яжіться з нами.',
        
        'faq.q2': 'Яка ваша політика скасування?',
        'faq.a2': 'Скасування до 14 днів до прибуття є безкоштовним. Скасування на більш пізній термін або неявка можуть спричинити збори до 100% суми бронювання.',
        
        'faq.q3': 'Чи наявне паркування?',
        'faq.a3': 'Так, безкоштовне паркування надається на зарезервованому місці безпосередньо при будинку.',
        
        'faq.q4': 'Чи ласкаві дітям?',
        'faq.a4': 'Звичайно! Діти будь-якого віку ласкаві. З 6 років вони розраховуються як додаткова дорослий. Ми не надаємо дитячих ліжок, але можемо розташувати дитяче ліжко за запитом.',
        
        'faq.q5': 'Які правила будинку?',
        'faq.a5': 'Без вечірок чи заходів. Куріння суворо заборонено. Тварини ласкаві за спеціальним запитом і підлягають додатковій платі.',
        
        'faq.q6': 'Які способи оплати ви приймаєте?',
        'faq.a6': 'Ми приймаємо банківські переводи, кредитні карти (Visa, Mastercard) та PayPal. Деталі платежу будуть надані після підтвердження бронювання.',
        
        'faq.q7': 'Чи Wi-Fi включено?',
        'faq.a7': 'Так, високошвидкісний Wi-Fi безкоштовний для всіх гостей. Ви отримаєте деталі підключення після прибуття.',
        
        'faq.q8': 'Чи є додатковий туристичний збір?',
        'faq.a8': 'Так, застосовується місцевий туристичний збір і буде нараховуватись окремо при прибутті або виселенні. Запитайте поточний курс.',
        
        'faq.q9': 'Скільки гостей можуть залишитися?',
        'faq.a9': 'Апартамент розраховано на до 4 гостей: двоспальне ліжко в спальні та диван-ліжко в гостиній кімнаті.',
        
        'faq.q10': 'Які активності поблизу?',
        'faq.a10': 'Катання на лижах, походи, гірський велоспорт, спостереження за дикою природою та культурні визначні пам\'ятки. Апартамент розташований ідеально для зимових видів спорту та літніх пригод на свіжому повітрі.',
        
        'contact.title': 'Заброньте свій перебування',
        'contact.description': 'Відчуйте витончений комфорт Sager House. Незалежно від того, чи це вихідний вик-енд або довший альпійський відпустка, ми з нетерпінням чекаємо на ваш прибуття.',
        'contact.contact-info': 'Контактна інформація',
        'contact.first-name': 'Ім\'я',
        'contact.last-name': 'Прізвище',
        'contact.email': 'Email',
        'contact.check-in': 'Прибуття',
        'contact.check-out': 'Виїзд',
        'contact.guests': 'Кількість гостей',
        'contact.message': 'Спеціальні побажання',
        'contact.submit': 'Подати запит',
        
        'footer.copyright': '© 2026 Sager House. Всі права захищені.',
        'footer.imprint': 'Вихідні дані',
        'footer.privacy': 'Політика конфіденційності',
        'footer.address': 'Sankt-Leonhard-Platz 2/1, 8850 Murau, Austria',
        'footer.phone': '+380 50 652 62 08',
        'footer.email': 'sager.apart.house@gmail.com',
    },
    ru: {
        'header.apartments': 'Апартаменты',
        'header.prices': 'Цены',
        'header.availability': 'Доступность',
        'header.gallery': 'Галерея',
        'header.location': 'Расположение',
        'header.faq': 'FAQ',
        'header.contact': 'Контакт',
        'header.book-now': 'Забронировать',
        
        'hero.title': 'Sager House – Премиум апартаменты в Мурау, Австрия',
        'hero.description': 'Современная однокомнатная квартира с видом на горы в сердце Австрийских Альп. Испытайте комфорт, подлинность и альпийское гостеприимство.',
        'hero.check-availability': 'Проверить доступность',
        'hero.request-booking': 'Запросить бронь',
        'hero.from-price': 'От €120 за ночь',
        'hero.guests': 'До 4 гостей',
        'hero.wifi': 'Бесплатный Wi-Fi',
        'hero.parking': 'Бесплатная парковка',
        'hero.mountain-views': 'Вид на горы',
        
        'about.title': 'Ваша квартира для отпуска в Мурау, Штирия',
        'about.para1': 'Добро пожаловать в Sager House – тщательно спроектированную однокомнатную квартиру в историческом центре Мурау. Расположенная по адресу Sankt-Leonhard-Platz 2/1, всего в 200 метрах от центра города и рядом с железнодорожной станцией, наша квартира предлагает идеальный приют для тех, кто ищет подлинный альпийский опыт в сочетании с современным комфортом.',
        'about.para2': 'В зимние месяцы Sager House – идеальная база для вашего горнолыжного отпуска. Знаменитая горнолыжная база Kreischberg находится всего в 10 минутах езды. После волнующего дня на склонах возвращайтесь в ваш уютный приют, снабженный всем для вашего расслабления, включая массажное кресло для отдыха уставших мышц.',
        'about.para3': 'Летом Мурау превращается в рай для любителей природы. Исчисленные пешеходные тропы ведут через буйные альпийские луга и густые леса, начиная прямо от нашего порога. Независимо от того, ищете ли вы активный отпуск или спокойный побег в природу – Sager House предлагает идеальную основу для подлинного австрийского опыта.',
        'about.coming-soon': 'Дополнительные апартаменты скоро появятся. Мы готовим их, чтобы обеспечить вам высочайшие стандарты комфорта.',
        
        'apartments.title': 'Наш апартамент',
        'apartments.subtitle': 'Продуманный дизайн. Тщательное обслуживание.',
        'apartment.one-bedroom': 'Апартамент Sager',
        'apartment.features-title': 'Удобства',
        'apartment.request': 'Запросить бронь',
        'apartment.coming-soon': 'Скоро',
        'apartment.not-available': 'В настоящее время недоступен для бронирования. Мы готовим его для вашего комфорта.',
        
        'feature.bedroom': '1 спальня с двуспальной кроватью',
        'feature.sleeps': 'Места для 4 человек',
        'feature.size': '67 м²',
        'feature.kitchen': 'Полностью оборудованная кухня',
        'feature.dishwasher': 'Посудомоечная машина',
        'feature.coffee-machine': 'Кофемашина',
        'feature.wifi': 'Высокоскоростной Wi-Fi',
        'feature.separate-entrance': 'Отдельный вход',
        'feature.wardrobe': 'Встроенный шкаф',
        'feature.kettle': 'Электрический чайник',
        'feature.massage-chair': 'Массажное кресло',
        'feature.heating': 'Электрическое отопление',
        'feature.shower': 'Современный душ',
        'feature.sofa-bed': 'Диван-кровать (1 дополнительно лицо)',
        
        'sunna.title': 'Sunna – Скоро',
        'sunna.subtitle': 'Захватывающие новые впечатления в области оздоровления в разработке',
        'sunna.coming-soon': 'Скоро',
        'sunna.hint': 'Прокрутите горизонтально для изучения',
        
        'availability.title': 'Проверить доступность',
        'availability.subtitle': 'Найдите идеальные даты для незабываемого пребывания.',
        'availability.placeholder': 'Синхронизация календаря в реальном времени для текущей доступности.',
        'availability.contact-hint': 'Используйте форму контакта ниже, чтобы запросить нужные даты.',
        'availability.check-dates': 'Проверить доступные даты',
        
        'prices.title': 'Цены апартаментов',
        'prices.subtitle': 'Прозрачные цены для каждого сезона.',
        'prices.winter': 'Высокий сезон',
        'prices.summer': 'Летний сезон',
        'prices.mid': 'Низкий сезон',
        'prices.per-night': '/ночь',
        'prices.winter-dates': '15 дек – 31 мар',
        'prices.summer-dates': '15 июн – 15 сен',
        'prices.mid-dates': '1 апр – 14 июн & 16 сен – 14 дек',
        
        'why.title': 'Почему выбрать Sager House',
        'why.proximity': 'Центральное расположение',
        'why.proximity-desc': '200м от центра Мурау, рядом с вокзалом',
        'why.ski': 'Идеально для горнолыжного спорта',
        'why.ski-desc': '10 минут до горнолыжной базы Kreischberg',
        'why.parking': 'Бесплатная парковка',
        'why.parking-desc': 'Зарезервированное место для наших гостей',
        'why.kitchen': 'Полностью оборудовано',
        'why.kitchen-desc': 'Современная кухня со всеми удобствами',
        'why.comfort': 'Максимальный комфорт',
        'why.comfort-desc': 'Массажное кресло и современная мебель',
        'why.quiet': 'Спокойное место',
        'why.quiet-desc': 'Тихое расположение для полного расслабления',
        'why.activities': 'Круглогодичная деятельность',
        'why.activities-desc': 'Пешие прогулки, горнолыжный спорт и местные достопримечательности',
        
        'gallery.title': 'Галерея – Откройте для себя Sager House',
        
        'location.title': 'Расположение – Сердце Мурау',
        'location.para1': 'Sager House идеально расположен по адресу Sankt-Leonhard-Platz 2/1 в историческом центре Мурау. Короткая прогулка приведет вас к очаровательным кафе, традиционным ресторанам и культурным памятникам. Расположение идеально как для автомобилистов, так и для тех, кто прибывает на поезде.',
        'location.para2': 'Любители зимних видов спорта оценят близость к горнолыжной базе Kreischberg (10 минут езды). Летние туристы могут исследовать бесконечные тропы через альпийские луга. Наше стратегическое расположение служит идеальной базой для незабываемых приключений в любое время года.',
        'location.directions': 'Получить маршрут',
        'location.rating': 'Оценка расположения: 9.2/10',
        
        'faq.title': 'Часто задаваемые вопросы',
        
        'faq.q1': 'Какое время заселения и выселения?',
        'faq.a1': 'Заселение доступно с 15:00 до 23:00. Выселение ожидается до 12:00. Раннее заселение или позднее выселение возможно по запросу – свяжитесь с нами.',
        
        'faq.q2': 'Какова ваша политика отмены?',
        'faq.a2': 'Отмена до 14 дней до прибытия бесплатна. Отмена позже или неявка может повлечь сборы до 100% суммы бронирования.',
        
        'faq.q3': 'Есть ли парковка?',
        'faq.a3': 'Да, бесплатная парковка предоставляется на зарезервированном месте прямо у дома.',
        
        'faq.q4': 'Приветствуются ли дети?',
        'faq.a4': 'Конечно! Дети любого возраста приветствуются. С 6 лет они оплачиваются как дополнительный взрослый. Мы не предоставляем детские кроватки, но можем расположить детскую кровать по запросу.',
        
        'faq.q5': 'Каковы правила дома?',
        'faq.a5': 'Без вечеринок или мероприятий. Курение строго запрещено. Питомцы приветствуются по специальному запросу и подлежат дополнительной плате.',
        
        'faq.q6': 'Какие способы оплаты вы принимаете?',
        'faq.a6': 'Мы принимаем банковские переводы, кредитные карты (Visa, Mastercard) и PayPal. Детали платежа будут предоставлены после подтверждения брони.',
        
        'faq.q7': 'Включен ли Wi-Fi?',
        'faq.a7': 'Да, высокоскоростной Wi-Fi бесплатен для всех гостей. Вы получите данные для подключения при прибытии.',
        
        'faq.q8': 'Есть ли дополнительный туристический сбор?',
        'faq.a8': 'Да, применяется местный туристический сбор и будет начислен отдельно при прибытии или выселении. Уточните текущий тариф.',
        
        'faq.q9': 'Сколько гостей может остаться?',
        'faq.a9': 'Апартамент рассчитан на до 4 гостей: двуспальная кровать в спальне и диван-кровать в гостиной.',
        
        'faq.q10': 'Какие виды деятельности рядом?',
        'faq.a10': 'Горнолыжный спорт, пешие прогулки, горный велоспорт, наблюдение за дикой природой и культурные достопримечательности. Апартамент идеально расположен для зимних видов спорта и летних приключений на открытом воздухе.',
        
        'contact.title': 'Забронируйте своё пребывание',
        'contact.description': 'Испытайте изысканный комфорт Sager House. Независимо от того, это выходные или более длительный альпийский отпуск, мы с нетерпением ждем вашего прибытия.',
        'contact.contact-info': 'Контактная информация',
        'contact.first-name': 'Имя',
        'contact.last-name': 'Фамилия',
        'contact.email': 'Email',
        'contact.check-in': 'Прибытие',
        'contact.check-out': 'Выезд',
        'contact.guests': 'Количество гостей',
        'contact.message': 'Специальные пожелания',
        'contact.submit': 'Отправить запрос',
        
        'footer.copyright': '© 2026 Sager House. Все права защищены.',
        'footer.imprint': 'Выходные данные',
        'footer.privacy': 'Политика конфиденциальности',
        'footer.address': 'Sankt-Leonhard-Platz 2/1, 8850 Murau, Austria',
        'footer.phone': '+380 50 652 62 08',
        'footer.email': 'sager.apart.house@gmail.com',
    }
};

// ========================================
// I18N Functions (Supports 4 Languages)
// ========================================

let currentLanguage = localStorage.getItem('sagerhouse_language') || 'en';

function initI18n() {
    if (translations[currentLanguage]) {
        localStorage.setItem('sagerhouse_language', currentLanguage);
    } else {
        currentLanguage = 'en';
    }
    
    document.documentElement.lang = currentLanguage;
    updateLanguageButtons();
    updatePageTranslations();
    setupLanguageSwitchers();
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
}

function switchLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLanguage = lang;
    localStorage.setItem('sagerhouse_language', lang);
    
    document.documentElement.lang = lang;
    updatePageTranslations();
    updateLanguageButtons();
}

function updatePageTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[currentLanguage][key] || translations['en'][key] || key;
        
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
        if (lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ========================================
// Gallery Functions
// ========================================

/**
 * Initialize gallery with dynamic loading
 */
function initGallery() {
    // This would load images from /images folder
    // For now, the gallery uses static images with hover effects
    // To make it truly dynamic, you would need a backend API
    // or use a file listing service
    
    const galleryItems = document.querySelectorAll('[data-gallery-item]');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                // Could open lightbox here
                console.log('Gallery item clicked:', img.src);
            }
        });
    });
}

/**
 * Setup Booking.com calendar integration
 */
function setupBookingCalendar() {
    const calendarWidget = document.getElementById('calendar-widget');
    if (!calendarWidget) return;
    
    // This is a placeholder for Booking.com integration
    // To use real Booking.com calendar:
    // 1. Get your iCal URL from Booking.com Property Manager
    // 2. Replace the data-ical attribute with actual URL
    // 3. Use Booking.com embed code or build custom calendar from iCal
    
    const icalUrl = calendarWidget.getAttribute('data-ical');
    
    if (icalUrl) {
        // Load and parse iCal data
        console.log('Booking.com iCal URL configured:', icalUrl);
    }
}

/**
 * Format availability data for display
 */
function displayAvailability(data) {
    const calendarWidget = document.getElementById('calendar-widget');
    if (!calendarWidget || !data) return;
    
    // This would show actual availability from iCal data
    // For now, it shows placeholder
    console.log('Availability data:', data);
}

// ========================================
// Mountain View Image Enhancement
// ========================================

/**
 * Enhance hero image loading and display
 */
function enhanceHeroImage() {
    const heroImg = document.querySelector('.hero-image-container img') || 
                   document.querySelector('[alt="Austrian Alps Mountain View"]');
    
    if (!heroImg) return;
    
    // Ensure proper aspect ratio on all devices
    const container = heroImg.closest('[class*="aspect"]') || 
                     heroImg.parentElement;
    
    if (container) {
        container.style.overflow = 'hidden';
        container.style.display = 'block';
    }
    
    heroImg.style.display = 'block';
    heroImg.style.width = '100%';
    heroImg.style.height = '100%';
    heroImg.style.objectFit = 'cover';
    heroImg.style.objectPosition = 'center';
}

// ========================================
// Initialization
// ========================================

/**
 * Main initialization function
 */
function initializeApp() {
    // Initialize i18n
    initI18n();
    
    // Initialize gallery
    initGallery();
    
    // Setup Booking.com integration
    setupBookingCalendar();
    
    // Enhance hero image
    enhanceHeroImage();
    
    // Log initialization
    console.log('Sager House app initialized');
    console.log('Current language:', currentLanguage);
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// ========================================
// Utility Functions
// ========================================

/**
 * Get current language
 */
function getLanguage() {
    return currentLanguage;
}

/**
 * Get translation for a key
 */
function t(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

// Export for use in HTML if needed
window.SagerHouse = {
    switchLanguage,
    getLanguage,
    t,
    initializeApp
};
