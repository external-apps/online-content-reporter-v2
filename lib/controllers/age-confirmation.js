const YotiClient = require('yoti-node-sdk')
const ageCheck = require('../helpers/age-check.js')

const yotiClient = new YotiClient(
  process.env.YOTI_APP_ID,
  process.env.YOTI_RSA_PRIVATE_KEY
)

const ageConfirmationController = (req, res) => {
  const token = req.query.token
  const isDesktop = req.query.desktop

  if (!token) {
    res.send('error', {
      error: 'No token has been provided.'
    })
    return
  }
  const promise = yotiClient.getActivityDetails(token)

  promise.then((activityDetails) => {
    const isUnder18 = ageCheck(activityDetails.getUserProfile().dateOfBirth)
    if (!isDesktop) {
      res.cookie('yotiVerifiedAge', JSON.stringify(isUnder18), {
        expires: new Date(Date.now() + 900000),
        httpOnly: false,
        path: '/'
      })
      res.redirect('/')
    } else {
      return res.json({ isUnder18: isUnder18 })
    }
  }).catch((err) => {
    console.error(err)
    return res.send('error', {
      error: err
    })
  })
}

module.exports = ageConfirmationController
