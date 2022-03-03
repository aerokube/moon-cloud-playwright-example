'use strict';

const { firefox } = require('playwright');

const host = 'my-company.cloud.aerokube.com';
const username = 'my-company';
const password = 'some-password';

(async () => {
    const browser = await firefox.connect({ timeout: 0, wsEndpoint: `wss://${username}:${password}@${host}/playwright/firefox/playwright-1.19.2?headless=false&enableVideo=true&videoName=mytestvideo.mp4` });
    const page = await browser.newPage();
    await page.goto('https://aerokube.com/moon/');
    await page.screenshot({ path: `screenshot.png` });
    await browser.close();
})();
