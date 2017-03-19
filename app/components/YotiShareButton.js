import React from 'react'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'
import { browserHistory } from 'react-router'
import axios from 'axios'

class YotiShareButton extends React.Component {
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
    }
  }

  componentWillUnmount () {
    this.props.closeQr()
  }

  getQr () {
    axios.get('/get-qr')
    .then(res => {
      console.log('GOT QR')
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
      res.data.isUnder18 ? browserHistory.push('/form') : browserHistory.push('/over-age')
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
    console.log('PROPS', this.props)
    const clickHandler = this.props.yoti.isMobile ? null/* (this.verifyAgeMobile) */ : (this.props.openQr)
    return (
      <div>
        {!this.props.yoti.showQr &&
          <div className='yoti-btns'>
            <RaisedButton
              labelStyle={this.props.yoti.buttonLabelStyle}
              style={this.props.yoti.buttonStyle}
              className='margin-right'
              primary={true}
              href={this.props.yoti.href}
              onClick={clickHandler}
              target={this.props.yoti.target}
              label='I have YOTI'
            />
            <a href='http://www.yoti.com'>
              <RaisedButton
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

export default YotiShareButton
