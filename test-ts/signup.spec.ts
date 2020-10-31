import { browser } from "protractor"
import { Common } from "../pages-ts/common/common";
import { Header } from "../pages-ts/header/headerPage";
import { SignUp } from "../pages-ts/header/signUpPage";

// import
import * as testData from "../test-data/userInfo.json";
const header = new Header();
const signUp = new SignUp();
const common = new Common();

describe("Sign Up - LetCode", () => {

    beforeAll(async () => {
        await browser.manage().window().maximize()
        await browser.manage().timeouts().implicitlyWait(30000)
    })
    beforeEach(async () => {
        await browser.get("http://letcode.in")
        await header.clickSignUp()
    })
    it("TC001 To verify that user can sign up successfully", async () => {
        let name = testData.signup.name;
        await signUp.enterName(name)
        await signUp.enterEmail(testData.signup.email)
        await signUp.enterPassword(testData.signup.password)
        await signUp.clickTermAndCondition()
        await signUp.clickSignUp()
        // toast
        await common.validateToast(`You have logged in ${name}`)
        await header.signOutIsDisplay();
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