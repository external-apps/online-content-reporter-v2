const fs = require('fs')
const path = require('path')
const YotiClient = require('yoti-node-sdk')
const ageCheck = require('../helpers/age-check.js')

// const PEM = fs.readFileSync(path.join(__dirname, "../../keys/childline-yoti-access-security.pem")) //nori
const PEM = fs.readFileSync(path.join(__dirname, '../../keys/app.pem')) // will

// const CLIENT_SDK_ID='e77b44ba-86ea-4580-beda-0f67ef6725fb' // nori
const CLIENT_SDK_ID = '7dd705c6-4345-41b4-9713-0275fcd96506' // will
const yotiClient = new YotiClient(CLIENT_SDK_ID, PEM)

const ageConfirmationController = (req, res) => {
  const token = req.query.token
  const isDesktop = req.query.desktop

  if (!token) {
    res.send('error', {
      error: 'No token has been provided.'
    })
    return
  }
  let promise = yotiClient.getActivityDetails(token)
  promise.then((activityDetails) => {
    const isUnder18 = ageCheck(activityDetails.getUserProfile().dateOfBirth)
    if (!isDesktop) {
      res.redirect('/')
      res.cookie('yotiVerifiedAge', JSON.stringify(isUnder18), {
        expires: new Date(Date.now() + 900000),
        httpOnly: false,
        path: '/'
      })
      return res.end()
    } else {
      return res.json({isUnder18: isUnder18})
    }
  }).catch((err) => {
    console.error(err)
    return res.send('error', {
      error: err
    })
  })
}

module.exports = ageConfirmationController
