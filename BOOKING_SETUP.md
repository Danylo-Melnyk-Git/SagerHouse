/**
 * BOOKING.COM INTEGRATION GUIDE
 * 
 * This file shows how to integrate with Booking.com calendar
 */

// ========================================
// STEP 1: Get Your iCal URL
// ========================================
// 1. Log in to Booking.com Property Manager
// 2. Select your property
// 3. Go to Calendar → Settings
// 4. Find "iCalendar" or "Export Calendar" section
// 5. Copy the iCal URL (looks like):
//    https://www.booking.com/calendar/ical/xxxxx.ics
// 6. Or use their embed code for a live calendar widget

// ========================================
// STEP 2: Update index.html
// ========================================
// Replace the empty data-ical attribute in the calendar-widget div:
//
// BEFORE:
// <div id="calendar-widget" data-provider="booking" data-ical="" ...></div>
//
// AFTER:
// <div id="calendar-widget" 
//      data-provider="booking" 
//      data-ical="https://www.booking.com/calendar/ical/YOUR_ID_HERE.ics"
//      data-listing-id="YOUR_LISTING_ID_HERE">
// </div>

// ========================================
// STEP 3: Option A - Use Booking.com Embed
// ========================================
// If Booking.com provides an embed script, replace calendar-widget with:
// <iframe id="booking-embed" src="https://www.booking.com/widget/..." 
//         width="100%" height="500"></iframe>

// ========================================
// STEP 4: Option B - Parse iCal Yourself (Advanced)
// ========================================
// If you want to parse the iCal and display custom calendar:

// 1. Install ical.js library (uncomment in HTML <head>):
//    <script src="https://cdnjs.cloudflare.com/ajax/libs/ical.js/1.4.0/ical.min.js"></script>

// 2. Add this to js/app.js setupBookingCalendar() function:
/*
async function parseBookingCalendar() {
    const widget = document.getElementById('calendar-widget');
    const icalUrl = widget.getAttribute('data-ical');
    
    if (!icalUrl) return;
    
    try {
        // Fetch iCal data
        const response = await fetch(icalUrl);
        const icalText = await response.text();
        
        // Parse with ical.js
        const cal = new ICAL.Calendar({ data: icalText });
        const events = cal.getAllSubcomponents('vevent');
        
        // Extract dates when property is booked (DTSTART/DTEND)
        const bookedDates = [];
        events.forEach(event => {
            const start = event.getFirstPropertyValue('dtstart');
            const end = event.getFirstPropertyValue('dtend');
            bookedDates.push({ start, end });
        });
        
        // Render calendar UI with availability
        renderAvailabilityCalendar(bookedDates);
        
    } catch(error) {
        console.log('Error fetching Booking.com calendar:', error);
        // Show placeholder if fetch fails
        widget.innerHTML = '<p class="text-stone-500">Unable to load calendar. Please contact us directly.</p>';
    }
}

function renderAvailabilityCalendar(bookedDates) {
    const widget = document.getElementById('calendar-widget');
    
    // Simple example: show today's date and mark booked dates
    const html = `
        <div class="p-4 bg-stone-50 rounded">
            <h3 class="font-bold mb-4">Availability Calendar</h3>
            <p class="text-sm text-stone-600">Booked dates: ${bookedDates.length > 0 ? 'See below' : 'Open for booking'}</p>
            <!-- Render a calendar grid here -->
        </div>
    `;
    
    widget.innerHTML = html;
}
*/

// ========================================
// STEP 5: Testing
// ========================================
// 1. Check browser console for any fetch errors (F12 → Console)
// 2. Verify CORS is enabled on Booking.com iCal endpoint
// 3. Test on different browsers (Chrome, Firefox, Safari)
// 4. Mobile test (use DevTools device toolbar)

// ========================================
// COMMON ISSUES
// ========================================
// Issue: "CORS error" or "Access-Control-Allow-Origin"
// Solution: Booking.com may block direct requests. Use:
//   - Booking.com embed code (easier)
//   - Proxy server to fetch iCal
//   - Backend API that fetches iCal

// Issue: Calendar doesn't load
// Solution: Check that:
//   - iCal URL is correct (copy from Booking.com settings)
//   - No typos in URL
//   - Listing ID matches your property

// Issue: Dates are in different timezone
// Solution: ical.js handles UTC by default. Convert to user's timezone:
/*
function convertToLocalTime(date) {
    const utc = new Date(date);
    const local = new Date(utc.getTime() - utc.getTimezoneOffset() * 60000);
    return local;
}
*/

// ========================================
// ALTERNATIVE: Direct Contact Form
// ========================================
// If calendar integration is complex, keep current setup:
// - Show placeholder message
// - Direct users to contact form
// - Respond manually to availability requests
// This is a valid approach for many small properties!

// ========================================
// BOOKING.COM FEATURES YOU CAN USE
// ========================================
// 1. ✅ iCal Export (current setup)
// 2. ✅ Embed Widget (recommended for quick setup)
// 3. ✅ API Access (requires developer account)
// 4. ✅ Integration with Airbnb (multi-channel sync)
// 5. ✅ Reviews Widget (guest testimonials)

// For most cases, using Booking.com's official embed
// is simpler than parsing iCal yourself.

// Get embed code from: Property Settings → Widgets → Calendar Widget
