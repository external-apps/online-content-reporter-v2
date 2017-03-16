import React from 'react'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Modal from 'react-modal'
import axios from 'axios'

const modalOverlay = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate (-50%, -50%)',
    background: '#CCECF5',
    fontFamily: 'childline',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0.1rem',
    outline: 'none',
    padding: '1rem',
    minWidth: '260px',
    height: '90%',
    maxHeight: '480px',
    maxWidth: '450px',
    overflow: 'auto',
    transform: 'translate(-50%, -50%)',
    zIndex: '100'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
}

class ConfirmationModal extends React.Component {
  constructor (props) {
    super(props)
    this.handleEmailSubmit.bind(this)
  }
  renderValidEmailRequired () {
    if (!this.validateEmail()) {
      return true
    }
  }

  handleEmailSubmit () {
    const { imageCriteria, url, description, email } = this.props
    var payload = { imageCriteria, url, description, email }
    return axios.post('/email', payload)
  }
  validateEmail () {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    console.log(pattern.test(this.props.email))
    return pattern.test(this.props.email)
  }

  render () {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onRequestClose={() => this.props.changeModal()}
        style={modalOverlay}
        contentLabel='Reassuring message'
      >
        <div className='mod'>
          <RaisedButton className='close_btn' primary={true} label='X' onClick={() => props.changeModal()} />
          <h2 className='red'>Thank you.</h2>
          <h2>We have sent your report to the Internet Watch Foundation (IWF) who will review your request.</h2>
          <p>
            Your report may take a little while to complete. If you would like to know when the IWF have looked at your report, enter your email address below.
          </p>
          <TextField
            hintText='jane.doe@gmail.com'
            floatingLabelText='Email address'
            onChange={e => this.props.saveEmail(e.target.value)}
          />
          <br />
          {!this.validateEmail()&& <h2 className='required'>Please enter a valid email address</h2>}
          <p className="last_p">If you are worried about anything, Childline is always here for you. Call us for free on 0800 1111 or speak to us online.
          </p>
          <Link className='modal-link' to='/'>
            <RaisedButton primary={true} label='Submit' onClick={() => {if(this.validateEmail()){this.handleEmailSubmit()}else{this.renderValidEmailRequired()} }} />
          </Link>
        </div>
      </Modal>
    )
  }
}
//

module.exports = ConfirmationModal
