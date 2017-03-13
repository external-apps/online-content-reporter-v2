import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'
import Footer from './Footer'
import Launch from 'material-ui/svg-icons/action/launch'

const Home = () => (
  <div className='home-body'>
    <div className='home-header'>
      <h1 className='home-title'>REPORT CONCERN WITH ONLINE CONTENT</h1>
      <h3>It's anonymous and confidential.</h3>
    </div>

    <div className='home-info'>
      <h4 className='section-title'>YOU HAVE ALREADY SHARED PHOTOS – WHAT NOW?</h4>
      <p>
        If you’re under 18 and an indecent or nude pic of you is posted online, that is illegal. But we can <a className='link' href='https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/'>help</a>. Reporting is quick, easy and completely anonymous.
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
