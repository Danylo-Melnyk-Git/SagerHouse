const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

async function waitForCalendar(page) {
    const calendar = page.locator('#calendar-widget .flatpickr-calendar');
    await expect(calendar).toBeVisible();
    return calendar;
}

async function pickMobileDateRange(page) {
    await waitForCalendar(page);

    const enabledDays = page.locator('#calendar-widget .flatpickr-day:not(.flatpickr-disabled)');
    await enabledDays.nth(0).click();
    await enabledDays.nth(1).click();
}

test('hero image keeps a landscape ratio on mobile', async ({ page }) => {
    const heroImage = page.locator('.hero-image-container');
    await expect(heroImage).toBeVisible();

    const box = await heroImage.boundingBox();
    expect(box).not.toBeNull();
    expect(box.width).toBeGreaterThan(box.height);
});

test('mobile menu has no duplicate theme toggle and no default blue links', async ({ page }) => {
    await page.locator('#mobile-menu-button').click();
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toBeVisible();

    await expect(page.locator('#mobile-menu [data-theme-toggle]')).toHaveCount(0);
    await expect(page.locator('#mobile-menu .mobile-menu-book-btn')).toHaveCount(0);

    const firstLink = page.locator('#mobile-menu .mobile-menu-link').first();
    const linkColor = await firstLink.evaluate((element) => getComputedStyle(element).color);
    expect(linkColor).not.toBe('rgb(0, 0, 238)');

    const menuBox = await mobileMenu.boundingBox();
    const viewportWidth = page.viewportSize().width;
    expect(menuBox.x + menuBox.width).toBeGreaterThanOrEqual(viewportWidth - 16);
});

test('about section shows only one paragraph on mobile', async ({ page }) => {
    const paragraphs = page.locator('.about-copy p');
    await expect(paragraphs).toHaveCount(3);
    await expect(paragraphs.nth(0)).toBeVisible();
    await expect(paragraphs.nth(1)).toBeHidden();
    await expect(paragraphs.nth(2)).toBeHidden();
});

test('location map is hidden on mobile', async ({ page }) => {
    await expect(page.locator('.location-map-card')).toBeHidden();
});

test('calendar fits within the availability panel on mobile', async ({ page }) => {
    const availabilityPanel = page.locator('.availability-panel');
    const calendar = await waitForCalendar(page);
    const reserveButton = page.locator('#calendar-to-reserve');

    await expect(availabilityPanel).toBeVisible();
    await expect(reserveButton).toBeVisible();

    const panelBox = await availabilityPanel.boundingBox();
    const calendarBox = await calendar.boundingBox();
    const buttonBox = await reserveButton.boundingBox();

    expect(panelBox).not.toBeNull();
    expect(calendarBox).not.toBeNull();
    expect(buttonBox).not.toBeNull();

    expect(calendarBox.width).toBeLessThanOrEqual(panelBox.width);
    expect(calendarBox.x).toBeGreaterThanOrEqual(panelBox.x - 1);
    expect(calendarBox.x + calendarBox.width).toBeLessThanOrEqual(panelBox.x + panelBox.width + 1);
    expect(buttonBox.width).toBeLessThanOrEqual(panelBox.width);
});

test('mobile menu navigation closes the panel and jumps to availability', async ({ page }) => {
    await page.locator('#mobile-menu-button').click();
    await expect(page.locator('#mobile-menu')).toBeVisible();

    await page.locator('#mobile-menu a[href="#availability"]').click();

    await expect(page.locator('#mobile-menu')).toBeHidden();
    await expect(page).toHaveURL(/#availability$/);
});

test('selecting a date range syncs the calendar summary and booking inputs', async ({ page }) => {
    await pickMobileDateRange(page);

    await expect(page.locator('#calendar-checkin-value')).not.toHaveText('-');
    await expect(page.locator('#calendar-checkout-value')).not.toHaveText('-');
    await expect(page.locator('#calendar-nights-value')).toHaveText('1');
    await expect(page.locator('#calendar-to-reserve')).toBeEnabled();
    await expect(page.locator('#check-in')).not.toHaveValue('');
    await expect(page.locator('#check-out')).not.toHaveValue('');
});

test('calendar button scrolls to the booking form and focuses check-in', async ({ page }) => {
    await pickMobileDateRange(page);
    await page.locator('#calendar-to-reserve').click();

    await expect(page.locator('#check-in')).toBeFocused();

    const contactTop = await page.locator('#contact').evaluate((element) => {
        return element.getBoundingClientRect().top;
    });

    expect(contactTop).toBeLessThan(140);
});