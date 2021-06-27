'use strict';

const { firefox } = require('playwright');

const host = 'my-cluster.cloud.aerokube.com';
const username = 'test';
const password = 'test-password';

(async () => {
    const browser = await firefox.connect({ timeout: 0, wsEndpoint: `ws://${username}:${password}@${host}/playwright/firefox/playwright-1.12.2` });
    const page = await browser.newPage();
    await page.goto('https://aerokube.com/moon/');
    await page.screenshot({ path: `screenshot.png` });
    await browser.close();
})();