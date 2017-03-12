import React from 'react'
import TextField from 'material-ui/TextField'
import '../scss/style.scss'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import ConfirmationModal from '../components/ConfirmationModal'
import PageTitle from '../components/PageTitle'
import ImageCriteriaForm from '../components/ImgCriteriaForm'
import * as formActions from '../actions/forms'
import axios from 'axios'

injectTapEventPlugin()

class UrlForm extends React.Component {
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
        {this.props.firstForm &&
          <ImageCriteriaForm {...this.props} />
        }

      {!this.props.firstForm &&
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
                 value={this.props.url}
                 onChange={e => this.props.saveUrl(e.target.value)}
               /><br />
              </div>
              <div className='input-field-2 input-field col s6 '>
                <TextField
                   hintText='Message Field'
                   floatingLabelText='Description'
                   multiLine={true}
                   rows={10}
                   value={this.props.description}
                   onChange={e => this.props.saveDescription(e.target.value)}
                /><br />
                </div>
              <RaisedButton
                label='Submit'
                primary={true}
                onClick={(e) => {
                  this.props.openModal()
                  this.handleSubmit().then(() => {
                    console.log('Success');
                  }).catch((error) => {
                    console.log(error);
                  })
                  // after saving to state.. we could display in modal to allow them to check the details are correct!
                }}
                id='submit-url' />
            </form>
          </div>
          <ConfirmationModal {...this.props} />
      </div>
     }
     </div>
    )
  }

}

const mapStateToProps = state => state.forms

const actionCreators = {
  ...formActions
}

export default connect(mapStateToProps, actionCreators)(UrlForm)
