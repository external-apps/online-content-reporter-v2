/* global MutationObserver */
import React from 'react'
import { connect } from 'react-redux'
import QrCode from '../components/QrCode'
import * as yotiActions from '../actions/yoti.js'
import YotiShareButtons from '../components/YotiShareButtons'
import YotiDescription from '../components/YotiDescription'
import Header from '../components/Header'
import AgeInfo from '../components/AgeInfo'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'

class AgeCheck extends React.Component {
  constructor (props) {
    super(props)
    const observer = new MutationObserver((mutation) => {
      if (mutation[0].type === 'childList') {
        const qrSvg = mutation[0].addedNodes[0].querySelector('#canvas').getAttribute('src')
        this.props.addQr(qrSvg)
        this.props.openQr()
      }
    })
    observer.observe(document.getElementById('yoti-hidden-button'), { childList: true })
  }

  render () {
    return (
      <div className='agecheck-body'>
        <Header />
        <SectionTitle
          heading='CONFIRM YOUR AGE'
          subheading="To remove an image or video, we just need to know your age. We can only remove this content if you're under 18."
          />
        <AgeInfo />
        <div className='yoti-info'> {
            this.props.yoti.showQr ? (
              <QrCode {...this.props} />
            ) : (
              <div>
                <YotiDescription />
                <YotiShareButtons
                  {...this.props}
                />
              </div>
            )
          } </div>
        <div className='other-options'>
          <i className='large material-icons'>info_outline</i>
          <span>
            If you are unable to create a YOTI account, talk to a <a href='https://www.childline.org.uk/get-support/1-2-1-counsellor-chat/'>Childline counsellor</a> for further options of how to report your image or video.
          </span>
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

export default connect(mapStateToProps, actionCreators)(AgeCheck)
