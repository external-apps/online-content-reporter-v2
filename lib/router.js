const Router = require('express').Router()
const jwt = require('express-jwt')

const ageConfirmationController = require('./controllers/age-confirmation')
const qrController = require('./controllers/qr')
const sendEmail = require('./controllers/send-email')

Router.get('/verify-age', ageConfirmationController)
Router.get('/get-qr', qrController)
Router.post('/email', jwt({ secret: process.env.JWT_SECRET }), sendEmail)

module.exports = Router
