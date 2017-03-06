import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12,
  labelColor: "#632c7a",
  backgroundColor:"#632c7a"
};


const Home = () => (
  <div className='home'>
    <div className='landing-header'>
      <div className='landing-header__info'>
      <p>chidline</p>
      <p className='landing-title__phone'>
        <a className='link' href="tel:+448001111">Call 0800 1111</a>
        <i className="tiny material-icons whi">phonelink_ring</i>
      </p>
      </div>
      <div>

        <h1 className='page-title'>REPORT ONLINE CONTENT</h1>
      </div>
      <h3>Anonymously and confidentially</h3>
    </div>

    <div className='landing-info'>
      <h4 className="section-title">YOU HAVE ALREADY SHARED PHOTOS – WHAT NOW?</h4>
      <p>
        If you’re under 18 and an indecent or nude pic of you is posted online, that is illegal. But we can <a href='https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/'>help</a>. Reporting is quick, easy and completely anonymous.
      </p>
    </div>

    <div className='landing-logo'>
      <img className='landing-logo__img' src="imgs/iwf-logo.png" alt="IWF logo"/>
    </div>

    <div className='landing-logo'>
      <img className='landing-logo__img' src="imgs/childline-logo.jpg" alt="childline logo"/>
    </div>
    <RaisedButton label="Verify age" labelColor= {"#632c7a"} />

    <Link className='landing-btn' to='/age-check'>
      <p>Prove Age Here</p>
    </Link>

    <Link to='/over-age'>
      <p>Go to over age here</p>
    </Link>
  </div>
)

export default Home
