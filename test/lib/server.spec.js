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
})
