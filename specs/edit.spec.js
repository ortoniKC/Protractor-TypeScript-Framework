const { browser, $ } = require("protractor")
const fs = require("fs")
describe('Read data', () => {

    it('Read the data & Store it in JSON', async () => {
        await browser.get("http://localhost:4200/edit")
        let gitName = await $("#getme").getAttribute("value")
        console.log(gitName);
        let data =
            { "gitName": gitName }

        fs.writeFileSync("gitdata.json", JSON.stringify(data), (err) => {
            if (err) {
                console.log(err);
            }
        })

    })
})