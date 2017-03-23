import React from 'react'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'

class YotiShareButtons extends React.Component {
  componentWillMount () {
    if (!this.props.yoti.isMobile) {
      this.props.closeQr()
    }
  }

  render () {
    const clickHandler = this.props.yoti.isMobile ? null : (this.props.openQr)
    return (
      <div>
        {!this.props.yoti.showQr &&
          <div className='yoti-btns'>
            <a href={this.props.yoti.href} target={this.props.yoti.target}>
              <RaisedButton
              labelStyle={this.props.yoti.buttonLabelStyle}
              style={this.props.yoti.buttonStyle}
                className='margin-right btns-customized btns-small'
                primary={true}
                onClick={clickHandler}
                label='I have YOTI'
              />
            </a>
            <a href='http://www.yoti.com' target='_blank'>
              <RaisedButton
                className="btns-customized btns-small"
                labelStyle={this.props.yoti.buttonLabelStyle}
                style={this.props.yoti.buttonStyle}
                primary={true}
                label="I don't have YOTI"
              />
            </a>
          </div>
        }
      </div>
    )
  }
}

export default YotiShareButtons
