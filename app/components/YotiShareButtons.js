import React from 'react'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'

const YotiShareButtons = (props) => {
  return (
    <div className='yoti-btns'>
      <RaisedButton
        labelStyle={props.yoti.buttonLabelStyle}
        style={props.yoti.buttonStyle}
        className='margin-right btns-customized btns-small'
        data-yoti-application-id='your-app-id'
        label='I have YOTI'
        primary={true}
      />
      {/* }<a href={props.yoti.href} target={props.yoti.target}>
        <RaisedButton
          labelStyle={props.yoti.buttonLabelStyle}
          style={props.yoti.buttonStyle}
          className='margin-right btns-customized btns-small'
          primary={true}
          onClick={props.selectVerify}
        />
      </a> */}
      <a href='http://www.yoti.com' target='_blank'>
        <RaisedButton
          className='btns-customized btns-small'
          labelStyle={props.yoti.buttonLabelStyle}
          style={props.yoti.buttonStyle}
          primary={true}
          label="I don't have YOTI"
        />
      </a>
    </div>
  )
}

export default YotiShareButtons
