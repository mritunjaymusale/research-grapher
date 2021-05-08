const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });
const { openMainPage, submitForm } = require('./HelperFunctions');


describe('ResearchGrapher Component ', () => {
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


    it('should show Graph elements after form submit', async () => {
        const page = await openMainPage(browser);

        // submit the main page form
        await submitForm(page);

        // wait for row to render
        await page.waitForSelector('#root > div.row');

        // will check if graph is loaded or not
        expect((await page.$('#root > div.row > div:nth-child(1) > div > div')) !== null).toEqual(true)
        // will check if 'recently loaded paper' is loaded or not 
        expect((await page.$('#root > div.row > div:nth-child(2) > div:nth-child(1)')) !== null).toEqual(true)
        // will chec if 'preview' is loaded or not
        expect((await page.$('#root > div.row > div:nth-child(2) > div:nth-child(2)')) !== null).toEqual(true)

        const UserInputComponent = await page.$("#root > div.row");
        const graph_image = await UserInputComponent.screenshot();
        expect(graph_image).toMatchImageSnapshot({
            comparisonMethod: 'ssim',
            failureThreshold: '0.20',
            failureThresholdType: 'percent'
        });
    });
})


