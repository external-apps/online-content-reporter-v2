import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as yotiActions from '../actions/yoti'
import YotiShareButton from '../components/YotiShareButton'
import YotiDescription from '../components/YotiDescription'
import RaisedButton from 'material-ui/RaisedButton'
import '../scss/style.scss'

class Yoti extends React.Component {
  renderGetYotiBtn () {
    if (!this.props.yoti.haveQr) {
      return (
        <Link to='/www.yoti.com/'>
          <RaisedButton
            labelStyle={{
              fontSize: '1.1rem',
              textTransform: 'none',
              fontFamily: 'childline',
              whiteSpace: 'nowrap'
            }}
            style={{
              padding: '0.8rem 0',
              marginLeft: '1rem',
              minWidth: '8rem'
            }}
            primary={true}
            label="I don't have YOTI"
          />
        </Link>
      )
    }
    return
  }

  renderScanMe () {
    if (this.props.yoti.haveQr) {
      return (
        <p className='scan-me'>
          SCAN ME WITH YOTI
          <img src='./imgs/yoti-logo.svg' className='popup-yoti' alt='yoti logo' />
        </p>
      )
    }
    return(
      <p></p>
    )
  }

  render () {
    return (
      <div className='yoti-info'>
        <YotiDescription {...this.props} />
        <div className='yoti-btns'>
          <YotiShareButton {...this.props} />
          {this.renderGetYotiBtn()}
        </div>
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
