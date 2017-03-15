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

const styles = {
  errorStyle: {
    color: '#EB5857'
  }
}

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
        <Header />
        <ProgressBar form='2' />
        <SectionTitle
          heading='REPORT CONTENT WEB ADDRESS'
          subheading='Please include any info that you think may help us, such as:'
          list = {['where you found the image or video', "if there's more than one website", 'whether you need a username and password to gain access.']}
        />
        <div className='form-container'>
          <h3 className='section-title'>WEB ADDRESS</h3>
          <form>
            <div className='input-field col s6'>
              <TextField
                hintText='If there is more than one website, add these in the box below'
                floatingLabelText='url'
                value={this.props.url}
                errorText='This field is required'
                onChange={e => this.props.saveUrl(e.target.value)}
                errorStyle={styles.errorStyle}
              /><br />
                {this.props.required && <h2 className="required">Check one of the options!!</h2>}
            </div>
            <div className='input-field-2 input-field col s6 '>
              <TextField
                hintText='Tell us about where you found the image'
                floatingLabelText='Description'
                multiLine={true}
                rows={4}
                value={this.props.description}
                onChange={e => this.props.saveDescription(e.target.value)}
              /><br />
            </div>
            <div className="buttons">
              <RaisedButton label='Previous' primary={true} onClick={() => this.props.changeForm()} />
              <RaisedButton
                label='Submit'
                primary={true}
                onClick={(e) => {
                  console.log(this.props)
                  if(!this.props.url){
                    this.props.requiredMessage()
                  }else{
                  this.props.changeModal()
                  this.handleSubmit().then(() => {
                    console.log('Success submitting form')
                  }).catch((error) => {
                    console.log(error)
                  })
                }
                }}
                id='submit-url'
              />
            </div>
          </form>
        </div>
        <ConfirmationModal {...this.props} />
        <Footer />
      </div>
    )
  }
}

export default UrlDescriptionForm
