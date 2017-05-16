const YotiClient = require('yoti-node-sdk')
const jwt = require('jsonwebtoken')
const path = require('path')
const { ageCheck } = require('../helpers/get-age.js')

const yotiClient = new YotiClient(
  process.env.YOTI_SDK_ID,
  process.env.YOTI_RSA_PRIVATE_KEY
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
      isUnder18: ageCheck(userProfile.dateOfBirth),
      exp: Math.floor(Date.now() / 1000) + (expirySeconds)
    }, process.env.JWT_SECRET)

    res.cookie('yotiVerifiedAge', ageToken, {
      expires: new Date(Date.now() + expirySeconds * 1000),
      httpOnly: false,
      path: '/'
    })

    res.sendFile(path.join(__dirname, '../../dist/index.html'))
  }).catch((err) => {
    console.error(err)
    return res.status(500).send(err)
  })
}

module.exports = ageConfirmationController
