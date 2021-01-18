import { browser, by, element } from "protractor";
var faker = require('faker');
describe('Sign up', () => {

    it('Test data generation using Faker API', async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://nest.testbirds.com/home/tester');
        await browser.manage().timeouts().implicitlyWait(30000);
        const fName = faker.name.firstName();
        await element(by.name("firstname")).sendKeys(fName);
        await element(by.name("lastname")).sendKeys(faker.name.lastName());
        await element(by.xpath("(//input[@name='username'])[2]")).sendKeys(faker.random.uuid());
        await element(by.name("email")).sendKeys(faker.internet.email());
        await element(by.name("plainPassword")).sendKeys(faker.internet.password());
        // await element(by.id("country")).sendKeys(faker.address.country())
    })
})