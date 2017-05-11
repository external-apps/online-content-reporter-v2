import React from 'react'
import { connect } from 'react-redux'

import QrCode from '../components/QrCode'
import * as yotiActions from '../actions/yoti'
import YotiShareButtons from '../components/YotiShareButtons'
import YotiDescription from '../components/YotiDescription'
import Header from '../components/Header'
import AgeInfo from '../components/AgeInfo'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import '../scss/style.scss'

const AgeCheck = (props) => {
  return (
    <div className='agecheck-body'>
      <Header />
      <SectionTitle
        heading='CONFIRM YOUR AGE'
        subheading="To remove an image or video, we just need to know your age. We can only remove this content if you're under 18."
      />
      <AgeInfo />
      <div className='yoti-info'> {
        props.yoti.showQr ? (
          <QrCode {...props} />
        ) : (
          <div>
            <YotiDescription />
            <YotiShareButtons {...props} />
          </div>
        )
      } </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { yoti: state.yoti }
}

const actionCreators = {
  ...yotiActions
}

export default connect(mapStateToProps, actionCreators)(AgeCheck)
