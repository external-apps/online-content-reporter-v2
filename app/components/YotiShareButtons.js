import React from 'react'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'
import { browserHistory } from 'react-router'
import axios from 'axios'

class YotiShareButtons extends React.Component {
  constructor (props) {
    super(props)
    this.getQr = this.getQr.bind(this)
    this.listenForToken = this.listenForToken.bind(this)
    this.yotiRedirect = this.yotiRedirect.bind(this)
    // this.verifyAgeMobile = this.verifyAgeMobile.bind(this)
  }

  componentWillMount () {
    if (!this.props.yoti.isMobile) {
      this.getQr()
      this.props.closeQr()
    }
  }

  getQr () {
    axios.get('/get-qr')
    .then(res => {
      this.props.addQr(res.data.svg)
      this.listenForToken(res.data.proto, res.data.url)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  listenForToken (proto, url) {
    var host = 'wss://api.yoti.com/api/v1/connect-sessions/' + proto
    var socket = new WebSocket(host)
    socket.onopen = () => {
      socket.send(JSON.stringify({subscription: proto}))
    }
    socket.onmessage = (msg) => {
      this.props.ageIsVerified()
      var data = JSON.parse(msg.data)
      switch (data.status) {
        case 'COMPLETED' : {
          this.yotiRedirect(data.token)
        }
      }
    }
  }

  yotiRedirect (token) {
    axios.get(`/thankyou?token=${token}`)
    .then(res => {
      if (res.data.isUnder18) {
        browserHistory.push('/form')
      } else browserHistory.push('/over-age')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // verifyAgeMobile (href) {
  //   axios.get(href)
  //   .then(res => {
  //     res.data.isUnder18 ? browserHistory.push('/form') : browserHistory.push('/over-age')
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }

  render () {
    const clickHandler = this.props.yoti.isMobile ? null : (this.props.openQr)
    return (
      <div>
        {!this.props.yoti.showQr &&
          <div className='yoti-btns'>
            <a href={this.props.yoti.href} target={this.props.yoti.target}>
              <RaisedButton
              labelStyle={this.props.yoti.buttonLabelStyle}
              style={this.props.yoti.buttonStyle}
                className='margin-right btns-customized'
                primary={true}
                onClick={clickHandler}
                label='I have YOTI'
              />
            </a>
            <a href='http://www.yoti.com' target='_blank'>
              <RaisedButton
                className="btns-customized"
                labelStyle={this.props.yoti.buttonLabelStyle}
                style={this.props.yoti.buttonStyle}
                primary={true}
                label="I don't have YOTI"
              />
            </a>
          </div>
        }
      </div>
    )
  }
}

export default YotiShareButtons
