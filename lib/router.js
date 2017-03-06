const Router = require('express').Router()
const ageConfirmationController = require('./controllers/age-confirmation')
const qrController = require('./controllers/qr')

Router.get('/thankyou', ageConfirmationController)

Router.get('/qr', qrController)

module.exports = Router
