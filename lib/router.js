const Router = require('express').Router()

Router.get('/tester', (req, res) => {
  console.log('test');
}

module.exports = Router
