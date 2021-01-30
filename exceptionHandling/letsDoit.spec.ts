import { browser, by, element } from "protractor";

describe('Learn Exception Handling', () => {

    xit('Traditional way of then & catch', async () => {
        browser.get('https://letcode.in/edit');

        element(by.id("fullNames")).sendKeys("koushik")
            .then(() => {
                console.log("passed");
            }).catch(e => {
                console.log(e);
            })

        element(by.id("join")).sendKeys(" human")
    });

    afterAll(async () => {
        await browser.sleep(5000)
    })
    it('With async/await', async () => {
        await browser.get('https://letcode.in/edit');
        try {
            await element(by.id("fullNames")).sendKeys("koushik")
        } catch (error) {
            console.log(error.name);
        }
        await element(by.id("join")).sendKeys(" human")
    })


})