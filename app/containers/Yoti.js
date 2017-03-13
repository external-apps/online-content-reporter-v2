import React from 'react'
import { connect } from 'react-redux'
import * as yotiActions from '../actions/yoti'

import YotiShareButton from '../components/YotiShareButton'
import YotiDescription from '../components/YotiDescription'
import '../scss/style.scss'

class Yoti extends React.Component {
  render () {
    return (
      <div className='yoti-info'>
        <YotiDescription {...this.props} />
        <YotiShareButton {...this.props} />
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
