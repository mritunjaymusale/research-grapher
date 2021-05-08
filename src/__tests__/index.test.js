const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

describe('System', () => {

    let browser;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--window-size=1920,1080',
            ], defaultViewport: null,
        })
    });
    afterAll(async () => {
        await browser.close();
    });
    it('should show mainpage', async () => {
        const page = await browser.newPage();
        await page.goto('http://localhost:3000');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
            comparisonMethod: 'ssim',
            failureThreshold: '0.10',
            failureThresholdType: 'percent'
        });
    });

});