const app = require('./app.js')
const port = process.env.PORT || 3000

const fs = require('fs')
const https = require('https')
// const privateKey = fs.readFileSync('./keys/server-key.pem', 'utf8')
// const certificate = fs.readFileSync('./keys/server-cert.pem', 'utf8')
//
// const credentials = {key: privateKey, cert: certificate}
const httpsServer = https.createServer(/* credentials, */app)

httpsServer.listen(port, () => {
  console.log(`Server is runnign on port: ${port}`)
})
