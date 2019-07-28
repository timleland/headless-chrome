const express = require('express');
const puppeteer = require("puppeteer");
var fs = require("fs");
const app = express();

app.get('/ss', function(req, res) {
  res.sendFile('/app/ss.png');
});

app.get('/', async function(req, res) {
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox']
    });
    var url = fs.readFileSync('/app/url.txt').toString();
    const page = await browser.newPage();
    await page.setUserAgent(req.headers["user-agent"]);
    var wid = req.query.wid?parseInt(req.query.wid):412;
    var hit = req.query.hit?parseInt(req.query.hit):805;
    await page.setViewport({width: wid, height: hit});
    await page.goto(url);
    await page.screenshot({path: '/app/ss.png'})
    res.redirect(301,"https://awto.js.org/hoo")
  }
  catch (error) {
    res.end(error.message)
  }
});

app.listen(process.env.PORT);
