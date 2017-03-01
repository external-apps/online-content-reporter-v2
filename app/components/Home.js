import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'

const Home = () => (
  <div className='home'>
  <div className='landing-title'>
      <div>
        <p>chidline</p>
        <span className='landing-title__phone'>
          <a className='link' href="tel:+448001111">Call 0800 1111</a>
          <i className="tiny material-icons whi">phonelink_ring</i>
        </span>
        <h1 className='title'>REPORT ONLINE CONTENT</h1>
      </div>
      <h3>Anonymously and confidentially</h3>
    </div>

    <div className='landing-info'>
      <h4>YOU HAVE ALREADY SHARED PHOTOS – WHAT NOW?</h4>
      <p>
        If you’re under 18 and an indecent or nude pic of you is posted online, that is illegal. But we can <a href='https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/'>help</a>. Reporting is quick, easy and completely anonymous.
      </p>
    </div>


    <div className='landing-logo'>
      <img className='landing-logo__img' src="images/iwf-logo.png" alt="IWF logo"/>
    </div>

    <div className='landing-logo'>
      <img className='landing-logo__img' src="images/childline-logo.jpg" alt="childline logo"/>
    </div>

    <div className='landing-btn'>
      <a className="waves-effect waves-light btn" href='/age-check.html'>
        Report Content
        <i className="small material-icons whi">launch</i>
      </a>
    </div>
    <Link to='/age-check'>
      <p>Prove Age Here</p>
    </Link>
    <Link to='/over-age'>
      <p>be overAge</p>
    </Link>
  </div>
)

export default Home
