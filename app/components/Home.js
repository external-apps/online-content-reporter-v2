import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'
import Footer from './Footer'
import Launch from 'material-ui/svg-icons/action/launch'

const Home = () => (
  <div className='home-body'>
    <div className='home-header'>
      <h1 className='home-title'>REPORT AN IMAGE OR VIDEO</h1>
      <h3>It's quick and easy to report - we can help</h3>
    </div>

    <div className='home-info'>
      <h4 className='section-title'>YOU HAVE ALREADY SHARED PHOTOS – WHAT NOW?</h4>
      <p>
        You can use this app if you're under 18. We'll need to confirm your age and where you've seen the image or video.
      </p>
      <p>
        If you're 
        <a className='link' href='https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/'>help</a>.
      </p>
      <Link className='home-main-button' to='/age-check'>
        <RaisedButton
          labelStyle={{fontSize: '1.4rem', textTransform:'none', fontFamily: 'childline'}}
          style={{padding:'0.8rem'}}
          label='Report Content'
          labelPosition='before'
          icon={<Launch />}
          primary={true} />
      </Link>
    </div>
    <Footer />
  </div>
)

export default Home
