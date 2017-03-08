import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'
import PageTitle from '../components/PageTitle'
import ProgressBar from '../components/ProgressBar'
import Yoti from '../containers/Yoti'

const AgeCheckPage = () => (
  <div>
    <PageTitle heading='ARE YOU UNDER 18?' backgroundColor='title-container-light-blue' />
    <ProgressBar percentage='33' />

    <div className='age-responsive'>
      <div className='age-info-blue'>
        <p className='why-eighteen'>
           To remove explicit online content we will only ask for your age. Not even your name! You must be under 18 years old.
          <a className='link text-blue' href='https://www.iwf.org.uk/what-we-do' target='_blank'>
             Find out why here
             <i className='tiny material-icons'>info_outline</i>
          </a>
        </p>
      </div>

      <div className='age-info-orange'>
        <i className='age-page small material-icons'>info_outline</i>
        <a className='link text-white' href='https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/' target='_blank'>
          What can I do if I am over 17?
        </a>
      </div>
    </div>

    <Yoti />

    <Link to='/form'>
      <p>Take me to form</p>
    </Link>
  </div>
)

export default AgeCheckPage
