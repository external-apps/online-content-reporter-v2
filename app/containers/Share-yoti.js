import React from 'react'
import '../scss/style.scss'
// import axios from 'axios'
import { addQrAction } from '../actions/qr'
console.log('tester', addQrAction('test'))
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import QrCode from '../components/QrCode'

var t = {
  config: {
    service: 'https://www.yoti.com/connect/',
    qr: 'https://www.yoti.com/qr/'
  },
  appId: '3392788e-e529-4309-8ed7-54d7ac554055',
  scenId: '5be10ae7-af29-40b0-8d33-a0fb90cb0e88'
}

const listenForToken = (proto, url) => {
  var host = 'wss://api.yoti.com/api/v1/connect-sessions/' + proto
  var socket = new WebSocket(host)
  socket.onopen = () => {
    socket.send(JSON.stringify({subscription: proto}))
  }
  socket.onmessage = (msg) => {
    var data = JSON.parse(msg.data)
    switch (data.status) {
      case 'COMPLETED' : {
        window.location = 'thankyou?token=' + data.token
      }
    }
  }
}

const mobileSetup = () => {
  var url = 'https://www.yoti.com/qr/' + t.scenId
  var xhr = new XMLHttpRequest
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var responseObj = JSON.parse(xhr.responseText)
      // here we assign the url to the link!
      this.setState({href: responseObj.qrCodeUrl + '?callback=' + responseObj.callbackUrl + '&id=' + responseObj.application.id + '&mobile=' + true})
    }
  }
  xhr.open('GET', url, true)
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.send(null)
}

class ShareYoti extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMobile: false,
      href: t.config.service + t.appId,
      target: '_blank',
      qr: false
    }
    this.handleClick = this.startVerification.bind(this)
    this.getQr = this.getQr.bind(this)
  }

  componentDidMount () {
    /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent) ? (this.setState({isMobile: true, target: '_self'}), mobileSetup()) : (this.setState({href: '#'}))
  }

  startVerification () {
    /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent) && navigateToYoti()
  }

  getQr () {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', (e) => {
      var responseObj = JSON.parse(e.target.responseText)
      this.props.addQrAction(responseObj.svg)
      listenForToken(responseObj.proto, responseObj.url)
    })
    xhr.open('GET', '/qr')
    xhr.send()
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

  render () {
    const clickHandler = this.state.isMobile ? (this.startVerification) : (this.getQr)
    const buttonDisplayHander = this.props.qr.qrCode ? {display: 'none'} : {display: 'block'}

    return (
      <span onClick={clickHandler} style={buttonDisplayHander} className='yoti-btn' target={this.state.isMobile} id='yotiBtn'>
        <QrCode {...this.props} />
        <a
          href={this.state.href}
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

const mapStateToProps = (state) => {
  return { qr: state.qr }
}

export default connect(mapStateToProps, {addQrAction})(ShareYoti)
