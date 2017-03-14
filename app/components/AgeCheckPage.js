import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'
import Header from '../components/Header'
import Yoti from '../containers/Yoti'
import Footer from './Footer'
import SectionTitle from '../components/SectionTitle'

const AgeCheckPage = () => (
  <div className='agecheck-body'>
    <Header />
    <SectionTitle
      heading='CONFIRM YOUR AGE'
      subheading="To remove an image or video, we just need to know your age. We can only remove this content if you're under 18."
    />
    <div className='age-info'>
      <h3>What can I do if I am over 17?</h3>
      <p>
        If you're 18 or older, contact the website(s) where you've seen the image or video, or report it to the police.
      </p>
    </div>
    <Yoti />
    <Footer />
    <Link className='action-button' to='/form'>
      <p>Take me to form</p>
    </Link>
  </div>
)

export default AgeCheckPage
