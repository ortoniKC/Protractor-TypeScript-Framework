// const { element, by } = require("protractor");

import { element, by } from "protractor";
import { CommonFunctions } from "../../letBase/common/commonFunctions"

export class SignIn extends CommonFunctions {


    private emailInput = element(by.name("email"))
    private passWordInput = element(by.name("password"))
    private signInBtn = element(by.buttonText('LOGIN'))
    async enterEmail(email: string) {
        await this.clearAndType(this.emailInput, email);
    }
    async enterPassword(password: string) {
        await this.clearAndType(this.passWordInput, password);
    }
    async clickSignIn() {
        await this.click(this.signInBtn);
    }
}
// exports.SignIn = SignIn