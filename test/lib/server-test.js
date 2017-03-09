/* eslint-env mocha */
const server = require('../../lib/app')
const expect = require('chai').expect

const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`Server is runnign on port: ${port}`)
})

/*describe('Server', () => {
  it('returns correct html for path "/"', (done) => {
    server.inject({method: 'GET', url: '/age-check'})
    .then((res) => {
      expect(res.payload).to.contain('')
      done()
    })
    .catch(done)
  })

/*  it('returns some image correctly', (done) => {
    server.inject({method: 'GET', url: '/imgs/childline-logo'})
    .then((res) => {
      expect(res.payload).to.contain('PNG')
      done()
    })
    .catch(done)
  })
})
*/
