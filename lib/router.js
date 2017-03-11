const Router = require('express').Router()
const ageConfirmationController = require('./controllers/age-confirmation')
const qrController = require('./controllers/qr')
var nodemailer = require('nodemailer')
var mg = require('nodemailer-mailgun-transport')
var env = require('env2')('./config.env')

Router.get('/thankyou', ageConfirmationController)

Router.get('/qr', qrController)

Router.post('/email', function (req, res) {
  //  var user_id = req.body.id;
  //  var token = req.body.token;
  //  var geo = req.body.geo;
  // This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
  console.log(req.method)
  console.log(req.body)
  console.log(req.headers)
  var auth = {
    auth: {
      api_key: process.env.API_KEY,
      domain: process.env.DOMAIN
    }
  }

  var nodemailerMailgun = nodemailer.createTransport(mg(auth))

  nodemailerMailgun.sendMail({
    from: 'postmaster@childline-yoti.com',
    to: 'childline.report.content@gmail.com', // An array if you have multiple recipients.
    subject: 'Report online content',
    html: `<h1>${req.body.imageCriteria}</h1>`
  }, function (err, info) {
    if (err) {
      console.log('Error: ' + err)
    }
    else {
      console.log('Response: ' + info.id + " "+info.message)
    }
  })
    res.send({'response':"haho"})
})

module.exports = Router
