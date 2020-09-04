const { $, browser } = require("protractor");

class Common {

    #toast = $("div.toast-message")

    async validateToast(message) {
        let maxTime = 10000;
        // await browser.sleep(2000)
        // TODO expectedCondtion
        let ec = browser.ExpectedConditions;
        await browser.wait(ec.visibilityOf(this.#toast), maxTime)
        expect(await this.#toast.isDisplayed()).toBe(true)
        expect(await this.#toast.getText()).toBe(message)
        await browser.wait(ec.invisibilityOf(this.#toast), maxTime);
    }

}
exports.Common = Common;