import React from 'react'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'
import { trackClick } from '../tracking.js'

const YotiShareButtons = (props) => {
  return (
    <div className='yoti-btns'>
      <a href={props.yoti.href} target={props.yoti.target}>
        <RaisedButton
          labelStyle={props.yoti.buttonLabelStyle}
          style={props.yoti.buttonStyle}
          className='margin-right btns-customized btns-small'
          primary
          onClick={() => {
            trackClick('Navigation', 'have yoti')
            document.getElementsByClassName('_yoti-verify-button')[0].click()
          }}
          label='I have YOTI'
        />
      </a>
      <a href='http://www.yoti.com' rel='external' target='_blank'>
        <RaisedButton
          className='btns-customized btns-small'
          labelStyle={props.yoti.buttonLabelStyle}
          style={props.yoti.buttonStyle}
          primary
          label="I don't have YOTI"
          onClick={() => {
            trackClick('Navigation', 'don\'t have Yoti')
          }}
        />
      </a>
    </div>
  )
}

export default YotiShareButtons
