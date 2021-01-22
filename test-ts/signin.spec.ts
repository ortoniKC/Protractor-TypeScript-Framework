import { browser } from "protractor";
import { Common } from "../pages-ts/common/common";
import { Header } from "../pages-ts/header/headerPage";
import { SignIn } from "../pages-ts/header/signInPage";
import * as testData from "../test-data/userInfo.json";
const header = new Header();
const common = new Common();
const signin = new SignIn();

declare const allure: any;

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
        await allure.createStep("Enter email", async () => {
            await signin.enterEmail(testData.login.email);
            await attachScreenshot('Enter email');
        })();
        await allure.createStep("Enter password", async () => {
            await signin.enterPassword(testData.login.password);
            await attachScreenshot('b');
        })();
        await allure.createStep("click sign in", async () => {
            await signin.clickSignIn()
            await common.validateToast(testData.login.welcome_message);
            await attachScreenshot('c');
        })();
        await allure.createStep("Sign out", async () => {
            await header.signOutIsDisplay()
            await header.clickSignOut();
            await attachScreenshot('last');
        })();
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

async function attachScreenshot(filename: string) {
    let png = await browser.takeScreenshot();
    await allure.createAttachment(filename, new Buffer(png, 'base64'));
}
