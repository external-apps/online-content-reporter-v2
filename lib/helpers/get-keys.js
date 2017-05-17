const fs = require('fs')
const path = require('path')

const getRsaPrivateKey = () => {
  const envKey = process.env.YOTI_RSA_PRIVATE_KEY
  if (envKey) return envKey

  const keyPath = path.join(__dirname, '..', '..', 'yoti_private_key.pem')
  return fs.readFileSync(keyPath, 'utf8')
}

module.exports = {
  getRsaPrivateKey
}
