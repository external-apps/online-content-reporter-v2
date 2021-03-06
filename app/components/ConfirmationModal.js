import React from 'react'
import { browserHistory } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import Modal from 'react-modal'
import axios from 'axios'

import { modalMobileOverlay, modalDesktopOverlay } from '../assets/modalStyle'

class ConfirmationModal extends React.Component {
  constructor (props) {
    super(props)
    this.handleEmailSubmit.bind(this)
  }

  renderValidEmailRequired () {
    if (!this.props.forms.validEmail) {
      return (
        <h2 className='required'>
          Please enter a valid email address
        </h2>
      )
    }
  }

  handleEmailSubmit () {
    this.props.hideValidEmailRequiredMessage()
    const { imageCriteria, url, description, email } = this.props.forms
    var payload = { imageCriteria, url, description, email }

    const config = {
      headers: {
        'Authorization': `Bearer ${this.props.yoti.ageVerifactionToken}`
      }
    }

    axios.post('/email', payload, config).then(res => {
      browserHistory.push('/')
    })
  }

  validateEmail () {
    const pattern = /^[A-Za-z0-9_.]+@[a-zA-Z_]+?(\.[a-zA-Z]{2,3}){1,2}$/
    return pattern.test(this.props.forms.email)
  }

  componentWillUnmount () {
    this.props.closeModal()
  }

  render () {
    const modalStyle = this.props.yoti.isMobile
      ? modalMobileOverlay
      : modalDesktopOverlay
    return (
      <Modal
        isOpen={this.props.forms.modalIsOpen}
        onRequestClose={() => this.props.closeModal()}
        style={modalStyle}
        contentLabel='Reassuring message'
      >
        <div className='mod'>
          <RaisedButton
            className='close_btn'
            primary label='X'
            onClick={() => { this.props.closeModal() }} />
          <h2 className='red'>Thank you.</h2>
          <h2>We have sent your report to the Internet Watch Foundation (IWF) who will review your request.</h2>
          <p className='last_p'>
            If you are worried about anything, Childline is always here for you. Call us for free on 0800 1111 or <a target='_blank' rel='external' href='https://www.childline.org.uk/get-support/'>speak to us online</a>.
          </p>
        </div>
      </Modal>
    )
  }
}

module.exports = ConfirmationModal
