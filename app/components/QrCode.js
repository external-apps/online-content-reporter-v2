import React from 'react'
import '../scss/style.scss'

const QrCode = (props) => (
  <span dangerouslySetInnerHTML={{__html: props.qr.qrSvg}} />
)

export default QrCode
