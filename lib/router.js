const Router = require('express').Router()

Router.get('/', (req, res) => {
  res.send('Hello')
})

module.exports = Router
