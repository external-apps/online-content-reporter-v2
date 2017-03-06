import React from 'react'
import '../scss/style.scss'
import * as qrActions from '../actions/qr'
import { connect } from 'react-redux'
import QrCode from '../components/QrCode'
import { browserHistory } from 'react-router'

var t = {
  config: {
    service: 'https://www.yoti.com/connect/',
    qr: 'https://www.yoti.com/qr/'
  },
  appId: '3392788e-e529-4309-8ed7-54d7ac554055',
  scenId: '5be10ae7-af29-40b0-8d33-a0fb90cb0e88'
}

class ShareYoti extends React.Component {
  constructor (props) {
    super(props)
    // this.state = {
    //   isMobile: false,
    //   href: t.config.service + t.appId,
    //   target: '_blank'
    // }

    this.startVerification = this.startVerification.bind(this)
    this.getQr = this.getQr.bind(this)
    this.listenForToken = this.listenForToken.bind(this)
    this.yotiRedirect = this.yotiRedirect.bind(this)
    this.mobileSetup = this.mobileSetup.bind(this)
  }

  listenForToken (proto, url) {
    var host = 'wss://api.yoti.com/api/v1/connect-sessions/' + proto
    var socket = new WebSocket(host)
    socket.onopen = () => {
      socket.send(JSON.stringify({subscription: proto}))
    }
    socket.onmessage = (msg) => {
      var data = JSON.parse(msg.data)
      switch (data.status) {
        case 'COMPLETED' : {
          this.yotiRedirect(data.token)
        }
      }
    }
  }

  yotiRedirect (token) {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', (e) => {
      var responseObj = JSON.parse(e.target.responseText)
      responseObj.isUnder18 ? browserHistory.push('/form') : browserHistory.push('/over-age')
    })
    xhr.open('GET', `/thankyou?token=${token}`)
    xhr.send()
  }

  mobileSetup () {
    var url = 'https://www.yoti.com/qr/' + t.scenId
    var xhr = new XMLHttpRequest
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var responseObj = JSON.parse(xhr.responseText)

        this.props.setHref(`${responseObj.qrCodeUrl}?callback=${responseObj.callbackUrl}&id=${responseObj.application.id}&mobile=${true}`)
        this.props.toggleMobile()
        this.props.targetSelf()
      }
    }
    xhr.open('GET', url, true)
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send(null)
  }

  componentDidMount () {
    /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent) ? this.mobileSetup() : console.log('desktop')
  }

  startVerification () {
    /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent) && navigateToYoti()
  }

  getQr () {
    console.log(this.props, "PROPS IM LOOKING FOR");
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', (e) => {
      var responseObj = JSON.parse(e.target.responseText)
      this.props.addQr(responseObj.svg)
      this.listenForToken(responseObj.proto, responseObj.url)
    })
    xhr.open('GET', '/qr')
    xhr.send()
  }

  navigateToYoti () {
    t.serviceRedirectTimeout && clearTimeout(t.serviceRedirectTimeout)
    var current = Date.now()
    var hangTime = 5e3
    t.serviceRedirectTimeout = setTimeout(() => {
      var timeAfter = Date.now()
      hangTime + 1e3 > timeAfter - (current + hangTime) && (window.location = t.config.service + t.appId)
    }, hangTime)
  }

  render () {
    const clickHandler = this.props.qr.isMobile ? (this.startVerification) : (this.getQr)
    // const buttonDisplayHander = this.props.qr.qrSVG ? {display: 'none'} : {display: 'block'}

    return (
      <span onClick={clickHandler} className='yoti-btn' target={this.props.qr.target} id='yotiBtn'>
        <QrCode {...this.props} />
        <a

          href={this.props.qr.href}
          className='btn yoti-connect learn-more btn-primary'
          target={this.props.qr.target}
          >
          Share your age using Yoti
        </a>
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return { qr: state.qr }
}

const actionCreators = {
  ...qrActions
}
console.log(actionCreators, "ACTION CREATORS!")
export default connect(mapStateToProps, actionCreators)(ShareYoti)
