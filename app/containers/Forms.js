import React from 'react'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import '../scss/style.scss'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'
import { List, ListItem } from 'material-ui/List'
import { connect } from 'react-redux'
import Subheader from 'material-ui/Subheader'
import Checkbox from 'material-ui/Checkbox'
import Modal from 'react-modal'
import PageTitle from '../components/PageTitle'
import ProgressBar from '../components/ProgressBar'
import * as formActions from '../actions/forms'

injectTapEventPlugin()

const customStyles = {
  overlay: {
    position         : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    zIndex: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content : {
    position                   : 'absolute',
    top                        : '50%',
    left                       : '50%',
    transform                  : 'translate (-50%, -50%)',
    border                     : '1px solid #ccc',
    background                 : '#CCECF5',
    fontFamily                 : 'childline',
    overflow                   : 'hidden',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '0.25rem',
    outline                    : 'none',
    padding                    : '1rem',
    maxWidth                  :  '80%',
    height                     : '60%',
    width                      : '375px',
    transform                  : 'translate(-50%,-50%)',
    zIndex                     : '100'
  }
};


class UrlForm extends React.Component {

  render () {
    console.log('this.props', this.props)
    return (
     <div>
        {this.props.forms.firstForm &&
        <div>
          <PageTitle heading='DESCRIBE THE ONLINE CONTENT' backgroundColor='bg-plum' />
          <ProgressBar percentage='66' />

          <div className='content-describe form-container'>
            <p>
              The content must fit a certain criteria for us to legally remove it. Please select the boxes below that apply.
            </p>
          </div>

          <div className='form-container'>
            <form action='#'>
              <List>
                <Subheader>Describe image content</Subheader>
                <ListItem
                  primaryText='Someone posing in a sexual way'
                  onChange={() => { this.props.addCriteria('Someone posing in a sexual way') }}
                  leftCheckbox={<Checkbox />}
                />
                <ListItem
                  primaryText='Someone touching themselves in a sexual way'
                  onChange={() => { this.props.addCriteria('Someone touching themselves in a sexual way') }}
                  leftCheckbox={<Checkbox />}
                />
                <ListItem
                  primaryText='Any sexual activity involving a child, adult or both'
                  onChange={() => { this.props.addCriteria('Any sexual activity involving a child, adult or both') }}
                  leftCheckbox={<Checkbox />}
                />
                <ListItem
                  primaryText='Someone hurting someone else'
                  onChange={() => { this.props.addCriteria('Someone hurting someone else') }}
                  leftCheckbox={<Checkbox />}
                />
                <ListItem
                  primaryText='Sexual activity that includes animals'
                  onChange={() => { this.props.addCriteria('Sexual activity that includes animals') }}
                  leftCheckbox={<Checkbox />}
                />
              </List>
              <RaisedButton label='Confirm' onClick={() => this.props.nextForm()} />
            </form>
          </div>

          <div className='other-options'>
            <p>
              <i className='large material-icons'>info_outline</i>
              If the picture or video doesnt include any of the activities above,
              we may not be able to remove it. Talk to a
              <span>
                <a href='https://www.childline.org.uk/get-support/1-2-1-counsellor-chat/'>
                  Childline counsellor
                </a>
              </span>
              for more advice.
            </p>
          </div>
        </div>
      }

      {!this.props.forms.firstForm &&
        <div className='content'>
          <div className='title-div'>
            <h1 className='page-title'>REPORT CONTENT WEB ADDRESS</h1>
          </div>
          <div className='progress'>
             <div className='determinate3' ></div>
          </div>
          <div className='message'>
            <h4 className='section-title'>WEBSITE DETAILS</h4>
            <p>
              If you have any information you think may help us such as a description of where the content you are reporting is located on a large website or username and password needed to gain access, please include it in the description box.

              If you have multiple webpages (URLs) to report, please include these in the description box.
            </p>
          </div>
          <div className='form-container'>
            <h4 className='section-title'>WEB ADDRESS</h4>
            <form action='#'>
              <div className='input-field col s6'>
              <TextField
                 hintText='http://'
                 floatingLabelText='url'
               /><br />
              </div>
              <div className='input-field-2 input-field col s6 '>
              <TextField
             hintText='Message Field'
             floatingLabelText='Description'
             multiLine={true}
             rows={10}
           /><br />
              </div>
              <RaisedButton label='Submit' onClick={() => this.props.openModal()} id='submit-url' />
            </form>
          </div>

       <Modal
         isOpen={this.props.forms.modalIsOpen}
         onRequestClose={() => this.props.closeModal()}
         style={customStyles}
         contentLabel='Reassuring message'
       >

        <div className='mod'>
            <RaisedButton className='close_btn' label='X' onClick={() => this.props.closeModal()} />
             <h1>Thank you. The online content has been reported for removal</h1>
             <p>
               If you would like IWF to update you by email, please enter your email address below.
             </p>
             <TextField
                hintText='jane.doe@gmail.com'
                floatingLabelText='Email address'
              /><br />
             <Link className='modal-link' to='/'>
               <RaisedButton label='Home' onClick={() => this.props.closeModal()} />
             </Link>
           </div>

       </Modal>
        </div>
     }
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { forms: state.forms }
}

const actionCreators = {
  ...formActions
}

export default connect(mapStateToProps, actionCreators)(UrlForm)
