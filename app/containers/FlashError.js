import React from 'react'
import { connect } from 'react-redux'
import * as flashActions from '../actions/flash.js'

const errorMessage = (message) => {
  switch (message) {
    case 'age-error':
      return 'There was an error verifying your age. Please try again or contact childline.'
    case 'email-error':
      return 'There was an error submitting your form, please try again or contact childline.'
    case 'over-age-error':
      return 'Sorry. You appear to be over 18.'
    case 'unverified-error':
      return 'You need to verify your age before submitting a report.'
    default:
      return 'Oops, something went wrong. Sorry.'
  }
}

class FlashError extends React.Component {
  render () {
    return (
      <div className='flash-container'>
        <div className={this.props.flash.showFlash ? 'flash flash-show' : 'flash flash-hide'}>
          <p className='flash-message'>{errorMessage(this.props.flash.errorMessage)}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { flash: state.flash }
}

const actionCreators = {
  ...flashActions
}

export default connect(mapStateToProps, actionCreators)(FlashError)
