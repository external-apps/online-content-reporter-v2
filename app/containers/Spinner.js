import React from 'react'
import Loader from 'halogen/PulseLoader'
import { connect } from 'react-redux'

class Spinner extends React.Component {
  render () {
    return (
      <div>
        {this.props.spinner.showSpinner &&
          <div className='partial-spinner'>
            <Loader color='#00A0CF' className='spinner-loader' />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { spinner: state.spinner }
}

export default connect(mapStateToProps)(Spinner)
