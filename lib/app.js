const Express = require('express')
const Path = require('path')
const app = Express()

app.use(Express.static(Path.join(__dirname, '../dist')))

module.exports = app
