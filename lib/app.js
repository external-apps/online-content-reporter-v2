const Express = require('express')
const Path = require('path')
const router = require('./router')
const app = Express()

app.use(Express.static(Path.join(__dirname, '../dist')))
app.use(Express.static(Path.join(__dirname, '../public')))
app.use(function(req, res, next) {
  GLOBAL.navigator = {
    userAgent: req.headers['user-agent']
  }
  next();
})
app.use(router)

module.exports = app
