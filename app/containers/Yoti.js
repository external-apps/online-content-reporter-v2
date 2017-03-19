import React from 'react'
import { connect } from 'react-redux'
import * as yotiActions from '../actions/yoti'
import YotiShareButton from '../components/YotiShareButton'
import YotiDescription from '../components/YotiDescription'
import '../scss/style.scss'

class Yoti extends React.Component {
  renderScanMe () {
    if (this.props.yoti.showQr) {
      return (
        <p className='scan-me'>
          SCAN ME WITH YOTI
          <img src='assets/imgs/yoti-logo.svg' className='popup-yoti' alt='yoti logo' />
        </p>
      )
    }
    return (
      <p></p>
    )
  }

  render () {
    return (
      <div className='yoti-info'>
        <YotiDescription {...this.props} />
        <YotiShareButton {...this.props} />
        {this.renderScanMe()}
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

export default connect(mapStateToProps, actionCreators)(Yoti)
