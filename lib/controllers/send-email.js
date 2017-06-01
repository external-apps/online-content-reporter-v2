const aws = require('aws-sdk')

const { EMAIL_ERROR, OVER_AGE_ERROR } = require('../../constants/error.js')

aws.config.region = 'eu-west-1'

const ses = new aws.SES({ apiVersion: '2010-12-01' })

const emailOptions = (subject, html, sender, recipients) => ({
  Source: sender,
  Destination: { ToAddresses: recipients },
  Message: {
    Subject: { Data: subject },
    Body: { Html: { Data: html } }
  }
})

const sendEmail = (emailOptions, cb) => {
  ses.sendEmail(emailOptions, err => {
    if (err) return cb(err)

    cb(null)
  })
}

const sendEmailController = (req, res) => {
  if (!req.user.isUnder18) return res.status(403).json({ error: OVER_AGE_ERROR })

  let criteria = req.body.imageCriteria.reduce((prev, curr) =>
    prev.concat(`<li style="font-size:14px;">${curr}</li><br>`
  ), '')

  let date = dateToday()
  const emailRecipientOne = process.env.REPORT_EMAIL_RECIPIENT_1
  const emailRecipientTwo = process.env.REPORT_EMAIL_RECIPIENT_2
  const emailRecipients = [emailRecipientOne].concat(emailRecipientTwo || [])

  const html = `<h1>Online content report from Childline</h1>
        <p style="font-size:14px;">The following details relate to a request to remove an image or video from a person under the age of 18. The age of the person has been verified by YOTI. This request was made via the Childline website.</p>
        <h2>Request details</h2>
        <p style="font-size:14px;"><span style="font-weight:bolder;">URL of content:</span>  ${req.body.url}</p>
        <h3>Description of content (optional):</h3>
        <p style="font-size:14px;">${req.body.description}</p>
        <h3>Categories selected:</h3>
        <ul>
          ${criteria}
        </ul>
        <p style="font-size:14px;"><span style="font-weight:bolder;">Report timestamp</span> ${(new Date).toString()} </p>
        <p style="font-size:14px;font-weight:bolder;">Email address of user for further contact (optional):</p>
        <p style="font-size:14px;">${req.body.email}</p>`

  const emailOpts = emailOptions(
    'Report online content',
    html,
    process.env.REPORT_SENDER_EMAIL,
    emailRecipients
  )

  sendEmail(emailOpts, (error, response) => {
    if (error) {
      console.log('sendMail error: ', error)
      return res.status(500).json({ error: EMAIL_ERROR })
    }
    return res.json({response: 'Success. Email has been sent.'})
  })
}

module.exports = sendEmailController
