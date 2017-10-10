import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import Launch from 'material-ui/svg-icons/action/launch'
import { connect } from 'react-redux'

import { trackClick } from '../tracking.js'
import * as yotiActions from '../actions/yoti.js'
import Footer from '../components/Footer.js'

class Home extends React.Component {
  render () {
    return (
      <div className='home-body'>
        <div className='home-header'>
          <h1 className='home-title'>REPORT REMOVE</h1>
          <h3>Nude image of you online? We can help you take it down.</h3>
        </div>
        <div className='home-info-container'>
          <div className='home-info'>
            <p>
              Report Remove is here to help young people, under 18, confidentially remove nude images of themselves from the internet. 
            </p>
            <p>
              Follow these 3 simple steps:
            </p>
            <ol>
              <li>Download Yoti – The easiest, most secure way to prove identity. Take a selfie and then a photo of your ID, like a passport, to verify it’s you.</li>
              <li>Report: Give details of the nude image and where it could be online (don’t worry if you don’t know all the details)</li> 
              <li>Remove: We’ll then review the details and the IWF will work to have it removed</li> 
            </ol>
            <p>
              The IWF (Internet Watch Foundation) use image hashing technology. This means each photo has its very own ID and using this ID it can identify the image, and have it removed, wherever it is uploaded to the internet.
            </p>
            <p>
              If you're 18 or older, contact the website(s) where you've seen the image or video, or report it to the police.
            </p>
            <Link className='home-main-button' to='/age-check'>
              <RaisedButton className='btns-customized'
                labelStyle={{fontSize: '1.4rem', textTransform: 'none', fontFamily: 'childline'}}
                style={{whiteSpace: 'nowrap', minWidth: '8rem'}}
                label='Report something'
                labelPosition='before'
                icon={<Launch />}
                primary
                onClick={(e) => {
                  trackClick('Navigation', 'Report Something')
                }} />
            </Link>
            <p>
              Not sure if making a report is right for you? We want to hear your views so that we can make reporting 
              easier and safer. Tell us what you think anonymously here.  
              <a href="https://www.surveymonkey.co.uk/r/CLReportingSurvey">https://www.surveymonkey.co.uk/r/CLReportingSurvey</a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { yoti: state.yoti }
}

const actionCreators = {
  ...yotiActions
}

export default connect(mapStateToProps, actionCreators)(Home)
