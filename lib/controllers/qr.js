// const request = require('request')
// const QRCode = require('qrcode-svg')
//
// const qrController = (req, res) => {
//   request.get(`https://www.yoti.com/qr/${process.env.YOTI_SCENARIO_ID}`, (e, response, body) => {
//     const url = body.match(/https:\/\/code\.yoti\.com\/.*\?/)[0].slice(0, -1)
//     const proto = body.match(/proto_.*=/)[0]
//     const svg = new QRCode({
//       content: url,
//       color: 'rgba(35, 79, 98, 1)',
//       background: 'white'
//     }).svg()
//     return res.json({svg, proto, url})
//   })
// }
//
// module.exports = qrController
