const Express = require('express')
const Path = require('path')
const app = Express()

const route = require('./router')

app.use(Express.static(Path.join(__dirname, '../dist')))

app.use(route)

module.exports = app
