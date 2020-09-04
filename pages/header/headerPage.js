const { element, by, browser } = require("protractor");

class Header {

    #signUpBtn = element(by.linkText("Sign up"))
    #loginBtn = element(by.linkText("Log in"))
    #signOut = element(by.linkText("Sign out"))
    async clickSignUp() {
        await this.#signUpBtn.click()
    }
    async clickLogin() {
        await this.#loginBtn.click()
    }
    async clickSignOut() {
        // await browser.sleep(5000)
        await this.#signOut.click()
    }
    async signOutIsDisplay() {
        expect(await this.#signOut.isDisplayed()).toBe(true);
        console.log(await this.#signOut.getText());
    }

}
exports.Header = Header
