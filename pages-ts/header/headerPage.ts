import { element, by } from "protractor";
import { CommonFunctions } from "../../letBase/common/commonFunctions"


export class Header extends CommonFunctions {

    private signUpBtn = element(by.linkText("Sign up"))
    private loginBtn = element(by.linkText("Log in"))
    private signOut = element(by.linkText("Sign out"))

    async clickSignUp() {
        // await this.signUpBtn.click()
        await this.click(this.signUpBtn);
    }
    async clickLogin() {
        // await this.loginBtn.click()
        await this.click(this.loginBtn);
    }
    async clickSignOut() {
        // await browser.sleep(5000)
        await this.click(this.signOut);
    }
    async signOutIsDisplay() {
        // expect(await this.signOut.isDisplayed()).toBe(true);
        await this.assertTrue(this.signOut);
        console.log(await this.signOut.getText());

    }

}
