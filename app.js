const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhonex = devices['iPhone X'];
const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
        (async() => {
            const browser = await puppeteer.launch({
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            });
            const page = await browser.newPage();
            await page.emulate(iPhonex);
            //await page.setViewport({width: 1034,height: 576});
            await page.goto('https://www.instagram.com/accounts/login/');
            await page.waitForSelector('input[name="username"]');
            await page.type('input[name="username"]', 'sasta_abbie');
            await page.type('input[name="password"]', process.env.password);
            await page.click('button[type="submit"]');
            await page.waitForNavigation()
            var file = await page.screenshot();
            res.setHeader("content-type","image/jpeg");
            res.end(file)
        })();
});

app.listen(port)
