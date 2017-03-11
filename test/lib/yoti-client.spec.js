const { expect } = require('chai');
const nock = require('nock');

const yotiQr = require('../../app/components/YotiShareButton');

// https://www.yoti.com/qr/5be10ae7-af29-40b0-8d33-a0fb90cb0e88

/*getQr () {
  var xhr = new XMLHttpRequest()
  xhr.addEventListener('load', (e) => {
    var responseObj = JSON.parse(e.target.responseText)
    this.props.addQr(responseObj.svg)
    this.listenForToken(responseObj.proto, responseObj.url)
  })
  xhr.open('GET', '/qr')
  xhr.send()
*/

/*describe('yoti QR client', () => {
	it('should retrieve user profile information', () => {
		nock('https://www.yoti.com')
			.get('/qr/5be10ae7-af29-40b0-8d33-a0fb90cb0e88')
			.reply(200, require('./fixtures/qr.json')) // in fixtures we should have a mock response
		return yotiQr.getQr()
     		.then(qr => {
          console.log(qr)
          expect(qr.length).to.equal(1)
     		//bin/	expect(qr.url).to.equal('https://code.yoti.com/CAEaJDM2OGRhZmUwLTNjM2ItNDYxMi1iNTJjLTMzZTlhNzQ5ZGJjYjAC');
     		//	expect(qr.proto).to.equal('proto_CiRkODRhNDM5My0zNDhmLTQzOTUtYjEwNS1mMmRmM2EwMzBjOGISCTEudGh3LmdichoIWUlGbGxRbVc=');
     		})
	})

});*/
