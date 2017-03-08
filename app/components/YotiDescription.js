import React from 'react'
import QrCode from './QrCode'
import '../scss/style.scss'

const YotiDescription = (props) => {
  if (!props.yoti.haveQr) {
    return (
      <div className='yoti-info'>
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
      <QrCode {...props} />
    </div>
  )
}

export default YotiDescription
