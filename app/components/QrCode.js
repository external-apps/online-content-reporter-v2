import React from 'react'
import '../scss/style.scss'

const QrCode = (props) => (
  <span dangerouslySetInnerHTML={{__html: props.yoti.qrSvg}} />
)

export default QrCode
