const https = require('https')
const http = require('http')
const path = require('path')
const fs = require('fs')

const app = require('./app.js')

const certsPath = path.join(__dirname, '..', '..', 'certificates')
const options = {
  key: fs.readFileSync(path.join(certsPath, 'childline.private.pem')),
  cert: fs.readFileSync(path.join(certsPath, 'childline.crt.pem')),
}

const securePort = process.env.SSL_PORT || 443
const insecurePort = process.env.UNSECURE_PORT || 80

https.createServer(options, app).listen(securePort, () => {
  console.log(`Server is listening on port: ${securePort}`)
})

http.createServer((req, res) => {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(insecurePort, () => {
  console.log(`Server is listening on port: ${insecurePort}`)
});
