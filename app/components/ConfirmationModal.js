import React from 'react'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Modal from 'react-modal'

const modalOverlay = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate (-50%, -50%)',
    border: '1px solid #ccc',
    background: '#CCECF5',
    fontFamily: 'childline',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0.25rem',
    outline: 'none',
    padding: '1rem',
    maxWidth: '80%',
    height: '80%',
    width: '375px',
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






const ConfirmationModal = (props) => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={() => props.changeModal()}
      style={modalOverlay}
      contentLabel='Reassuring message'
    >
      <div className='mod'>
        <RaisedButton className='close_btn' primary={true} label='X' onClick={() => props.changeModal()} />
        <h2 className="red">Thank you. </h2>
        <h2>We have sent your report to the Internet Watch Foundation (IWF) who will review your request.</h2>
        <p>Your report may take a little while to complete. If you would like to know when the IWF have looked at your report, enter your email address below.
        </p>
        <p>
          If you would like IWF to update you by email, please enter your email address below.
        </p>
        <TextField
          hintText='jane.doe@gmail.com'
          floatingLabelText='Email address'
        />
        <br />
        <p>If you are worried about anything, Childline is always here for you. Call us for free on 0800 1111 or speak to us online.
</p>
        <Link className='modal-link' to='/'>
          <RaisedButton primary={true} label='Home' onClick={() => props.changeModal()} />
        </Link>
      </div>
    </Modal>
  )
}

module.exports = ConfirmationModal
