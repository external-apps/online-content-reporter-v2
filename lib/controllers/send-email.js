const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')
require('env2')('./config.env')

const sendEmail = (req, reply) => {
  const auth = {
    auth: {
      api_key: process.env.API_KEY,
      domain: process.env.DOMAIN
    }
  }
  const nodemailerMailgun = nodemailer.createTransport(mg(auth))
  let criteria = req.body.imageCriteria.reduce((prev, curr) =>
    prev.concat(`<li>${curr}</li><br>`
  ), '')

  nodemailerMailgun.sendMail({
    from: 'postmaster@childline-yoti.com',
    to: 'childline.report.content@gmail.com', // An array if you have multiple recipients.
    subject: 'Report online content',
    html: `<h2>Content url: ${req.body.url}</h2><br>
          <h2>Content description: ${req.body.description}</h2><br>
          <h2>The Content Criteria:</h2><br>
          <ul>
            ${criteria}
          </ul>`
  }, function (err, info) {
    if (err) {
      reply.json({error: 'We had a problem sending your details, please try again later.'})
      reply.end()
    }
    reply.json({response: 'Success!!! Email has been sent!'})
    reply.end()
  })
}

module.exports = sendEmail
