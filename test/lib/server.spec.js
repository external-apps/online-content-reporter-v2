const { expect } = require('chai');
const request = require('supertest');
const sinon = require('sinon');
const end2end = require('../../lib/app.js')
const ageCheck = require('../../lib/helpers/age-check')


describe('Age check test', () => {
	it('17 should return true', () => {
		expect(ageCheck('03.12.2003')).to.be.true
	})
	it('35 should return false', () => {
		expect(ageCheck('01.01.1980')).to.be.false
	})
})

describe('End-to-end', () => {
	it('should serve html on the \'/\' route', () => {
		return request(end2end)
			.get('/')
			.expect(200)
			.expect('Content-Type', /html/)
	})

});
