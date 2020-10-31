import { $, browser } from "protractor";
import { CommonFunctions } from "../../letBase/common/commonFunctions";

export class Common extends CommonFunctions {

    private toast = $("div.toast-message")

    async validateToast(message: string) {
        await this.assertTrue(this.toast)
        await this.assertText(this.toast, message);
        await this.inVisibilityOf(this.toast)

        // let maxTime = 10000;
        // await browser.sleep(2000)
        // await browser.wait(ec.visibilityOf(this.#toast), maxTime)
        // expect(await this.#toast.isDisplayed()).toBe(true)
        // expect(await this.toast.getText()).toBe(message)
        // await browser.wait(ec.invisibilityOf(this.toast), maxTime);
    }

}
// exports.Common = Common;