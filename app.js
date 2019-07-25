const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
        (async() => {
            const browser = await puppeteer.launch({
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            });
            const page = await browser.newPage();
            await page.goto('https://m.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fm.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%2522aiw8bqhw4lpo1rcaxqytnki8bcl4rww5utj3qs9gt7l1vcp8y1%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Ded357b23-64d0-4e95-8d74-9a62b17b1075&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522aiw8bqhw4lpo1rcaxqytnki8bcl4rww5utj3qs9gt7l1vcp8y1%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=touch&locale=en_GB&refsrc=http%3A%2F%2Fwww.instagram.com%2F&_rdr');
            await page.type("#m_login_email","abhishek7gg7@gmail.com")
            await page.type("#m_login_password",process.env.password)
            await page.click('#u_0_5')
            await page.waitForNavigation()
            await page.click("#root > div._7om2._62ns > div > form > div._62nx > button._54k8._52jg._56bs._26vk._62ny._56bu")
            await page.waitForSelector("#react-root > section > main > article > div > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.MGdpg.CIRqI.IY_1_.aGBdT > button")
            await page.click("#react-root > section > main > article > div > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.MGdpg.CIRqI.IY_1_.aGBdT > button")
            await page.waitFor(1000)
            var file = await page.screenshot();
            res.setHeader("content-type","image/jpeg");
            res.end(file)
        })();
});

app.listen(port)
