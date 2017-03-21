import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'
import Footer from '../components/Footer'
import Launch from 'material-ui/svg-icons/action/launch'
import { connect } from 'react-redux'
import * as yotiActions from '../actions/yoti'
// import axios from 'axios'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.mobileSetup = this.mobileSetup.bind(this)
  }

  componentWillMount () {
    /*
      1. slice the query from url
      2. if under18 true--> send to forms and initialize state
      browserHistory.push('/forms')

      3. if under18 false ---> send to over-age
      browserHistory.push('over-age')
      4. if there are no query parameters do nothing
    */
    var isMobileRE = /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android/i
    var isMobile = isMobileRE.test(navigator.userAgent) &&
      /Mobile/i.test(navigator.userAgent)
    if (isMobile) this.mobileSetup()
  }

  mobileSetup () {
    //const href = 'https://www.yoti.com/connect/3392788e-e529-4309-8ed7-54d7ac554055' //will
    const href = 'https://www.yoti.com/connect/f6999919-d114-43c0-bdf0-ae2e1a89ff73'
    this.props.setUpForMobile(href)

    // Need Yoti api to fix before implementing this.
    // var config = {
    //   headers: {'X-Requested-With': 'XMLHttpRequest', 'content-type': 'application/json'}
    // }
    // axios.get('https://www.yoti.com/qr/5be10ae7-af29-40b0-8d33-a0fb90cb0e88', config)
    //   .then((res) => {
    //     const href = `${res.data.qrCodeUrl}?callback=${res.data.callbackUrl}&id=${res.data.application.id}&mobile=true`
    //     this.props.setUpForMobile(href)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
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
