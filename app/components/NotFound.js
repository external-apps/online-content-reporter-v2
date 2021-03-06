import React from 'react'

import Header from '../components/Header.js'
import Footer from './Footer.js'

const NotFound = () =>
  <div className='notfound'>
    <Header />
    <div className='notfound-container'>
      <div className='notfound-info'>
        <h3>Sorry, we can't find this page</h3>
        <p>You might have clicked on an old or broken link.</p>
        <p>Try searching our site or following the links around this page to find what you're looking for. If you need to talk to someone, you can call 0800 1111 or <a href='https://childline.org.uk/get-support/1-2-1-counsellor-chat/' alt='counsellor help'>talk to a counsellor now.</a></p>
      </div>
    </div>
    <Footer />
  </div>

export default NotFound
