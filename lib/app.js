const Express = require('express')
const Path = require('path')
const router = require('./router')
const app = Express()
const error = require('./middleware/errors')
var bodyParser = require('body-parser')

app.use(Express.static(Path.join(__dirname, '../dist')))
app.use(Express.static(Path.join(__dirname, '../public')))
app.use((req, res, next) => {
  GLOBAL.navigator = {
    userAgent: req.headers['MyTheme']
  }
  next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(router)
/*app.use(error.catch404Error)
app.use(error.handleError)*/

module.exports = app
