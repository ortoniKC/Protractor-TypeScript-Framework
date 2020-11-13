import { browser, by, element } from "protractor";

describe("Learn Angular Locators", () => {

    // xit("1. By ButtonText", async () => {
    //     await element(by.buttonText('SIGN UP'))
    //     await element(by.partialButtonText('SIGN'))
    // })

    // it("2. By ng-model - Angular JS", async () => {
    //     await browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust")
    //     await element(by.model('fName')).sendKeys("koushik")
    // })
    // it("3. By ng-model - Angular", async () => {
    //     await browser.get("https://letcode.in/signup")
    //     await element(by.model("name")).sendKeys("koushik")
    // })


    // it("4. By exactBinding or bindings", async () => {
    //     await browser.get("https://letcode.in/calendar")
    //     await element(by.xpath("(//button[text()='Today'])[1]")).click();
    //     let txt = await element(by.exactBinding('timer')).getText();
    //     console.log('Timer is: ' + txt);
    // })



    it("5. By repeater", async () => {
        await browser.get("http://cafetownsend-angular-rails.herokuapp.com/login");
        await element(by.model("user.name")).sendKeys("Luke");
        await element(by.model("user.password")).sendKeys("Skywalker")
        await element(by.buttonText("Login")).click();
        let emp = element.all(by.repeater("employee in employees"))
        await emp.each(async emp => {
            console.log(await emp.getText());
        })
        // console.log(await emp.getText());
    })

})