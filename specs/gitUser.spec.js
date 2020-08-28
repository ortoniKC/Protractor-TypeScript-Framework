const { browser, element, by } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe("Read data from JSON", () => {
    let data;
    beforeAll(() => {
        data = require("../gitdata.json")
    })

    it("Find Git user", async () => {
        await browser.get("http://localhost:4200/elements")
        await element(by.name("username")).sendKeys(data.gitName, protractor.Key.ENTER);
    })
})