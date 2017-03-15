import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'
import Footer from '../components/Footer'
import Launch from 'material-ui/svg-icons/action/launch'
import { connect } from 'react-redux'
import * as yotiActions from '../actions/yoti'

class Home extends React.Component {
  componentWillMount () {
    var isMobileRE = /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android/i
    var isMobile = isMobileRE.test(navigator.userAgent) &&
      /Mobile/i.test(navigator.userAgent)
    if (isMobile) this.props.setUpForMobile('#')
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
            <RaisedButton
              labelStyle={{fontSize: '1.4rem', textTransform:'none', fontFamily: 'childline'}}
              style={{padding: '0.8rem 0', whiteSpace: 'nowrap', minWidth: '8rem'}}
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
