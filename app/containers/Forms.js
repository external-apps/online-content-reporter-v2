import React from 'react'
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
