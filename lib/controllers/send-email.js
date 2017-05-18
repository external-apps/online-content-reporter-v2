const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')

const { EMAIL_ERROR, OVER_AGE_ERROR } = require('../../constants/error.js')

function dateToday () {
  let date = new Date()
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let year = date.getFullYear()
  let month = months[date.getMonth()]
  let day = date.getDate()
  let hour = date.getHours()
  if (hour < 10) {
    hour = ('0').concat(hour)
  }
  let minute = date.getMinutes()
  if (minute < 10) {
    minute = ('0').concat(minute)
  }
  return [`${day} ${month} ${year}`, `${hour}:${minute}`]
}

const sendEmail = (req, res) => {
  if (!req.user.isUnder18) return res.status(403).json({ error: OVER_AGE_ERROR })
  const auth = {
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN
    }
  }

  const nodemailerMailgun = nodemailer.createTransport(mg(auth))

  let criteria = req.body.imageCriteria.reduce((prev, curr) =>
    prev.concat(`<li style="font-size:14px;">${curr}</li><br>`
  ), '')

  let date = dateToday()
  const emailRecipientOne = process.env.REPORT_EMAIL_RECIPIENT_1
  const emailRecipientTwo = process.env.REPORT_EMAIL_RECIPIENT_2
  const emailRecipients = [emailRecipientOne].concat(emailRecipientTwo || [])
  nodemailerMailgun.sendMail({
    from: process.env.REPORT_SENDER_EMAIL,
    to: emailRecipients,
    subject: 'Report online content',
    html: `<h1>Online content report from Childline</h1>
          <p style="font-size:14px;">The following details relate to a request to remove an image or video from a person under the age of 18. The age of the person has been verified by YOTI. This request was made via the Childline website.</p>
          <h2>Request details</h2>
          <p style="font-size:14px;"><span style="font-weight:bolder;">URL of content:</span>  ${req.body.url}</p>
          <h3>Description of content (optional):</h3>
          <p style="font-size:14px;">${req.body.description}</p>
          <h3>Categories selected:</h3>
          <ul>
            ${criteria}
          </ul>
          <p style="font-size:14px;"><span style="font-weight:bolder;">Date of request:</span> ${date[0]} </p>
          <p style="font-size:14px;"><span style="font-weight:bolder;">Time of request:</span> ${date[1]} </p>
          <p style="font-size:14px;font-weight:bolder;">Email address of user for further contact (optional):</p>
          <p style="font-size:14px;">${req.body.email}</p>`
  }, error => {
    if (error) {
      console.log('sendMail error: ', error)
      return res.status(500).json({ error: EMAIL_ERROR })
    }
    return res.json({response: 'Success. Email has been sent.'})
  })
}

module.exports = sendEmail
