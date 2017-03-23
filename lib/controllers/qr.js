const request = require('request')
const QRCode = require('qrcode-svg')

const qrController = (req, reply) => {
  //wills `https://www.yoti.com/qr/5be10ae7-af29-40b0-8d33-a0fb90cb0e88`
  //nori https://www.yoti.com/connect/f6999919-d114-43c0-bdf0-ae2e1a89ff73
  request.get(`https://www.yoti.com/qr/5be10ae7-af29-40b0-8d33-a0fb90cb0e88`, (e, response, body) => {
    const url = body.match(/https:\/\/code\.yoti\.com\/.*\?/)[0].slice(0, -1)
    const proto = body.match(/proto_.*=/)[0]
    const svg = new QRCode({
      content: url,
      color: 'rgba(35, 79, 98, 1)',
      background: 'white'
    }).svg()
    reply.json({svg, proto, url})
    reply.end()
  })
}

module.exports = qrController
