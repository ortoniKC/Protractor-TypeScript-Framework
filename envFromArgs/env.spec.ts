import { browser, by, element, protractor } from "protractor";

describe('Interact with inputs', () => {

    beforeAll(async () => {
        await browser.get(browser.params.env)
        await browser.manage().window().maximize();
    })
    it('Enter first and last name', async () => {
        await browser.waitForAngular();
        await element(by.id("fullName"))
            .sendKeys("Koushik Chatterje");
    });
    it('Append and Tab', async () => {
        await element(by.id("join"))
            .sendKeys("person", protractor.Key.TAB);
    });
    it('Get the value', async () => {
        let getMe = element(by.id("getMe"))
        let value = await getMe.getAttribute("value");
        console.log(value);
    });
    it('Clear me', async () => {
        await element(by.id("clearMe")).clear();
    });
    it('Confirm that edit field is disabled', async () => {
        let isEditable = await element(by.id("noEdit"))
            .isEnabled()
        expect(isEditable).toBe(false)
    });
})