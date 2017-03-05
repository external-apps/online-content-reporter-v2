import React from 'react'
import '../scss/style.scss'

const QrCode = (props) => (
  <div className='qr-code-output' dangerouslySetInnerHTML={{__html: props.qr.qrSvg}}>
  </div>
)

export default QrCode
