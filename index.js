'use strict';

const { firefox } = require('playwright');

const host = 'automation-remarks.cloud.aerokube.com';
const username = 'automation-remarks';
const password = 'S7sOsXQfArTu3yGP9jaBvWz4';

(async () => {
    const browser = await firefox.connect({ timeout: 0, wsEndpoint: `wss://${username}:${password}@${host}/playwright/firefox/playwright-1.15.0` });
    const page = await browser.newPage();
    await page.goto('https://aerokube.com/moon/');
    await page.screenshot({ path: `screenshot.png` });
    await browser.close();
})();
