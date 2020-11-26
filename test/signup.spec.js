const { Header } = require("../pages/header/headerPage")
const { SignUp } = require("../pages/header/signUpPage")
const { browser } = require("protractor")
const { Common } = require("../pages/common/common")

// import
const testData = require("../test-data/userInfo.json")

// header
const header = new Header()

// sign up
const signUp = new SignUp()
// common
const common = new Common()

describe("Sign Up - LetCode", () => {

    beforeAll(async () => {
        await browser.manage().window().maximize()
        await browser.manage().timeouts().implicitlyWait(30000)
    })
    beforeEach(async () => {
        await browser.get(browser.params.env)
        await header.clickSignUp()
    })
    it("TC001 To verify that user can sign up successfully", async () => {
        await signUp.enterName(testData.signup.name)
        await signUp.enterEmail(testData.signup.email)
        await signUp.enterPassword(testData.signup.password)
        await signUp.clickTermAndCondition()
        await signUp.clickSignUp()
        await header.signOutIsDisplay()
        await header.clickSignOut()
    })
    it("TC_002	To verify that sign up fail", async () => {
        await signUp.clickSignUp()
        await common.validateToast(testData.signup.invalid_email)
    })
    it("TC_003	To verify that sign up fail", async () => {
        await signUp.enterEmail(testData.signup.email)
        await signUp.clickSignUp()
        await common.validateToast(testData.signup.invalid_password)
    })
    it("TC_004	To verify that sign up fail", async () => {
        await signUp.enterPassword(testData.signup.password)
        await signUp.clickSignUp()
        await common.validateToast(testData.signup.invalid_email)
    })
})