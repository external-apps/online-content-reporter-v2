const app = require('./app.js')
const port = process.env.PORT || 3000

// const fs = require('fs')
const http = require('http')
// const privateKey = fs.readFileSync('./keys/server-key.pem', 'utf8')
// const certificate = fs.readFileSync('./keys/server-cert.pem', 'utf8')
//
// const credentials = {key: privateKey, cert: certificate}
const Server = http.createServer(app)

Server.listen(port, () => {
  console.log(`Server is runnign on port: ${port}`)
})
