/**
 * Availability calendar integration and form sync.
 */
function setupBookingCalendar(retryCount = 0) {
    const calendarWidget = document.getElementById('calendar-widget');
    if (!calendarWidget) return;

    if (calendarWidget.dataset.calendarReady === 'true') {
        return;
    }

    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');
    const checkInValueEl = document.getElementById('calendar-checkin-value');
    const checkOutValueEl = document.getElementById('calendar-checkout-value');
    const nightsValueEl = document.getElementById('calendar-nights-value');
    const toReserveBtn = document.getElementById('calendar-to-reserve');

    if (typeof window.flatpickr !== 'function') {
        if (retryCount < 20) {
            window.setTimeout(() => setupBookingCalendar(retryCount + 1), 200);
            return;
        }

        console.warn('Flatpickr is not available, skipping inline calendar setup.');
        return;
    }

    calendarWidget.dataset.calendarReady = 'true';

    const toInputDate = (date) => {
        if (!(date instanceof Date)) return '';
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day = `${date.getDate()}`.padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const selectedDates = [];
    if (checkInInput && checkInInput.value) selectedDates.push(checkInInput.value);
    if (checkOutInput && checkOutInput.value) selectedDates.push(checkOutInput.value);

    const getCalendarMonths = () => (window.innerWidth >= 1024 ? 2 : 1);

    const formatPrettyDate = (value) => {
        if (!value) return '-';
        const parsed = new Date(value);
        if (Number.isNaN(parsed.getTime())) return value;
        return parsed.toLocaleDateString(document.documentElement.lang || 'en', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    const calculateNights = (from, to) => {
        if (!from || !to) return 0;
        const start = new Date(from);
        const end = new Date(to);
        if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0;
        const msPerDay = 24 * 60 * 60 * 1000;
        const diff = Math.round((end - start) / msPerDay);
        return diff > 0 ? diff : 0;
    };

    const syncSelectionSummary = () => {
        const checkInValue = checkInInput?.value || '';
        const checkOutValue = checkOutInput?.value || '';
        const nights = calculateNights(checkInValue, checkOutValue);

        if (checkInValueEl) checkInValueEl.textContent = formatPrettyDate(checkInValue);
        if (checkOutValueEl) checkOutValueEl.textContent = formatPrettyDate(checkOutValue);
        if (nightsValueEl) nightsValueEl.textContent = String(nights);
        if (toReserveBtn) toReserveBtn.disabled = !(checkInValue && checkOutValue && nights > 0);
    };

    let visibleAnchorMonth = null;

    const captureVisibleAnchorMonth = (instance) => {
        visibleAnchorMonth = new Date(instance.currentYear, instance.currentMonth, 1);
    };

    const calendar = window.flatpickr(calendarWidget, {
        inline: true,
        mode: 'range',
        minDate: 'today',
        dateFormat: 'Y-m-d',
        defaultDate: selectedDates,
        showMonths: getCalendarMonths(),
        locale: {
            firstDayOfWeek: 1
        },
        onReady: (_, __, instance) => {
            captureVisibleAnchorMonth(instance);
        },
        onMonthChange: (_, __, instance) => {
            captureVisibleAnchorMonth(instance);
        },
        onChange: (dates) => {
            const checkIn = dates[0] ? toInputDate(dates[0]) : '';
            const checkOut = dates[1] ? toInputDate(dates[1]) : '';

            if (checkInInput) {
                checkInInput.value = checkIn;
            }

            if (checkOutInput) {
                checkOutInput.value = checkOut;
                checkOutInput.min = checkIn || '';
            }

            syncSelectionSummary();

            if (calendar.config.showMonths > 1 && visibleAnchorMonth) {
                setTimeout(() => {
                    calendar.jumpToDate(visibleAnchorMonth, false);
                    calendar.redraw();
                }, 0);
            }
        }
    });

    if (calendar?.calendarContainer && !calendarWidget.contains(calendar.calendarContainer)) {
        calendarWidget.replaceChildren(calendar.calendarContainer);
    }

    if (checkInInput) {
        checkInInput.addEventListener('change', () => {
            if (!checkInInput.value) return;
            const dates = [checkInInput.value];
            if (checkOutInput && checkOutInput.value) {
                dates.push(checkOutInput.value);
            }
            calendar.setDate(dates, true);
            syncSelectionSummary();
        });
    }

    if (checkOutInput) {
        checkOutInput.addEventListener('change', () => {
            const dates = [];
            if (checkInInput && checkInInput.value) {
                dates.push(checkInInput.value);
            }
            if (checkOutInput.value) {
                dates.push(checkOutInput.value);
            }
            calendar.setDate(dates, true);
            syncSelectionSummary();
        });
    }

    if (toReserveBtn) {
        toReserveBtn.addEventListener('click', () => {
            const reserveBlock = document.getElementById('contact');
            reserveBlock?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            checkInInput?.focus();
        });
    }

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const nextMonths = getCalendarMonths();
            if (calendar.config.showMonths !== nextMonths) {
                calendar.set('showMonths', nextMonths);
                calendar.redraw();
            }
        }, 120);
    });

    syncSelectionSummary();
}

function displayAvailability(data) {
    const calendarWidget = document.getElementById('calendar-widget');
    if (!calendarWidget || !data) return;
    console.log('Availability data:', data);
}

export { setupBookingCalendar, displayAvailability };
