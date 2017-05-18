import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { connect } from 'react-redux'

import UrlDescriptionForm from '../components/UrlDescriptionForm.js'
import ImageCriteriaForm from '../components/ImgCriteriaForm.js'
import * as formActions from '../actions/forms.js'

injectTapEventPlugin()

class UrlForm extends React.Component {
  render () {
    return (
      <div>
        { this.props.forms.firstForm
          ? <ImageCriteriaForm {...this.props} />
          : <UrlDescriptionForm {...this.props} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => state

const actionCreators = {
  ...formActions
}

export default connect(mapStateToProps, actionCreators)(UrlForm)
