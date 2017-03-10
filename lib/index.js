const app = require('./app.js')
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var env = require('env2')('./config.env')

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
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
  text: 'It works!!!!',
}, function (err, info) {
  if (err) {
    console.log('Error: ' + err)
  }
  else {
    console.log('Response: ' + info.id + " "+info.message)
  }
})
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is runnign on port: ${port}`)
})
