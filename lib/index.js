const app = require('./app.js')
const port = process.env.PORT || 3000
const http = require('http')
require('env2')('env.json')

const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Server is runnign on port: ${port}`)
})
