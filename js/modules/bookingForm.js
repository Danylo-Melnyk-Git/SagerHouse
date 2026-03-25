/**
 * Booking form submission via Telegram.
 */
import { t } from './i18n.js';

const TELEGRAM_BOT_TOKEN = '8614579945:AAGgdL67OL8UcJF5gClNsZSPc1z_AVqnUME';
const TELEGRAM_CHAT_ID = '5733738720';

function escapeMarkdown(text) {
    return text.replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1');
}

function getTelegramSendMessageUrl() {
    return `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
}

function sendTelegramMessage(text) {
    if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN.includes('TOKEN')) {
        return Promise.reject(new Error('Telegram bot token not configured.'));
    }
    if (!TELEGRAM_CHAT_ID) {
        return Promise.reject(new Error('Telegram chat id not configured.'));
    }

    return fetch(getTelegramSendMessageUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: 'MarkdownV2'
        })
    }).then(res => res.json());
}

function initBookingForm() {
    const form = document.getElementById('booking-form');
    const statusEl = document.getElementById('booking-status');
    if (!form || !statusEl) return;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        statusEl.textContent = '';
        statusEl.className = 'mt-4 text-sm';

        const data = new FormData(form);
        const firstName = (data.get('first-name') || '').toString().trim();
        const lastName = (data.get('last-name') || '').toString().trim();
        const email = (data.get('email') || '').toString().trim();
        const checkIn = (data.get('check-in') || '').toString();
        const checkOut = (data.get('check-out') || '').toString();
        const guests = (data.get('guests') || '').toString();
        const message = (data.get('message') || '').toString().trim();

        if (!firstName || !lastName || !email) {
            statusEl.textContent = t('form.validation-required');
            statusEl.classList.add('text-red-600');
            return;
        }

        const payload = [
            '*New booking request*',
            `*Name:* ${escapeMarkdown(`${firstName} ${lastName}`)}`,
            `*Email:* ${escapeMarkdown(email)}`,
            checkIn ? `*Check‑in:* ${escapeMarkdown(checkIn)}` : '',
            checkOut ? `*Check‑out:* ${escapeMarkdown(checkOut)}` : '',
            guests ? `*Guests:* ${escapeMarkdown(guests)}` : '',
            message ? `*Message:* ${escapeMarkdown(message)}` : ''
        ].filter(Boolean).join('\n');

        statusEl.textContent = t('form.sending');
        statusEl.classList.add('text-stone-500');

        try {
            const result = await sendTelegramMessage(payload);
            if (result.ok) {
                statusEl.textContent = t('form.success');
                statusEl.className = 'mt-4 text-sm text-emerald-700';
                form.reset();
            } else {
                throw new Error(result.description || 'Telegram API error');
            }
        } catch (err) {
            console.error('Telegram send error', err);
            statusEl.textContent = `${t('form.error-prefix')} ${err.message || err}`;
            statusEl.className = 'mt-4 text-sm text-red-600';
        }
    });
}

export { initBookingForm };
