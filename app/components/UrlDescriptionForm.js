import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import ProgressBar from './ProgressBar'
import ConfirmationModal from './ConfirmationModal'
import Header from './Header'
import Footer from './Footer'
import SectionTitle from '../components/SectionTitle'
import '../scss/style.scss'
import axios from 'axios'
import { logPageView } from '../tracking.js'

const styles = {
  errorStyle: {
    color: '#EB5857'
  }
}

class UrlDescriptionForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleUrlSubmit = this.handleUrlSubmit.bind(this)
    this.isEmailValid = this.isEmailValid.bind(this)
    this.renderValidEmailRequired = this.renderValidEmailRequired.bind(this)
    logPageView('/form (Url & description)')
  }

  handleUrlSubmit () {
    const { imageCriteria, url, description } = this.props.forms
    var payload = { imageCriteria, url, description }

    const config = {
      headers: {
        'Authorization': `Bearer ${this.props.yoti.ageVerifactionToken}`
      }
    }

    return axios.post('/email', payload, config)
      .catch((error) => {
        console.log(error)
      })
  }

  isEmailValid () {
    const pattern = /^[A-Za-z0-9_.]+@[a-zA-Z_]+?(\.[a-zA-Z]{2,3}){1,2}$/
    return !this.props.forms.email || pattern.test(this.props.forms.email)
  }

  renderRequiredMessage () {
    if (this.props.forms.urlRequiredMessage) {
      return (
        <h2 className='required'>You can't proceed without sharing at least one url.</h2>
      )
    }
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

  render () {
    return (
      <div>
        <Header />
        <ProgressBar form='2' />
        <SectionTitle
          heading='REPORT CONTENT WEB ADDRESS'
          subheading='Please include any info that you think may help us, such as:'
        />
        <div className='instruction-list'>
          <ul>
            <li>where you found the image or video</li>
            <li>if there's more than one website</li>
            <li>whether you need a username and password to gain access</li>
          </ul>
        </div>
        <div className='form-container'>
          <h3 className='section-title'>WEB ADDRESS</h3>
          <div className='input-field col s6'>
            <TextField
              hintText='http://www.example.com'
              floatingLabelText='URL'
              value={this.props.forms.url}
              errorText='Please enter the URL where you found the image or video.'
              onChange={e => this.props.saveUrl(e.target.value)}
              errorStyle={styles.errorStyle}
            /><br />
            {this.renderRequiredMessage()}
          </div>
          <h3 className='url-report'>If there’s more than one website, add these in the box below.</h3>
          <div className='input-field-2 input-field col s6 '>
            <TextField
              hintText='Tell us about where you found the image'
              floatingLabelText='Description'
              multiLine
              rows={4}
              value={this.props.forms.description}
              onChange={e => this.props.saveDescription(e.target.value)}
            /><br />
          </div>
          <div className='input-field col s6'>
            <p>
              Your report may take a little while to complete. If you would like to know when the IWF have looked at your report, enter your email address below.
            </p>
            <TextField
              hintText='jane.doe@gmail.com'
              floatingLabelText='Email address (Optional)'
              onChange={e => this.props.saveEmail(e.target.value)}
            />
            {this.renderValidEmailRequired()}
          </div>
          <div className='buttons'>
            <RaisedButton
              label='Previous'
              primary
              onClick={() => this.props.changeForm()}
            />
            <RaisedButton
              label='Submit'
              primary
              onClick={() => {
                if (!this.props.forms.url) {
                  this.props.showUrlRequiredMessage()
                } else if (this.isEmailValid()) {
                  this.props.openModal()
                  this.handleUrlSubmit()
                } else {
                  this.props.validEmailRequiredMessage()
                }
              }}
            />
          </div>
        </div>
        <ConfirmationModal {...this.props} />
        <Footer />
      </div>
    )
  }
}

export default UrlDescriptionForm
