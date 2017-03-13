import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'

const Home = () => (
  <div className='home-body'>
    <div className='home-header'>
      <div className='home-header-info'>
        <p>childline</p>
        <p className='home-header-phone'>
          <a className='link' href='tel:+448001111'>Call 0800 1111</a>
          <i className='tiny material-icons whi'>phonelink_ring</i>
        </p>
      </div>
      <h1 className='home-title'>REPORT ONLINE CONTENT</h1>
      <h3>Anonymously and confidentially</h3>
    </div>

    <div className='home-info'>
      <h4 className='section-title'>YOU HAVE ALREADY SHARED PHOTOS – WHAT NOW?</h4>
      <p>
        If you’re under 18 and an indecent or nude pic of you is posted online, that is illegal. But we can <a href='https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/'>help</a>. Reporting is quick, easy and completely anonymous.
      </p>
    </div>

    <div className='home-logos'>
      <img src='imgs/iwf-logo.png' alt='IWF logo' />
      <img src='imgs/childline-logo.jpg' alt='childline logo' />
    </div>

    <Link className='action-button' to='/age-check'>
      <RaisedButton label='Report Content' primary={true} />
    </Link>

    <Link to='/over-age'>
      <p>Go to over age here</p>
    </Link>
  </div>
)

export default Home
