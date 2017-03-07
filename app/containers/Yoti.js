import React from 'react'
import { connect } from 'react-redux'
import * as qrActions from '../actions/qr'

import YotiShareButton from '../components/YotiShareButton'
import YotiDescription from '../components/YotiDescription'
import '../scss/style.scss'

class Yoti extends React.Component {
  render () {
    return (
      <div>
        <YotiDescription {...this.props} />
        <YotiShareButton {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { qr: state.qr }
}

const actionCreators = {
  ...qrActions
}

export default connect(mapStateToProps, actionCreators)(Yoti)
