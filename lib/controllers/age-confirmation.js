const YotiClient = require('yoti-node-sdk')
const jwt = require('jsonwebtoken')

const { getAge } = require('../helpers/get-age.js')

const yotiClient = new YotiClient(
  process.env.YOTI_APP_ID,
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
    const ageToken = jwt.sign({
      age: getAge(userProfile.dateOfBirth),
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
    }, process.env.JWT_SECRET)

    res.json({ ageToken })
  }).catch((err) => {
    console.error(err)
    return res.status(500).send(err)
  })
}

module.exports = ageConfirmationController
