import React from 'react'
import { Link, browserHistory } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import Launch from 'material-ui/svg-icons/action/launch'
import { connect } from 'react-redux'
import cookie from 'react-cookie'
import jwtDecode from 'jwt-decode'

import { MAXIMUM_REPORTER_AGE } from '../../constants/age.js'
import '../scss/style.scss'
import * as yotiActions from '../actions/yoti'
import Footer from '../components/Footer'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.mobileSetup = this.mobileSetup.bind(this)
  }

  componentWillMount () {
    const { isMobile } = this.props.yoti

    const ageToken = localStorage.getItem('ageToken')
    const notOverAge = ageToken
      ? jwtDecode(ageToken).age <= MAXIMUM_REPORTER_AGE
      : false

    if (ageToken !== null && isMobile) {
      localStorage.removeItem('ageToken')

      if (notOverAge) {
        browserHistory.push('/form')
      } else {
        browserHistory.push('/over-age')
      }
    }
  }

  mobileSetup () {
    const href = `https://www.yoti.com/connect/${YOTI_APP_ID}`
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
            If you are under 18 and an explicit or nude picture or video of you has been shared online, we can help you to get it removed. We'll need to confirm your age and where you've seen the image or video.
          </p>
          <p>
            If you're 18 or older, contact the website(s) where you've seen the image or video, or report it to the police.
          </p>
          <Link className='home-main-button' to='/age-check'>
            <RaisedButton className='btns-customized'
              labelStyle={{fontSize: '1.4rem', textTransform: 'none', fontFamily: 'childline'}}
              style={{whiteSpace: 'nowrap', minWidth: '8rem'}}
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
