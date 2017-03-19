const Express = require('express')
const Path = require('path')
const router = require('./router')
const app = Express()
var bodyParser = require('body-parser')

app.use(Express.static(Path.join(__dirname, '../dist')))
app.use('/assets', Express.static(Path.join(__dirname, '../public')))

app.use((req, res, next) => {
  GLOBAL.navigator = {
    userAgent: req.headers['MyTheme']
  }
  next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(router)
app.get('*', (req, res) => {
  res.sendfile('./dist/index.html')
})

module.exports = app
