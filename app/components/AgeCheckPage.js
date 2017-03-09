import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'
import PageTitle from '../components/PageTitle'
import ProgressBar from '../components/ProgressBar'
import Yoti from '../containers/Yoti'

const AgeCheckPage = () => (
  <div>
    <PageTitle heading='ARE YOU UNDER 18?' backgroundColor='blue' />
    <ProgressBar percentage='33' />
    <div className='age-info-1'>
      <p>
        To remove explicit online content we will only ask for your age. Not even your name! You must be under 18 years old.
        <a href='https://www.iwf.org.uk/what-we-do' target='_blank'> Find out why here
          <i className='tiny material-icons'>info_outline</i>
        </a>
      </p>
    </div>

    <div className='age-info-2'>
      <i className='small material-icons'>info_outline</i>
      <a href='https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/' target='_blank'>
        What can I do if I am over 17?
      </a>
    </div>

    <Yoti />

    <Link className='action-button' to='/form'>
      <p>Take me to form</p>
    </Link>
    <Link className='action-button' to='/form-email'>
      <p>Take me to formEmail</p>
    </Link>
  </div>
)

export default AgeCheckPage
