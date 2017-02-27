const Express = require('express')
const Path = require('path')
const app = Express()

// const route = require('router');

app.use(Express.static(Path.join(__dirname, '../public')))

// app.use(router);

module.exports = app
