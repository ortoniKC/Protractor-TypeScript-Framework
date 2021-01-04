import moment from "moment";
import { $, browser, by, element } from "protractor";

describe('Calendar', () => {

    beforeEach(async () => {
        await browser.get('https://letcode.in/calendar');
        await browser.manage().timeouts().implicitlyWait(10000);
    });
    afterEach(async () => {
        await browser.sleep(3000);
    })

    // it('Select tomorrow date', async () => {
    //     let tomo = moment().add(1, 'day').format('D');
    //     await element(by.buttonText(tomo)).click();
    // });

    // it('Select next week date', async () => {
    //     let tomo = moment().add(7, 'day').format('D');
    //     await element(by.buttonText(tomo)).click();
    // });
    // it('Select next month date', async () => {
    //     let nextMonth = moment().add(30, 'day').format('D MMM');
    //     let date = nextMonth.split(' ')[0]
    //     let month = nextMonth.split(' ')[1]
    //     await $('div.datepicker-nav-month').click()
    //     await element(by.xpath(`//div[text()='${month}']`)).click();
    //     await element(by.buttonText(date)).click();
    // });

    it('Select previous 20 days & next 10 days', async () => {
        let nextMonth = moment().add(-20, 'day').format('D MMM');
        let date = nextMonth.split(' ')[0]
        let month = nextMonth.split(' ')[1]
        await $('input.is-datetimepicker-range').click()
        await element(by.xpath("(//div[@class='datepicker-nav-month'])[2]")).click();
        await element.all(by.xpath(`//div[text()='${month}']`)).last().click();
        await element.all(by.buttonText(date)).last().click();

        nextMonth = moment().add(10, 'day').format('D MMM');
        date = nextMonth.split(' ')[0]
        month = nextMonth.split(' ')[1]
        await element(by.xpath("(//div[@class='datepicker-nav-month'])[2]")).click();
        await element.all(by.xpath(`//div[text()='${month}']`)).last().click();
        await element.all(by.buttonText(date)).last().click();
    })

})