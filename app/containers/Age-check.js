import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'

class AgeCheck extends React.Component {
  render () {
    return (
      <div>
        <div className='age-title'>
          <h1 className='title'>ARE YOU UNDER 18?</h1>
        </div>
        <div className='progress'>
         <div className='determinate'></div>
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

        <div className='yoti-info '>
          <div className='qr-code-output' id='yoti-info__content'>
            <div className='yoti-intro'>
              <h3>YOTI - CONFIDENTIALLY VERIFY YOUR AGE</h3>
              <img src='./imgs/yoti-logo.svg' alt='yoti logo' />
            </div>
            <p className='yoti-description'>
              Yoti empowers you to take back control over your identity. If you don't have a Yoti digital identity, please create one <a className='link' href='www.yoti.com/'>here</a> and use it to verify you are under 17.
            </p>
          </div>
          <p className='section-title'>
            SCAN ME WITH YOTI
            <img src='./imgs/yoti-logo.svg' className='popup-yoti' alt='yoti logo' />
          </p>
        </div>

        <span className='yoti-btn' id='yotiBtn'>
          <a
            className='btn yoti-connect learn-more btn-primary'
            data-target='embed'
            data-yoti-scenario-id
            data-yoti-application-id
            data-yoti-type='inline'
            data-size='medium'>
            Share your age using Yoti
          </a>
        </span>

        <Link to='/form'>
          <p>Take me to form</p>
        </Link>
      </div>
    )
  }
}

export default AgeCheck
