const { Header } = require("../pages/header/headerPage")
const { SignUp } = require("../pages/header/signUpPage")
const { browser } = require("protractor")
const { Common } = require("../pages/common/common")

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
        await browser.get("http://localhost:4200/")
        await header.clickSignUp()
    })
    xit("TC001 To verify that user can sign up successfully", async () => {
        await signUp.enterName("Koushik")
        await signUp.enterEmail("koushik@letcode.in")
        await signUp.enterPassword("pass1234")
        await signUp.clickTermAndCondition()
        await signUp.clickSignUp()
        await header.signOutIsDisplay()
    })
    it("TC_002	To verify that sign up fail", async () => {
        await signUp.clickSignUp()
        await common.validateToast("Error: The email address is badly formatted.")
    })
    it("TC_003	To verify that sign up fail", async () => {
        await signUp.enterEmail("koushik@letcode.in")
        await signUp.clickSignUp()
        await common.validateToast("Error: The password must be 6 characters long or more.")
    })
    it("TC_004	To verify that sign up fail", async () => {
        await signUp.enterPassword("pass1234")
        await signUp.clickSignUp()
        await common.validateToast("Error: The email address is badly formatted.")
    })
})