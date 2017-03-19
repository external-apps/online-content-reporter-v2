const Router = require('express').Router()
const ageConfirmationController = require('./controllers/age-confirmation')
const qrController = require('./controllers/qr')
const sendEmail = require('./controllers/send-email')

Router.get('/thankyou', ageConfirmationController)
Router.get('/get-qr', qrController)
Router.post('/email', sendEmail)

module.exports = Router
