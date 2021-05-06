const puppeteer = require('puppeteer');

export async function submitForm(page) {
    await page.waitForSelector('#root > div.container > div > div > form ');

    // set the input to some id 
    await page.$eval('#text-input', el => el.value = '10.1177/0956797619831964');

    // change the paper source
    await page.$eval("#root > div.container > div > div > form > p:nth-child(3) > label > input[type=radio]", elem => { elem.click(); elem.click(); });
    // click the submit button
    await page.click('#root > div.container > div > div > form > input.btn.black.white-text');

    // wait for the component to disappear
    await page.waitForSelector('#root > div.container > div > div > form ', { hidden: true });
}

export async function openMainPage(browser) {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    return page;
}

describe('HelperFunctions ',() => {
    it('can submitForm', async () => {
        let browser = await puppeteer.launch({
            headless: true,
            args: [
                '--window-size=1920,1080',
            ], defaultViewport: null
        })
        const page = await openMainPage(browser);

        // wait for component to render
        await submitForm(page);
        await page.close();
    })
})