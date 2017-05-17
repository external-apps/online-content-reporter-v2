const YotiClient = require('yoti-node-sdk')
const jwt = require('jsonwebtoken')

const { ageCheck } = require('../helpers/get-age.js')
const { AGE_ERROR } = require('../../constants/error.js')

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

    res.redirect(`/accept-age-token?session=${ageToken}`)
  }).catch((err) => {
    console.error(err)
    res.redirect(`/accept-age-token?error=${AGE_ERROR}`)
  })
}

module.exports = ageConfirmationController
