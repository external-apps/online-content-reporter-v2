import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon'
import * as formActions from '../../../app/actions/forms'
import * as yotiActions from '../../../app/actions/yoti'

import {
  // yoti actions
  ADD_QR_CODE,
  SET_UP_FOR_MOBILE,
  //form actions
  CHANGE_MODAL,
  CHANGE_FORM,
  TOGGLE_CRITERIA,
  SAVE_URL,
  SAVE_DESCRIPTION,
  SAVE_EMAIL,
  SHOW_URL_REQUIRED_MESSAGE, 
  CHANGE_OPTION1, //todo
  CHANGE_OPTION2, //todo
  CHANGE_OPTION3, //todo
  CHANGE_OPTION4, //todo
  CHANGE_OPTION5, //todo
  VALID_EMAIL_REQUIRED_MESSAGE, //todo
  HIDE_VALID_EMAIL_REQUIRED_MESSAGE, //todo
  SHOW_CRITERIA_REQUIRED_MESSAGE, //todo
} from '../../../constants/action-types'

describe('Test actions', () => {
  it('should dispatch an action to openModal()', () => {
    const expectedAction = {
      type: CHANGE_MODAL
    }
    expect(
      formActions.changeModal()
    ).to.deep.equal(expectedAction);
  })
  it('should dispatch an action to nextForm()', () => {
    const expectedAction = {
      type: CHANGE_FORM
    }
    expect(
      formActions.changeForm()
    ).to.deep.equal(expectedAction);
  })
  it('should dispatch an action to save url', () => { //
    const expectedAction = {
      type: SAVE_URL
    }
    expect(
      formActions.saveUrl()
    ).to.have.property('type','SAVE_URL')
  })
  it('should dispatch an action to save email', () => { //
    const expectedAction = {
      type: SAVE_EMAIL
    }
    expect(
      formActions.saveEmail()
    ).to.have.property('type','SAVE_EMAIL')
  })
  it('should dispatch an action to show url required message', () => { //
    const expectedAction = {
      type: SHOW_URL_REQUIRED_MESSAGE
    }
    expect(
      formActions.showUrlRequiredMessage()
    ).to.have.property('type','SHOW_URL_REQUIRED_MESSAGE')
  })
  it('should dispatch an action to save description', () => { //
    const expectedAction = {
      type: SAVE_DESCRIPTION
    }
    expect(
      formActions.saveDescription()
    ).to.have.property('type','SAVE_DESCRIPTION')
  })
})

describe('FeatureFirstContainer actions', () => {//
  it('should dispatch an action to openModal()', () => {
    const expectedAction = {
      type: SET_UP_FOR_MOBILE
    }
    expect(
      yotiActions.setUpForMobile()
    ).to.have.property('type','SET_UP_FOR_MOBILE')
  })
})
