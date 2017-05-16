import React from 'react'
import '../scss/style.scss'
import RaisedButton from 'material-ui/RaisedButton'

const YotiShareButtons = (props) => {
  return (
    <div className='yoti-btns'>
      <a href={props.yoti.href} target={props.yoti.target}>
        <RaisedButton
          labelStyle={props.yoti.buttonLabelStyle}
          style={props.yoti.buttonStyle}
          className='margin-right btns-customized btns-small'
          primary={true}
          onClick={() => {
            document.getElementsByClassName('_yoti-verify-button')[0].click()
            console.log(document.getElementById('canvas'))
          }}
          // onClick={props.selectVerify}
          label='I have YOTI'
        />
      </a>
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
