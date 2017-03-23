const fs = require('fs')
const path = require('path')
const YotiClient = require('yoti-node-sdk')
const ageCheck = require('../helpers/age-check.js')

// const PEM = fs.readFileSync(path.join(__dirname, "../../keys/childline-yoti-access-security.pem")) //nori
const PEM = fs.readFileSync(path.join(__dirname, '../../keys/app.pem')) // will

// /*Nori https://www.yoti.com/connect/f6999919-d114-43c0-bdf0-ae2e1a89ff73*/
// /*Willhttps://www.yoti.com/qr/5be10ae7-af29-40b0-8d33-a0fb90cb0e88*/
// const CLIENT_SDK_ID='e77b44ba-86ea-4580-beda-0f67ef6725fb' // nori
const CLIENT_SDK_ID = '7dd705c6-4345-41b4-9713-0275fcd96506' // will
const yotiClient = new YotiClient(CLIENT_SDK_ID, PEM)

const ageConfirmationController = (req, reply) => {
  const token = req.query.token
  const isDesktop = req.query.desktop
  if (!token) {
    reply.send('error', {
      error: 'No token has been provided.'
    })
    return
  }
  let promise = yotiClient.getActivityDetails(token)
  promise.then((activityDetails) => {
    const isUnder18 = ageCheck(activityDetails.getUserProfile().dateOfBirth)
    if (!isDesktop) {
      reply.redirect('/')
      reply.cookie('yotiVerifiedAge', JSON.stringify(isUnder18), {
        expires: new Date(Date.now() + 900000),
        httpOnly: false,
        path: '/'
      })
      reply.end()
    } else {
      reply.json({isUnder18: isUnder18})
      reply.end()
    }
  }).catch((err) => {
    console.error(err)
    reply.send('error', {
      error: err
    })
    return
  })
}

module.exports = ageConfirmationController
