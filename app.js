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
            await page.setViewport({width: 1034,height: 576});
            await page.goto("https://www.instagram.com/accounts/login/");
            await page.waitForSelector(".yWX7d")
            await page.click(".yWX7d")
            await page.waitForNavigation()
            await page.type("#m_login_email","abhishek7gg7@gmail.com")
            await page.type(".bt",process.env.password)
            await page.click('input.n')
            await page.waitForNavigation()
            await page.click("input.u:nth-child(1)")
            await page.waitForNavigation()
            var file = await page.screenshot();
            res.setHeader("content-type","image/jpeg");
            res.end(file)
        })();
});

app.listen(port)
