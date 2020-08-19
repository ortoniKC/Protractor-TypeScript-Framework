const { element, by } = require("protractor");

class Header {

    #signUpBtn = element(by.linkText("Sign up"))
    #loginBtn = element(by.linkText("Log in"))

    async clickSignUp() {
        await this.#signUpBtn.click()
    }

    async clickLogin() {
        await this.#loginBtn.click()
    }

}
