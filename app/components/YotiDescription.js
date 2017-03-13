import React from 'react'
import QrCode from './QrCode'
import '../scss/style.scss'

const YotiDescription = (props) => {
  if (!props.yoti.haveQr) {
    return (
      <div className='yoti-description-container'>
        <h3 className='yoti-description-title'>CONFIDENTIALLY VERIFY YOUR AGE</h3>
        <span className='yoti-description'>
          <img src='./imgs/yoti-logo.svg' alt='yoti logo' />
          <p>We use YOTI to verify your age. Yoti empowers you to take back control over your identity.</p>
        </span>
        <p className='yoti-instructions'>
          In a one step process we are going to identify your age. If you don't already have a YOTI digital identity, please create one on <a className='link' href='www.yoti.com/'>YOTI's website</a>. Once you are ready, click the button below.
        </p>
      </div>
    )
  }
  return (
    <div className='yoti-qr'>
      <QrCode {...props} />
    </div>
  )
}

export default YotiDescription
