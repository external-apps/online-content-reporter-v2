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
import { browserHistory } from 'react-router'

const styles = {
  errorStyle: {
    color: '#EB5857'
  }
}

class UrlDescriptionForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleUrlSubmit.bind(this)
  }

  componentDidMount () {
    if (!this.props.yoti.isAgeVerified) {
      browserHistory.push('/')
    }
  }

  handleUrlSubmit () {
    const { imageCriteria, url, description } = this.props.forms
    var payload = { imageCriteria, url, description }

    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('ageToken')}`
      }
    }

    return axios.post('/email', payload, config)
      .catch((error) => {
        console.log(error)
      })
  }

  renderRequiredMessage () {
    if (this.props.forms.urlRequiredMessage) {
      return (
        <h2 className='required'>You can't proceed without sharing at least one url.</h2>
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
              multiLine={true}
              rows={4}
              value={this.props.forms.description}
              onChange={e => this.props.saveDescription(e.target.value)}
            /><br />
          </div>
          <div className='buttons'>
            <RaisedButton
              label='Previous'
              primary={true}
              onClick={() => this.props.changeForm()}
            />
            <RaisedButton
              label='Submit'
              primary={true}
              onClick={() => {
                if (!this.props.forms.url) {
                  this.props.showUrlRequiredMessage()
                } else {
                  this.props.openModal()
                  this.handleUrlSubmit()
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
