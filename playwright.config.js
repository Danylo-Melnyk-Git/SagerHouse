const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    timeout: 30_000,
    expect: {
        timeout: 5_000
    },
    use: {
        baseURL: 'http://127.0.0.1:8000',
        trace: 'on-first-retry'
    },
    projects: [
        {
            name: 'mobile-chromium',
            use: {
                browserName: 'chromium',
                viewport: { width: 390, height: 844 },
                isMobile: true,
                hasTouch: true,
                deviceScaleFactor: 3
            }
        }
    ]
});