const { expect } = require('chai');
//const request = require('supertest');
//const proxyquire = require('proxyquire');
const sinon = require('sinon');

// exploring sinon
var spy = sinon.spy();

//We can call a spy like a function
spy('Hello', 'World');

//Now we can get information about the call
console.log(spy.firstCall.args)


var user = {
  setName: function(name){
    this.name = name;
  }
}

//Create a spy for the setName function
var setNameSpy = sinon.spy(user, 'setName');

//Now, any time we call the function, the spy logs information about it
user.setName('Darth Vader');

//Which we can see by looking at the spy object
console.log(setNameSpy.callCount); //output: 1

//Important final step - remove the spy
setNameSpy.restore();

const end2end = require('../lib/app');
console.log(end2end);
/*describe('app.js', () => {
	afterEach(() => cvControllerStub.reset());
	it('should call the cv controller on the \'/\' route', () => {
		return request(app)
			.get('/')
			.expect(() => expect(cvControllerStub.called).to.be.true);
	});
});*/

/*describe('End-to-end', () => {
	it('should serve html on the \'/\' route', () => {
		return request(end2end)
			.get('/')
			.expect(200)
			.expect('Content-Type', /html/)
	})
});*/
