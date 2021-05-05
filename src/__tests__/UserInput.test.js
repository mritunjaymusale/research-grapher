const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

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
            failureThreshold: '0.10',
            failureThresholdType: 'percent'
        });
    });

    it('should take user input', async () => {
        const page = await openMainPage(browser);
        await page.$eval('#text-input', el => el.value = 'Sample_Text');
        const text = await page.$eval('#text-input', el => el.value);
        expect(text).toEqual('Sample_Text');
    });

    it('has Arxiv as default paper source', async () => {
        const page = await openMainPage(browser);
        const element = await page.$("input[name='paperType']:checked");
        const text = await page.evaluate(element => element.value, element);
        expect(text).toBe('arxiv');
    });

    it('can set different paper source', async () => {
        const page = await openMainPage(browser);
        await page.waitForSelector('#root > div.container > div > div > form ');
        await page.$eval("#root > div.container > div > div > form > p:nth-child(4) > label > input[type=radio]", elem => { elem.click(); elem.click() });
        await page.waitForTimeout(2000);
        const UserInputComponent = await page.$("#root > div.container > div");
        const image = await UserInputComponent.screenshot();
        expect(image).toMatchImageSnapshot({
            failureThreshold: '0.10',
            failureThresholdType: 'percent'
        });
    });

    it('should submit form', async () => {
        const page = await openMainPage(browser);

        // wait for component to render
        await page.waitForSelector('#root > div.container > div > div > form ');

        // set the input to some id 
        await page.$eval('#text-input', el => el.value = '10.1177/0956797619831964');

        // change the paper source
        await page.$eval("#root > div.container > div > div > form > p:nth-child(3) > label > input[type=radio]", elem => { elem.click(); elem.click() });
        // click the submit button
        await page.click('#root > div.container > div > div > form > input.btn.black.white-text');

        // wait for the component to disappear
        await page.waitForSelector('#root > div.container > div > div > form ', { hidden: true });
    })

})

async function openMainPage(browser) {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    return page;
}
