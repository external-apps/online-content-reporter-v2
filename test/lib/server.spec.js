const { expect } = require('chai')
const request = require('supertest')
const sinon = require('sinon')
const end2end = require('../../lib/app.js')

describe('End-to-end', () => {
  it('should serve html on the \'/\' route', () => {
    return request(end2end)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
  })
  it('get requests to unknown endpoints should render the \'/\' route', () => {
    return request(end2end)
      .get('/randomendpoint')
      .expect(200)
      .expect('Content-Type', /html/)
  })
  it('get requests to unknown endpoints should render the \'/\' route', () => {
    return request(end2end)
      .get('/get-qr')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
  })
})
