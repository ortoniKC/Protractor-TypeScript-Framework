import { browser } from "protractor"

describe('Read browser logs', () => {
    it('Logs', async () => {
        await browser.get("https://letcode.in/frame")
    })
    afterAll(async () => {
        let types = await browser.manage().logs().getAvailableLogTypes();
        console.log('Types: ' + types);
        let logs = await browser.manage().logs().get('browser')
        console.log(logs);


    })


})