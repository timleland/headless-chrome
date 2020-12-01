# headless-chrome
Headless chrome using Puppeteer that can run on Heroku

Blog Post: https://timleland.com/headless-chrome-on-heroku/

## Actions taken to install this on heroku

```
$ heroku add chablis-page-snapper
$ heroku buildpacks:add https://github.com/jontewks/puppeteer-heroku-buildpack
$ heroku buildpacks:add heroku/nodejs
$ echo 'web: node app.js' > Procfile (this is now committed)
$ git push heroku master
```
