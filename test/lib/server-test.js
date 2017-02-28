/* eslint-env mocha */
const server = require('../../lib/server.js')()
const expect = require('chai').expect

describe('Server', () => {
  it('returns correct html for path "/"', (done) => {
    server.inject({method: 'GET', url: '/age-check'})
    .then((res) => {
      expect(res.payload).to.contain('')
      done()
    })
    .catch(done)
  })

  it('returns some image correctly', (done) => {
    server.inject({method: 'GET', url: '/imgs/childline-logo'})
    .then((res) => {
      expect(res.payload).to.contain('PNG')
      done()
    })
    .catch(done)
  })
})
