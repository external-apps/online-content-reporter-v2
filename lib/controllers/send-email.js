const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')
require('env2')('./config.env')

function dateToday(){
  let date = new Date()
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let year = date.getFullYear()
  let month = months[date.getMonth()]
  let day = date.getDate()
  let hour = date.getHours()
  let minutes = date.getMinutes()
  return [`${day} ${month} ${year}`, `${hour}:${minutes}`]
}

const sendEmail = (req, res) => {
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

  let date = dateToday()

  nodemailerMailgun.sendMail({
    from: 'postmaster@childline-yoti.com',
    to: 'childline.report.content@gmail.com',  //childline.report.content@gmail.com
    subject: 'Report online content',
    html: `<h1>Online content report from Childline</h1><br>
          <p>The following details relate to a request to remove an image or video from a person under the age of 18. The age of the person has been verified by YOTI. This request was made via the Childline website.</p><br>
          <h2>Request details</h2><br>
          <h3>URL of content: ${req.body.url}</h3><br>
          <h3>Description of content (optional):</h3>
          <p>${req.body.description}</p><br>
          <h3>Categories selected:</h3><br>
          <ul>
            ${criteria}
          </ul>
          <h3>Date of request: ${date[0]} </h3>
          <h3>Time of request: ${date[1]} </h3>
          <h3>Email address of user for further contact (optional):</h3>
          <p>${req.body.email}</p>`
  }, (err) => {
    if (err) {
      return res.json({error: 'We had a problem sending your details, please try again later.'})
    }
    return res.json({response: 'Success!!! Email has been sent!'})
  })
}

module.exports = sendEmail
