var nodemailer = require('nodemailer')
var mg = require('nodemailer-mailgun-transport')
var env = require('env2')('./config.env')

const sendEmail = (req, res)=> {
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
  let criteria = req.body.imageCriteria.reduce((prev,curr) => prev.concat(`<h1>${curr}</h1><br>`),"")
  nodemailerMailgun.sendMail({
    from: 'postmaster@childline-yoti.com',
    to: 'childline.report.content@gmail.com', // An array if you have multiple recipients.
    subject: 'Report online content',
    html: `${criteria}<br><h2>${req.body.url}</h2><br><h3>${req.body.description}</h3>`
  }, function (err, info) {
    if (err) {
      console.log('Error: ' + err)
    }
    else {
      console.log('Response: ' + info.id + " "+info.message)
    }
  })
    res.send({'response':"Success!!! Email has been sent!"})
}

module.exports = sendEmail
