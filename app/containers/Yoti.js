import React from 'react'
import { connect } from 'react-redux'

import QrCode from '../components/QrCode'
import * as yotiActions from '../actions/yoti'
import YotiShareButtons from '../components/YotiShareButtons'
import YotiDescription from '../components/YotiDescription'
import '../scss/style.scss'

class Yoti extends React.Component {
  render () {
    return (
      <div className='yoti-info'> {
        this.props.yoti.showQr ? (
          <QrCode {...this.props} />
        ) : (
          <div>
            <YotiDescription />
            <YotiShareButtons {...this.props} />
          </div>
        )
      } </div>
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
