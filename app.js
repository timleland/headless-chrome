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
            await page.setViewport({width: 1034,height: 576});
            await page.goto('https://seedr.cc/');
  await page.evaluate(function() {FBlogin()})
  await browser.on('targetcreated', async function() {
  var pgs = await browser.pages();
  if (pgs[2]) {
  await pgs[2].waitForSelector("#email");
  var pass = process.env.password;
  await pgs[2].evaluate(function(pass) {
      document.querySelector("#email").value="abhishek7gg7@gmail.com";
      document.querySelector("#pass").value=pass;
      document.querySelector("#u_0_0").click();
  },pass)
 await pgs[2].waitForSelector("button._42ft:nth-child(2)");
 await pgs[2].click("button._42ft:nth-child(2)");
  }
  else {return;}
  })
 await page.waitForNavigation();
            var file = await page.screenshot();
            res.setHeader("content-type","image/jpeg");
            res.end(file)
        })();
});

app.listen(port)
