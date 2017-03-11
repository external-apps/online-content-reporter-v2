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
import * as qs from 'querystring'

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
}

class UrlForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleUrlChange.bind(this)
    this.handleDescriptionChange.bind(this)
    this.waterfall.bind(this)
    this.handleSubmit.bind(this)
  }

  handleUrlChange (self,url,cb) {
  //  this.props.saveUrl(url)
  console.log('urlchange',url,self)
   setTimeout(function() {
    return cb(null,self.props.saveUrl(url))
  },1000)
  }

  handleDescriptionChange (self,des,cb) {
    console.log('descChange',self)
  //  this.props.saveDescription(des)
  setTimeout(function() {
    return cb(null,self.props.saveDescription(des))
  },1000)
  }


  waterfall (args,tasks, cb) {
   var next = tasks[0]
   var nextArg = args.shift()
   console.log('in waterfall',next);
  console.log(nextArg,"nextARGGGG")
  let self = this
    console.log(self.props.forms,"FORM")
   var tail = tasks.slice(1)
   if (typeof next !== 'undefined') {
     if(nextArg){
       next(self,nextArg,function(error, result) {
         if (error) {
           cb(error)
           return ;
         }
         self.waterfall(args, tail, cb)
       })
     }else{
       next(self,function(error, result) {
         if (error) {
           cb(error)
           return ;
         }
         cb(null, 'sucesss')
       })
     }
     return ;
   }
   cb(null, 'sucesss')
  }

handleSubmit (self,cb) {
  console.log('I have been called!!!')
//  console.log(e)
//6  e.preventDefault()
   var payload = {
     "imageCriteria": self.props.forms.imageCriteria,
     "url": self.props.forms.url,
     "description": self.props.forms.description
   }
   console.log(payload)


  fetch("/email", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
     .then(function(response) {
       console.log(response)
       return response.json()
     }).then(function(body) {
       console.log(body)
     })
    cb(null,'success')
 }

  render () {
    return (
     <div>
        {this.props.forms.firstForm &&
        <div>
          <PageTitle heading='DESCRIBE THE ONLINE CONTENT' backgroundColor='purple' />
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
                  onChange={() => { this.props.addCriteria('Someone hurting someone else');console.log(this.props.forms.imageCriteria); }}
                  leftCheckbox={<Checkbox />}
                />
                <ListItem
                  primaryText='Sexual activity that includes animals'
                  onChange={() => { this.props.addCriteria('Sexual activity that includes animals') }}
                  leftCheckbox={<Checkbox />}
                />
              </List>
              <RaisedButton label='Confirm' primary={true} onClick={() => this.props.nextForm()} />
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
          <PageTitle heading='REPORT CONTENT WEB ADDRESS' backgroundColor='purple' />
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
            <form>
              <div className='input-field col s6'>
              <TextField
                 hintText='http://'
                 floatingLabelText='url'
                ref='url'
               /><br />
              </div>
              <div className='input-field-2 input-field col s6 '>
                <TextField
                   hintText='Message Field'
                   floatingLabelText='Description'
                   multiLine={true}
                   rows={10}
                   ref='description'
                /><br />
                </div>
              <RaisedButton
                label='Submit'
                primary={true}
                onClick={(e) => {
                    /*  this.props.openModal(),
                      this.handleUrlChange(this.refs.url.getValue()),
                      this.handleDescriptionChange(this.refs.description.getValue()),
                      this.handleSubmit(e)*/
                      let  url= this.refs.url.getValue()
                      let desc =this.refs.description.getValue()
                      let ev =e
                      console.log(url,desc,e)
                      this.waterfall([url,desc], [
                          this.handleUrlChange,
                          this.handleDescriptionChange,
                          this.handleSubmit
                        ],function (error, result) {
                          console.log('Sending email..');
                          if (error) {
                            throw new Error('Sending email failed with error: ' + error)
                          }
                          console.log('Sending email success!..')
                        })
                  // after saving to state.. we could display in modal to allow them to check the details are correct!
                }}
                id='submit-url' />
            </form>
          </div>

       <Modal
         isOpen={this.props.forms.modalIsOpen}
         onRequestClose={() => this.props.closeModal()}
         style={customStyles}
         contentLabel='Reassuring message'
       >

        <div className='mod'>
            <RaisedButton className='close_btn' primary={true} label='X' onClick={() => this.props.closeModal()} />
             <h1>Thank you. The online content has been reported for removal</h1>
             <p>
               If you would like IWF to update you by email, please enter your email address below.
             </p>
             <TextField
                hintText='jane.doe@gmail.com'
                floatingLabelText='Email address'
              /><br />
             <Link className='modal-link' to='/'>
               <RaisedButton primary={true} label='Home' onClick={() => this.props.closeModal()} />
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
