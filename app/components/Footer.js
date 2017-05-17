import React from 'react'

const Footer = () => (
  <div className='footer'>
    <div className='footer-info'>
      <p>This service is operated by the <a href='https://www.iwf.org.uk/what-we-do' rel='external' target='_blank'> Internet Watch Foundation</a> (IWF) and brought to you by <a href='https://www.childline.org.uk' target='_blank' rel='external'>Childline</a>. We use the <a href='https://www.yoti.com/' target='_blank' rel='external'>YOTI</a> app to verify your identity securely.</p>
    </div>
    <div className='footer-logos'>
      <img className='footer-logo-iwf' src='/assets/imgs/iwf-logo.png' alt='IWF logo' />
      <img className='footer-logo-childline' src='/assets/imgs/footer-2.png' alt='Childline logo' />
    </div>
  </div>
)

export default Footer
