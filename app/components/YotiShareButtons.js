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
        primary={true}
        label='I have YOTI'
        onClick={() => document.getElementsByClassName('hidden-yoti-button')[0].click()}
      />
    <span
      className='hidden-yoti-button'
      data-yoti-application-id={YOTI_APP_ID}
      data-yoti-type='inline'
      data-yoti-scenario-id={YOTI_SCENARIO_ID}>
      I have yoti
    </span>
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
