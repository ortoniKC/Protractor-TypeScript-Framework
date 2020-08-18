const { element, by } = require("protractor");

class Header {

    signUpBtn = element(by.linkText("Sign up"))
    loginBtn = element(by.linkText("Log in"))
}
