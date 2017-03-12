import React from 'react'
import '../scss/style.scss'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { connect } from 'react-redux'
import UrlDescriptionForm from '../components/UrlDescriptionForm'
import ImageCriteriaForm from '../components/ImgCriteriaForm'
import * as formActions from '../actions/forms'


injectTapEventPlugin()

class UrlForm extends React.Component {
  render () {
    return (
      <div>
        {this.props.firstForm &&
          <ImageCriteriaForm {...this.props} />
        }
        {!this.props.firstForm &&
        <UrlDescriptionForm {...this.props} />
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
