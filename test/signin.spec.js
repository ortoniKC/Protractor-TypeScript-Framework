const { Header } = require("../pages/header/headerPage")
const { browser } = require("protractor")
const { Common } = require("../pages/common/common")
const { SignIn } = require("../pages/header/signInPage")
const testData = require("../test-data/userInfo.json")

// header
const header = new Header()

// sign in
const signin = new SignIn()

// common
const common = new Common()

describe("Login - LetCode", () => {

    beforeAll(async () => {
        await browser.manage().window().maximize()
        await browser.manage().timeouts().implicitlyWait(10000)
    })
    beforeEach(async () => {
        await browser.get(browser.params.env)
        await header.clickLogin()
    })

    it("TC_005	To verify that user can sign in successfully", async () => {
        await signin.enterEmail(testData.login.email)
        await signin.enterPassword(testData.login.password)
        await signin.clickSignIn()
        await common.validateToast(testData.login.welcome_message)
        // await browser.sleep(5000)
        await header.signOutIsDisplay()
        await header.clickSignOut()
    })

    it("TC_006	To verify that login fails", async () => {
        await signin.enterEmail(testData.login.email)
        await signin.enterPassword(testData.login.wrong_password)
        await signin.clickSignIn()
        await common.validateToast(testData.login.invalid_password)
    })

    it("TC_007	To verify that login fails", async () => {
        await signin.enterEmail("koushik@let")
        await signin.enterPassword(testData.login.password)
        await signin.clickSignIn()
        await common.validateToast(testData.login.invalid_email)
    })

})