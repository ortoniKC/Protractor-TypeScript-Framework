const { element, by } = require("protractor");

class SignUp {

    #nameInput = element(by.id("name"))
    #emailInput = element(by.id("email"))
    #passwordInput = element(by.id("pass"))
    #TCCheckBox = element(by.id("agree"))
    #signUpBtn = element(by.buttonText("SIGN UP"))


    async enterName(name) {
        await this.#nameInput.sendKeys(name)
    }
    async enterEmail(email) {
        await this.#emailInput.sendKeys(email)
    }
    async enterPassword(pass) {
        await this.#passwordInput.sendKeys(pass)
    }
    async clickTermAndCondition() {
        await this.#TCCheckBox.click()
    }
    async clickSignUp() {
        await this.#signUpBtn.click()
    }


}
exports.SignUp = SignUp