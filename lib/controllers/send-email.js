var nodemailer = require('nodemailer')
var mg = require('nodemailer-mailgun-transport')
var env = require('env2')('./config.env')

const sendEmail = (req, reply)=> {
  console.log(`Request Body: ${req.body}`)
  const auth = {
    auth: {
      api_key: process.env.API_KEY,
      domain: process.env.DOMAIN
    }
  }

  const nodemailerMailgun = nodemailer.createTransport(mg(auth))

  let criteria = req.body.imageCriteria.reduce((prev,curr) => prev.concat(`<h2>${curr}</h2><br>`),"")

  nodemailerMailgun.sendMail({
    from: 'postmaster@childline-yoti.com',
    to: 'childline.report.content@gmail.com', // An array if you have multiple recipients.
    subject: 'Report online content',
    html: `<h1>The criteria</h1><br>${criteria}<br><h2>${req.body.url}</h2><br><h3>${req.body.description}</h3>`
  }, function (err, info) {
    if (err) {
      reply.json({error: "We had a problem sending your details, please try again later."})
      reply.end()
    }
    reply.json({response: "Success!!! Email has been sent!"})
    reply.end()
  })
}

module.exports = sendEmail
