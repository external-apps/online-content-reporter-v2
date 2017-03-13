import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'
import PageTitle from '../components/PageTitle'
import ProgressBar from '../components/ProgressBar'
import Yoti from '../containers/Yoti'
import Footer from './Footer'

const AgeCheckPage = () => (
  <div className='agecheck-body'>
    <PageTitle heading='ARE YOU UNDER 18?' backgroundColor='blue' />
    <ProgressBar percentage='33' />
    <div className='age-info'>
      <div className='age-info-subcontainer margin-right'>
        <h2>How it works</h2>
        <p>
          The only information we need from you is your age. Not even your name! You must be under 18 years old for us to help.
          <a href='https://www.iwf.org.uk/what-we-do' target='_blank'>Find out why here.</a>
        </p>
      </div>
      <div className='age-info-subcontainer'>
        <h2>What happens to the information I provide</h2>
        <p>
          Once your age is verified, we will securely send the location of the online content to IWF (<a href='https://www.iwf.org.uk/what-we-do' target='_blank'>Internet Watch Foundation</a>).
        </p>
      </div>
    </div>

    <div className='age-overage'>
      <i className='small material-icons'>info_outline</i>
      <a href='https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/' target='_blank'>
        What can I do if I am over 17?
      </a>
    </div>

    <Yoti />
    <Footer />
    <Link className='action-button' to='/form'>
      <p>Take me to form</p>
    </Link>
  </div>
)

export default AgeCheckPage
