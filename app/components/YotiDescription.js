import React from 'react'
import QrCode from './QrCode'
import '../scss/style.scss'
import YotiVerify from './YotiVerify'

const YotiDescription = (props) => {
  if (!props.yoti.showQr) {
    return (
      <YotiVerify />
    )
  }
  return (
    <div className='yoti-qr'>
      <QrCode {...props} />
    </div>
  )
}

export default YotiDescription
