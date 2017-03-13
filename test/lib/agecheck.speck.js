const { expect } = require('chai')
const ageCheck = require('../../lib/helpers/age-check')

describe('Age check test', () => {
  it('17 should return true', () => {
    expect(ageCheck('03.12.2003')).to.be.true
  })
  it('35 should return false', () => {
    expect(ageCheck('01.01.1980')).to.be.false
  })
})
