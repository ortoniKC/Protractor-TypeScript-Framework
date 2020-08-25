const { Header } = require("../pages/header/headerPage")
const { browser } = require("protractor")
const { Common } = require("../pages/common/common")
const { SignIn } = require("../pages/header/signInPage")

// header
const header = new Header()

// sign in
const signin = new SignIn()

// common
const common = new Common()

describe("Sign Up - LetCode", () => {

    beforeAll(async () => {
        await browser.manage().window().maximize()
        await browser.manage().timeouts().implicitlyWait(30000)
    })
    beforeEach(async () => {
        await browser.get("http://localhost:4200/")
        await header.clickLogin()
    })

    it("TC_005	To verify that user can sign in successfully", async () => {
        await signin.enterEmail("koushik@letcode.in")
        await signin.enterPassword("pass1234")
        await signin.clickSignIn()
        await common.validateToast("Welcome Koushik")
        await browser.sleep(5000)
        await header.signOutIsDisplay()
        await header.clickSignOut()
    })

    it("TC_006	To verify that login fails", async () => {
        await signin.enterEmail("koushik@letcode.in")
        await signin.enterPassword("pas")
        await signin.clickSignIn()
        await common.validateToast("Error: The password is invalid or the user does not have a password.")

    })

    it("TC_007	To verify that login fails", async () => {
        await signin.enterEmail("koushik@let")
        await signin.enterPassword("pass1234")
        await signin.clickSignIn()
        await common.validateToast("Error: There is no user record corresponding to this identifier. The user may have been deleted.")
    })

})