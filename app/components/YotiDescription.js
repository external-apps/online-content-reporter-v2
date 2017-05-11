import React from 'react'

const YotiDescription = (props) => {
  return (
    <div className='yoti-description-container'>
      <h3 className='yoti-description-title'>VERIFY YOUR ARE USING YOTI</h3>
      <span className='yoti-description'>
        <img src='/assets/imgs/yoti-logo.svg' alt='yoti logo' />
        <p>If you've already got a YOTI account, click the button below and scan our QR code using your YOTI app.</p>
      </span>
      <p className='yoti-instructions'>
        If not, it's easy to <a className='link' href='www.yoti.com/'>sign up</a> using the YOTI app or website. YOTI lets you safely share your details online - Just click below to create your account.
      </p>
    </div>
  )
}

export default YotiDescription
