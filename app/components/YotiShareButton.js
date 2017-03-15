import React from 'react'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'
import { browserHistory, Link } from 'react-router'
import axios from 'axios'

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
    this.mobileSetup = this.mobileSetup.bind(this)
    this.navigateToYoti = this.navigateToYoti.bind(this)
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
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var responseObj = JSON.parse(xhr.responseText)
        const href = `${responseObj.qrCodeUrl}?callback=${responseObj.callbackUrl}&id=${responseObj.application.id}&mobile=true`
        // normally href is passed here below...
        // to fix use href=t.config.service + t.appId
        this.props.setUpForMobile(href)
      }
    }
    xhr.open('GET', url, true)
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send(null)
  }

  componentWillMount () {
    var isMobileRE = /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android/i
    var isMobile = isMobileRE.test(navigator.userAgent) &&
      /Mobile/i.test(navigator.userAgent)
    if (isMobile) this.mobileSetup()
    else this.getQr()
  }

  getQr () {
    axios.get('/get-qr')
    .then(res => {
      this.props.addQr(res.data.svg)
      console.log("PROPS after code:", this.props)
      this.listenForToken(res.data.proto, res.data.url)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  navigateToYoti () {
    //when yoti api fixes navigate here goes: window.location = this.props.yoti.href
    window.location = t.config.service + t.appId
  }

  render () {
    const clickHandler = this.props.yoti.isMobile ? (this.navigateToYoti) : (this.props.showQr)
    const buttonLabelStyle = (this.props.yoti.isMobile)
      ? { fontSize: '0.8rem', textTransform: 'none', fontFamily: 'childline' }
        : { fontSize: '1.1rem', textTransform: 'none', fontFamily: 'childline' }
    const buttonStyle = (this.props.yoti.isMobile)
    ? { whiteSpace: 'nowrap', minWidth: '5rem' }
      : { padding: '0.8rem 0', whiteSpace: 'nowrap', minWidth: '8rem' }

    return (
      <div className='yoti-btns'>
        {!this.props.yoti.showQr &&
          <div>
            <RaisedButton
              labelStyle={buttonLabelStyle}
              style={buttonStyle}
              primary={true}
              onClick={clickHandler}
              target={this.props.yoti.target}
              label='I have YOTI'
            />
            <Link to='www.yoti.com/'>
              <RaisedButton
                labelStyle={{
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  fontFamily: 'childline',
                  whiteSpace: 'nowrap'
                }}
                style={{
                  padding: '0.8rem 0',
                  marginLeft: '1rem',
                  minWidth: '8rem'
                }}
                primary={true}
                label="I don't have YOTI"
              />
            </Link>
          </div>
        }
      </div>
    )
  }
}

export default YotiShareButton
