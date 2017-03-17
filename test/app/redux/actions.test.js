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
  CHANGE_OPTION1,
  CHANGE_OPTION2,
  CHANGE_OPTION3,
  CHANGE_OPTION4,
  CHANGE_OPTION5,
  VALID_EMAIL_REQUIRED_MESSAGE,
  HIDE_VALID_EMAIL_REQUIRED_MESSAGE,
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
  it('should dispatch an action to toggle option1', () => { //
    const expectedAction = {
      type: CHANGE_OPTION1
    }
    expect(
      formActions.checkOption1()
    ).to.have.property('type','CHANGE_OPTION1')
  })
  it('should dispatch an action to toggle option2', () => { //
    const expectedAction = {
      type: CHANGE_OPTION2
    }
    expect(
      formActions.checkOption2()
    ).to.have.property('type','CHANGE_OPTION2')
  })
  it('should dispatch an action to toggle option3', () => { //
    const expectedAction = {
      type: CHANGE_OPTION3
    }
    expect(
      formActions.checkOption3()
    ).to.have.property('type','CHANGE_OPTION3')
  })
  it('should dispatch an action to toggle option4', () => { //
    const expectedAction = {
      type: CHANGE_OPTION4
    }
    expect(
      formActions.checkOption4()
    ).to.have.property('type','CHANGE_OPTION4')
  })
  it('should dispatch an action to toggle option5', () => { //
    const expectedAction = {
      type: CHANGE_OPTION5
    }
    expect(
      formActions.checkOption5()
    ).to.have.property('type','CHANGE_OPTION5')
  })
  it('should dispatch an action to show the valid email required message', () => { //
    const expectedAction = {
      type: VALID_EMAIL_REQUIRED_MESSAGE
    }
    expect(
      formActions.validEmailRequiredMessage()
    ).to.have.property('type','VALID_EMAIL_REQUIRED_MESSAGE')
  })
  it('should dispatch an action to hide the valid email required message', () => { //
    const expectedAction = {
      type: HIDE_VALID_EMAIL_REQUIRED_MESSAGE
    }
    expect(
      formActions.hideValidEmailRequiredMessage()
    ).to.have.property('type','HIDE_VALID_EMAIL_REQUIRED_MESSAGE')
  })
  it('should dispatch an action show the criteria required message', () => { //
    const expectedAction = {
      type: SHOW_CRITERIA_REQUIRED_MESSAGE
    }
    expect(
      formActions.showCriteriaRequiredMessage()
    ).to.have.property('type','SHOW_CRITERIA_REQUIRED_MESSAGE')
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
