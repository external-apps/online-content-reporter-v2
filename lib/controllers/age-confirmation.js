const fs = require('fs')
const path = require('path')
const YotiClient = require('yoti-node-sdk')
const ageCheck = require('../helpers/age-check.js')

const PEM = fs.readFileSync(path.join(__dirname, '../../keys/app.pem'))
const CLIENT_SDK_ID = '7dd705c6-4345-41b4-9713-0275fcd96506'
const yotiClient = new YotiClient(CLIENT_SDK_ID, PEM)

const ageConfirmationController = (req, reply) => {
  let token = req.query.token
  // const isMobile = req.query.mobile
  if (!token) {
    reply.send('error', {
      error: 'No token has been provided.'
    })
    return
  }
  let promise = yotiClient.getActivityDetails(token)
  promise.then((activityDetails) => {
    if (ageCheck(activityDetails.getUserProfile().dateOfBirth)) {
      // if (isMobile) reply.json({ test: true }); reply.end()

      reply.json({isUnder18: true})
      reply.end()
    } else {
      reply.json({isUnder18: false})
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
