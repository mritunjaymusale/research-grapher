const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
const { openMainPage, submitForm } = require('./HelperFunctions');

expect.extend({ toMatchImageSnapshot });


describe('UserInput.js ', () => {
    let browser;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--window-size=1920,1080',
            ], defaultViewport: null
        })
    });


    afterAll(async () => {
        await browser.close();
    });

    it('should render User Input Component', async () => {
        const page = await openMainPage(browser);

        const UserInputComponent = await page.$("#root > div.container > div");
        const image = await UserInputComponent.screenshot();
        expect(image).toMatchImageSnapshot({
            comparisonMethod: 'ssim',
            failureThreshold: '0.10',
            failureThresholdType: 'percent'
        });
        await page.close();
    });

    it('should take user input', async () => {
        const page = await openMainPage(browser);
        await page.$eval('#text-input', el => el.value = 'Sample_Text');
        const text = await page.$eval('#text-input', el => el.value);
        expect(text).toEqual('Sample_Text');
        await page.close();
    });

    it('has null as default paper source', async () => {
        const page = await openMainPage(browser);
        const element = await page.$("input[name='paperType']:checked");
        expect(element).toBe(null);
        await page.close();
    });

    it('can set different paper source', async () => {
        const page = await openMainPage(browser);
        await page.waitForSelector('#root > div.container > div > div > form ');
        await page.$eval("#root > div.container > div > div > form > p:nth-child(4) > label > input[type=radio]", elem => { elem.click(); elem.click() });
        await page.waitForTimeout(2000);
        const UserInputComponent = await page.$("#root > div.container > div");
        const image = await UserInputComponent.screenshot();
        expect(image).toMatchImageSnapshot({
            comparisonMethod: 'ssim',
            failureThreshold: '0.10',
            failureThresholdType: 'percent'
        });
        await page.close();
    });

    it('should submit form', async () => {
        const page = await openMainPage(browser);

        // wait for component to render
        await submitForm(page);
        await page.close();
    });

})

