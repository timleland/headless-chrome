const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const port = process.env.PORT || 8080;
var url = `https://m.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fm.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%2522f987mreacfsh1kgmya26xyan6rpjuv017l7vy31035lp8ulaq1%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dd0df9cb0-b64f-4ef9-9eb1-fd432eeff87b&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522f987mreacfsh1kgmya26xyan6rpjuv017l7vy31035lp8ulaq1%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=touch&locale=en_GB&refsrc=http%3A%2F%2Fwww.instagram.com%2Faccounts%2Flogin%2F&_rdr`

app.get('/', function(req, res) {
        (async() => {
            const browser = await puppeteer.launch({
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            });
            const page = await browser.newPage();
            await page.setUserAgent("Mozilla/5.0 (iPhone; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.25 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1")
            await page.setViewport({width: 980,height: 1915});
            await page.goto(url);
            await page.type("#m_login_email","abhishek7gg7@gmail.com")
            await page.type("#m_login_password",process.env.password)
            await page.click("#u_0_5")
            await page.waitForNavigation()
            await page.goto("https://www.instagram.com/")
            await page.waitForSelector("#react-root > section > main > article > div > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.MGdpg.CIRqI.IY_1_.aGBdT > button")
            await page.click("#react-root > section > main > article > div > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.MGdpg.CIRqI.IY_1_.aGBdT > button")    
            await page.waitForNavigation()
            await page.goto("https://www.instagram.com/direct/inbox")
            await page.waitFor(3000)
            var file = await page.screenshot();
            res.setHeader("content-type","image/jpeg");
            res.end(file)
        })();
});

app.listen(port)
