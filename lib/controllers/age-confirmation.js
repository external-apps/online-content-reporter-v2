const YotiClient = require('yoti-node-sdk')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
import { MAXIMUM_REPORTER_AGE } from '../../constants/age.js'
const { getAge } = require('../helpers/get-age.js')

const PEM_PATH = path.join(__dirname, '../../keys/childline-content-reporter-access-security.pem')
const PEM = fs.readFileSync(PEM_PATH)

const yotiClient = new YotiClient(
  process.env.YOTI_SDK_ID,
  PEM
)

const ageConfirmationController = (req, res) => {
  const token = req.query.token

  if (!token) {
    res.status(500).send('No yoti token provided')
    return
  }

  yotiClient.getActivityDetails(token).then((activityDetails) => {
    const userProfile = activityDetails.getUserProfile()
    const expirySeconds = 15 * 60
    const ageToken = jwt.sign({
      under18: getAge(userProfile.dateOfBirth) < MAXIMUM_REPORTER_AGE,
      exp: Math.floor(Date.now() / 1000) + (expirySeconds)
    }, process.env.JWT_SECRET)

    res.cookie('yotiVerifiedAge', ageToken, {
      expires: new Date(Date.now() + expirySeconds * 1000),
      httpOnly: false,
      path: '/'
    })

    res.sendFile(path.join(__dirname, '../dist/index.html'))
  }).catch((err) => {
    console.error(err)
    return res.status(500).send(err)
  })
}

module.exports = ageConfirmationController
