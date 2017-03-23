import React from 'react'
import { Link, browserHistory } from 'react-router'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'
import Footer from '../components/Footer'
import Launch from 'material-ui/svg-icons/action/launch'
import { connect } from 'react-redux'
import * as yotiActions from '../actions/yoti'
import cookie from 'react-cookie'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.mobileSetup = this.mobileSetup.bind(this)
  }

  componentWillMount () {
    var isMobileRE = /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android/i
    var isMobile = isMobileRE.test(navigator.userAgent) &&
      /Mobile/i.test(navigator.userAgent)
    if (isMobile) this.mobileSetup()

    const ageIsVerified = cookie.load('yotiVerifiedAge')
    if (ageIsVerified !== undefined && isMobile) {
      this.props.ageIsVerified()
      if (ageIsVerified === 'true') {
        cookie.remove('yotiVerifiedAge')
        browserHistory.push('/form')
      } else {
        cookie.remove('yotiVerifiedAge')
        browserHistory.push('/over-age')
      }
    }
  }

  mobileSetup () {
    const href = 'https://www.yoti.com/connect/3392788e-e529-4309-8ed7-54d7ac554055' // will
    this.props.setUpForMobile(href)
  }

  render () {
    return (
      <div className='home-body'>
        <div className='home-header'>
          <h1 className='home-title'>REPORT AN IMAGE OR VIDEO</h1>
          <h3>It's quick and easy to report - we can help</h3>
        </div>

        <div className='home-info'>
          <p>
            If you are under 18 and an explicit or nude picture or video of you has been sahred online, we can help you to get it removed. We'll need to confirm your age and where you've seen the image or video.
          </p>
          <p>
            If you're 18 or older, contact the website(s) where you've seen the image or video, or report it to the police.
          </p>
          <Link className='home-main-button' to='/age-check'>
            <RaisedButton className="btns-customized"
              labelStyle={{fontSize: '1.4rem', textTransform: 'none', fontFamily: 'childline'}}
              style={{ whiteSpace: 'nowrap', minWidth: '8rem'}}
              label='Report something'
              labelPosition='before'
              icon={<Launch />}
              primary={true} />
          </Link>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { yoti: state.yoti }
}

const actionCreators = {
  ...yotiActions
}

export default connect(mapStateToProps, actionCreators)(Home)
