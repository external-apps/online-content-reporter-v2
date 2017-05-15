import React from 'react'
import '../scss/style.scss'

const QrCode = (props) => (
  <div>
    <span
      data-yoti-scenario-id={YOTI_SCENARIO_ID}
      data-yoti-type='inline'
      className='qr-code'>
    </span>
    <p className='scan-me'>
      SCAN ME WITH YOTI
      <img src='assets/imgs/yoti-logo.svg' className='popup-yoti' alt='yoti logo' />
    </p>
  </div>
)

export default QrCode
