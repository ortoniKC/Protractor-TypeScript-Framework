import { element, by } from "protractor";
import { CommonFunctions } from "../../letBase/common/commonFunctions";
import { Common } from "../common/common";
const common = new Common();

export class SignUp extends CommonFunctions {

    private nameInput = element(by.id("name"))
    private emailInput = element(by.id("email"))
    private passwordInput = element(by.id("pass"))
    private TCCheckBox = element(by.id("agree"))
    private signUpBtn = element(by.buttonText("SIGN UP"))

    async enterName(name: string) {
        await this.clearAndType(this.nameInput, name);
    }
    async enterEmail(email: string) {
        await this.clearAndType(this.emailInput, email)
    }
    async enterPassword(pass: string) {
        await this.clearAndType(this.passwordInput, pass)
    }
    async clickTermAndCondition() {
        await this.click(this.TCCheckBox);
    }
    async clickSignUp() {
        await this.click(this.signUpBtn);
    }


}