import React from 'react'
import '../scss/style.scss'

const Footer = () => (
  <div className='footer'>
    <div className='footer-info'>
      <p>This service is operated by <a href='https://www.iwf.org.uk/what-we-do' target='_blank'>Internet Watch Foundation</a> (IWF) brought to you by <a href='https://www.childline.org.uk'>Childline</a>. We use the <a href='https://www.yoti.com/'>YOTI</a> App to verify your identiy securely.</p>
    </div>
    <div className='footer-logos'>
      <img src='imgs/iwf-logo.png' alt='IWF logo' />
      <div className='childline-stamp'>
        <h1>childline</h1>
        <h5>ONLINE, ON THE PHONE, ANYTIME</h5>
        <p>childline.org.uk | 0800 1111</p>
      </div>
    </div>
  </div>
)

export default Footer
