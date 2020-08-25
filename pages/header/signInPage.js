const { element, by } = require("protractor");

class SignIn {


    #emailInput = element(by.name("email"))
    #passWordInput = element(by.name("password"))
    #signInBtn = element(by.buttonText('LOGIN'))

    async enterEmail(email) {
        await this.#emailInput.sendKeys(email)
    }
    async enterPassword(password) {
        await this.#passWordInput.sendKeys(password)
    }
    async clickSignIn() {
        await this.#signInBtn.click()
    }
}
exports.SignIn = SignIn