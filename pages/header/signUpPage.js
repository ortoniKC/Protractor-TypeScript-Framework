const { element, by } = require("protractor");

class SignUp {

    nameInput = element(by.id("name"))
    emailInput = element(by.id("email"))
    passwordInput = element(by.id("pass"))
    TCCheckBox = element(by.id("agree"))
    signUpBtn = element(by.buttonText("SIGN UP"))
}