import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import PageTitle from './PageTitle'
import TextField from 'material-ui/TextField'
import ProgressBar from './ProgressBar'
import ConfirmationModal from './ConfirmationModal'
import '../scss/style.scss'
import axios from 'axios'

class UrlDescriptionForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit.bind(this)
  }

  handleSubmit () {
    const { imageCriteria, url, description } = this.props
    var payload = { imageCriteria, url, description }
    return axios.post('/email', payload)
  }

  render () {
    return (
      <div>
        <PageTitle heading='REPORT CONTENT WEB ADDRESS' backgroundColor='dark-cobalt' />
        <ProgressBar percentage='100' />
        <div className='url-form-description'>
          <h3 className='section-title'>WEBSITE DETAILS</h3>
          <p>
            If you have any information you think may help us such as a description of where the content you are reporting is located on a large website or username and password needed to gain access, please include it in the description box.
            If you have multiple webpages (URLs) to report, please include these in the description box.
          </p>
        </div>
        <div className='form-container'>
          <h3 className='section-title'>WEB ADDRESS</h3>
          <form>
            <div className='input-field col s6'>
              <TextField
                hintText='Please enter the website in concern here. If you have multiple webpages (URLs) to report. Please let us know in the description.'
                floatingLabelText='url'
                value={this.props.url}
                onChange={e => this.props.saveUrl(e.target.value)}
              /><br />
            </div>
            <div className='input-field-2 input-field col s6 '>
              <TextField
                hintText='Message Field'
                floatingLabelText='Description'
                multiLine={true}
                rows={4}
                value={this.props.description}
                onChange={e => this.props.saveDescription(e.target.value)}
              /><br />
            </div>
            <RaisedButton
              label='Submit'
              primary={true}
              onClick={(e) => {
                this.props.changeModal()
                this.handleSubmit().then(() => {
                  console.log('Success submitting form')
                }).catch((error) => {
                  console.log(error)
                })
              }}
              id='submit-url' />
          </form>
        </div>
        <ConfirmationModal {...this.props} />
        <RaisedButton label='Previous' primary={true} onClick={() => this.props.changeForm()} />
      </div>
    )
  }
}

export default UrlDescriptionForm
