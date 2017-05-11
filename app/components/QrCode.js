import React from 'react'
import '../scss/style.scss'

const QrCode = (props) => (
  <div className='yoti-qr'>
    <span dangerouslySetInnerHTML={{__html: props.yoti.qrSvg}} />
  </div>
)

export default QrCode
