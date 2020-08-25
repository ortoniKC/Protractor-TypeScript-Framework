const { $, browser } = require("protractor");

class Common {

    #toast = $("div.toast-message")

    async validateToast(message) {
        await browser.sleep(2000)
        // TODO expectedCondtion
        expect(await this.#toast.isDisplayed()).toBe(true)
        expect(await this.#toast.getText()).toBe(message)
    }

}
exports.Common = Common;