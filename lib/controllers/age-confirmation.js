const fs = require('fs')
const path = require('path')
const YotiClient = require('yoti-node-sdk')
const ageCheck = require('../helpers/age-check.js')

 const PEM = fs.readFileSync(path.join(__dirname, "../../keys/childline-yoti-access-security.pem")) //nori
//const PEM = fs.readFileSync(path.join(__dirname, '../../keys/app.pem')) //will

/*Nori https://www.yoti.com/connect/f6999919-d114-43c0-bdf0-ae2e1a89ff73*/
/*Willhttps://www.yoti.com/qr/5be10ae7-af29-40b0-8d33-a0fb90cb0e88*/
const CLIENT_SDK_ID='e77b44ba-86ea-4580-beda-0f67ef6725fb' //nori
//const CLIENT_SDK_ID = '7dd705c6-4345-41b4-9713-0275fcd96506' //will
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
       if(req.query.desktop){
         reply.json({isUnder18: true})
       }
    //  reply.sendFile(path.join(__dirname+'../../dist/index.html?isUnder18=true'))
    //  reply.setHeader('Set-Cookie','test=value')

      reply.cookie('name', 'veryYourself', { isUnder18: true, IAmOnMobile:true, httpOnly: false, path:'/form'});
      //reply.sendFile(__dirname+'/../../dist/index.html') // Idon't get any errors but it is not serving the home either
      //reply.json({isUnder18: true,IAmOnMobile:true})
      reply.redirect('/')
      //reply.end()
    } else {
      if(req.query.desktop){
        reply.json({isUnder18: false})
      }
      reply.sendFile(path.join(__dirname+'/../../dist/index.html?isUnder18=false'))
    //  reply.json({isUnder18: false})
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
