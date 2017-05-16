import React from 'react'
import '../scss/style.scss'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

const QrCode = (props) => (
  <div>
    <span className='scan-back-button' onClick={() => props.closeQr()}>
      <ArrowBack />
      Back
    </span>
    <div className='yoti-qr'>
      <img src={props.yoti.qrSvg} />
    </div>
    <p className='scan-me'>
      SCAN ME WITH YOTI
      <img src='assets/imgs/yoti-logo.svg' className='popup-yoti' alt='yoti logo' />
    </p>
  </div>
)

export default QrCode
