import React from 'react'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import SectionTitle from '../components/SectionTitle.js'

const OverAge = () => (
  <div>
    <Header />
    <SectionTitle
      heading="SORRY, WE CAN ONLY HELP IF YOU'RE UNDER 18"
      subheading='There are still lots of things you can do. Try contacting:'
    />
    <div className='instruction-list'>
      <ul>
        <li>The website to report the image or video</li>
        <li>The Police to help get it removed</li>
        <li>The Mix for help and advice</li>
        <li>Samaritans for confidential support</li>
      </ul>
    </div>
    <div className='what-now'>
      <h3>What can I do now?</h3>
      <p>
        Unfortunately we are not legally able to remove the online content if you are over 18. There are other options though:
      </p>
    </div>

    <div className='other-ops'>
      <div className='option'>
        <i className='identity small material-icons'>contacts</i>
        <a className='contact' target='_blank' rel='external' href='http://www.themix.org.uk/'>
          Contact The Mix
       </a>
      </div>
      <div className='option'>
        <i className='identity small material-icons'>contacts</i>
        <a className='contact' target='_blank' rel='external' href='http://www.samaritans.org/'>
          Contact Samaritans
        </a>
      </div>
    </div>
    <Footer />
  </div>
)

export default OverAge
