import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import '../scss/style.scss'
import ShareYoti from './Share-yoti'
import QrCode from '../components/QrCode'

class AgeCheck extends React.Component {

  renderYotiDescription() {
    if(this.props.qr.qrSvg) {
      return (
        <div className='yoti-info '>
          <div className='yoti-intro'>
            <h3>YOTI - CONFIDENTIALLY VERIFY YOUR AGE</h3>
            <img src='./imgs/yoti-logo.svg' alt='yoti logo' />
          </div>
          <p className='yoti-description'>
            Yoti empowers you to take back control over your identity. If you don't have a Yoti digital identity, please create one <a className='link' href='www.yoti.com/'>here</a> and use it to verify you are under 17.
          </p>
        </div>
      )
    }
    return (
      <div className='yoti-info '>
        <QrCode {...this.props} />
        <p className='scan-me'>
          SCAN ME WITH YOTI
          <img src='./imgs/yoti-logo.svg' className='popup-yoti' alt='yoti logo' />
        </p>
      </div>
    )
  }

  render () {
    return (
      <div>
        <div className='age-title'>
          <h1 className='page-title'>ARE YOU UNDER 18?</h1>
        </div>
        <div className='progress'>
         <div className='determinate1'></div>
      </div>
        <div className='age-responsive'>
          <div className='age-info-blue'>
            <p className='why-eighteen'>
               To remove explicit online content we will only ask for your age. Not even your name! You must be under 18 years old.
              <a className='link text-blue' href='https://www.iwf.org.uk/what-we-do' target='_blank'>
                 Find out why here
                 <i className='tiny material-icons'>info_outline</i>
              </a>
            </p>
          </div>

          <div className='age-info-orange'>
            <i className='age-page small material-icons'>info_outline</i>
            <a className='link text-white' href='https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/' target='_blank'>
              What can I do if I am over 17?
            </a>
          </div>
        </div>


          {this.renderYotiDescription()}

        <ShareYoti />

        <Link to='/form'>
          <p>Take me to form</p>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { qr: state.qr }
}

export default connect(mapStateToProps)(AgeCheck)
