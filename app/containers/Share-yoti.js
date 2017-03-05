import React from 'react'
import '../scss/style.scss'

var t = {
  config: {
    service: 'https://www.yoti.com/connect/',
    qr: 'https://www.yoti.com/qr/',
  },
  appId: '3392788e-e529-4309-8ed7-54d7ac554055',
  scenId: '5be10ae7-af29-40b0-8d33-a0fb90cb0e88'
}

class ShareYoti extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isMobile: false, href: t.config.service + t.appId};
    this.handleClick = this.startVerification.bind(this)
    this.init = this.init.bind(this)
  }

  componentDidMount() {
    init()
  }

  init() {
    // for (var s in i) t.config.hasOwnProperty(s) && (t.config[s] = i[s])
    var v = t.config.service + t.appId
    var b
    //HERE WE CHECK IF WE ARE ON A MOBILE OR NOT!
    /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent) ? (this.setState({ isMobile: true}), b = '_self', mobileSetup()) : (v = 'javascript:void(0)', startVerification = getQR)
    // qrBtn.setAttribute('target', b)
    // qrBtn.setAttribute('href', t.config.service + t.appId)
    // qrBtn.setAttribute('data-application-id', t.appId)
    // qrBtn.setAttribute('data-scenario-id', t.scenId)
    // qrBtn.addEventListener('click', startVerification)
  }

  shareYoti () {
    'use strict'
    var qrBtn = document.getElementById('yotiBtn')
    var qrCode = document.querySelector('.qr-code-output')
    var scanMe = document.querySelector('.scan-me')
  }

  getQr () {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', function (e) {
      var responseObj = JSON.parse(e.target.responseText)
      displayQr(responseObj)
      listenForToken(responseObj.proto, responseObj.url)
    })
    xhr.open('GET', '/qr')
    xhr.send()
  }

  displayQr (responseObj) {
    qrBtn.style.display = 'none'
    scanMe.style.display = 'block'
    qrCode.innerHTML = responseObj.svg
    qrCode.style.textAlign = 'center'
  }

  listenForToken (proto, url) {
    var host = 'wss://api.yoti.com/api/v1/connect-sessions/' + proto
    var socket = new WebSocket(host)
    socket.onopen = function () {
      socket.send(JSON.stringify({subscription: proto}))
    }
    socket.onmessage = function (msg) {
      var data = JSON.parse(msg.data)
      switch (data.status) {
        case 'COMPLETED' : {
          //Callback URL (with token)
          window.location = 'thankyou?token=' + data.token
        }
      }
    }
  }

  navigateToYoti () {
    // window.location = t.config.service + appI
    t.serviceRedirectTimeout && clearTimeout(t.serviceRedirectTimeout)
    var n = Date.now()
    var r = 5e3
    t.serviceRedirectTimeout = setTimeout(function () {
      var e = Date.now()
      r + 1e3 > e - (n + r) && (window.location = t.config.service + t.appId)
    }, r)
  }

  startVerification (t) {
    /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent) && navigateToYoti()
  }

  mobileSetup () {
    var url = 'https://www.yoti.com/qr/' + t.scenId,
     xhr = new XMLHttpRequest
     xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var responseObj = JSON.parse(xhr.responseText)
        // here we assign the url to the link!
        this.setState({href: responseObj.qrcodeUrl + '?callback=' + responseObj.callbackUrl + '&id=' + responseObj.application.id + '&mobile=' + true  })
      }
     }
     xhr.open('GET', url, true)
     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
     xhr.setRequestHeader('content-type', 'application/json')
     xhr.send(null)
  }


  // t.config.service = 'https://code.yoti.com/app/'
  // t.init()

  render () {
    return (
      <span href={this.state.href} className='yoti-btn' target={this.state.isMobile} id='yotiBtn'>
        <a
          onClick={this.startVerification}
          className='btn yoti-connect learn-more btn-primary'
          data-target='embed'
          data-yoti-type='inline'
          data-size='medium'>
          Share your age using Yoti
        </a>
      </span>
    )
  }

}

export default ShareYoti
