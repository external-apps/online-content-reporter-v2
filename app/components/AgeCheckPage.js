import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'
import Header from '../components/Header'
import Yoti from '../containers/Yoti'
import Footer from './Footer'
import SectionTitle from '../components/SectionTitle'
import InfoIcon from 'material-ui/svg-icons/action/info-outline'

const AgeCheckPage = () => (
  <div className='agecheck-body'>
    <Header />
    <SectionTitle
      heading='ARE YOU UNDER 18?'
      subheading="In this step we just need to verify that you are under 18 years old. Don't worry, it's quick and easy with YOTI App."
    />
    <div className='age-info'>
      <div className='age-info-subcontainer margin-right'>
        <h3>Why must I prove my Age</h3>
        <p>
          The only information we need from you is your age. Not even your name! You must be under 18 years old for us to help.
        </p>
        <a href='https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/' target='_blank'>
          What can I do if I am over 17?
        </a>
      </div>
      <div className='age-info-subcontainer'>
        <h3>How it works</h3>
        <p>
          Once your age is verified, we will securely send the location of the online content to IWF (<a href='https://www.iwf.org.uk/what-we-do' target='_blank'>Internet Watch Foundation</a>) who will handle the report.
        </p>
      </div>
    </div>


    <Yoti />
    <Footer />
    <Link className='action-button' to='/form'>
      <p>Take me to form</p>
    </Link>
  </div>
)

export default AgeCheckPage
