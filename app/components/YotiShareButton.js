import React from 'react'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'
import { browserHistory } from 'react-router'

var t = {
  config: {
    service: 'https://www.yoti.com/connect/',
    qr: 'https://www.yoti.com/qr/'
  },
  appId: '3392788e-e529-4309-8ed7-54d7ac554055',
  scenId: '5be10ae7-af29-40b0-8d33-a0fb90cb0e88'
}

class YotiShareButton extends React.Component {
  constructor (props) {
    super(props)

    this.getQr = this.getQr.bind(this)
    this.listenForToken = this.listenForToken.bind(this)
    this.yotiRedirect = this.yotiRedirect.bind(this)
    // this.mobileSetup = this.mobileSetup.bind(this)
    // this.navigateToYoti = this.navigateToYoti.bind(this)
  }

  listenForToken (proto, url) {
    var host = 'wss://api.yoti.com/api/v1/connect-sessions/' + proto
    var socket = new WebSocket(host)
    socket.onopen = () => {
      socket.send(JSON.stringify({subscription: proto}))
    }
    socket.onmessage = (msg) => {
      var data = JSON.parse(msg.data)
      console.log('token',msg.data)
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
  //
  // mobileSetup () {
  //   var url = 'https://www.yoti.com/qr/' + t.scenId
  //   var xhr = new XMLHttpRequest()
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState === 4 && xhr.status === 200) {
  //       var responseObj = JSON.parse(xhr.responseText)
  //       const href = `${responseObj.qrCodeUrl}?callback=${responseObj.callbackUrl}&id=${responseObj.application.id}&mobile=true`
  //       // normally href is passed in here.
  //       this.props.setUpForMobile(t.config.service + t.appId)
  //     }
  //   }
  //   xhr.open('GET', url, true)
  //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  //   xhr.setRequestHeader('content-type', 'application/json')
  //   xhr.send(null)
  // }

  // componentDidMount () {
  //   var isMobileRE = /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android/i
  //   var isMobile = isMobileRE.test(navigator.userAgent) &&
  //     /Mobile/i.test(navigator.userAgent)
  //   if (isMobile) this.mobileSetup()
  //   else console.log('on desktop')
  // }

  getQr () {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', (e) => {
      var responseObj = JSON.parse(e.target.responseText)
      console.log(responseObj)
      this.props.addQr(responseObj.svg)
      this.listenForToken(responseObj.proto, responseObj.url)
    })
    xhr.open('GET', '/get-qr')
    xhr.send()
  }

  // navigateToYoti () {
  //   t.serviceRedirectTimeout && clearTimeout(t.serviceRedirectTimeout)
  //   var current = Date.now()
  //   var hangTime = 5e3
  //   t.serviceRedirectTimeout = setTimeout(() => {
  //     var timeAfter = Date.now()
  //     hangTime + 1e3 > timeAfter - (current + hangTime) && (window.location = t.config.service + t.appId)
  //   }, hangTime)
  // }

  render () {
    const clickHandler = this.props.yoti.isMobile ? (window.location = this.props.yoti.href) : (this.getQr)

    // this is for when mobilesetup works! Keep this comment
    // const clickHandler = this.props.yoti.isMobile ? (this.navigateToYoti) : (this.getQr)
      // <a
      //   href={this.props.yoti.href}
      //   className='btn yoti-connect'
      //   target={this.props.yoti.target}
      //   >
      //   Share your age using Yoti
      // </a>
    if(!this.props.yoti.haveQr) {
      return (
        <div className='yoti-btn'>
          <RaisedButton
            labelStyle={{fontSize: '1.4rem', textTransform:'none', fontFamily: 'childline'}}
            style={{padding:'0.8rem'}}
            primary={true}
            onClick={clickHandler}
            target={this.props.yoti.target}
            label='Share your age using Yoti'
          />
        </div>
      )
    }
    return (
      <p className='scan-me'>
        SCAN ME WITH YOTI
        <img src='./imgs/yoti-logo.svg' className='popup-yoti' alt='yoti logo' />
      </p>
    )
  }
}

export default YotiShareButton
