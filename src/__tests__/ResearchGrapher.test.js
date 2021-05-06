const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });
const { openMainPage, submitForm } = require('./HelperFunctions');


describe('ResearchGrapher Component ', () => {
    let browser;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
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
        // wait for component to render
        await submitForm(page);


    });
})


