import React from 'react'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

const QrCode = (props) => (
  <div>
    <div className='scan-back-button' onClick={() => props.closeQr()}>
      <ArrowBack />
      <span>Back</span>
    </div>
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
