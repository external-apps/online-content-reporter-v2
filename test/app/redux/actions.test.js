import { expect } from 'chai'
import * as formActions from '../../../app/actions/forms'
import * as yotiActions from '../../../app/actions/yoti'

import {
  // yoti actions
  CLOSE_QR,
  OPEN_QR,
  ADD_QR_CODE,
  SET_UP_FOR_MOBILE,
  //form actions
  OPEN_MODAL,
  CLOSE_MODAL,
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
  SHOW_CRITERIA_REQUIRED_MESSAGE,
} from '../../../constants/action-types'

describe('Test actions', () => {
  it('should dispatch an action to openModal()', () => {
    const expectedAction = {
      type: OPEN_MODAL
    }
    expect(
      formActions.openModal()
    ).to.deep.equal(expectedAction)
  })
  it('should dispatch an action to closeModal()', () => {
    const expectedAction = {
      type: CLOSE_MODAL
    }
    expect(
      formActions.closeModal()
    ).to.deep.equal(expectedAction)
  })
  it('should dispatch an action to nextForm()', () => {
    const expectedAction = {
      type: CHANGE_FORM
    }
    expect(
      formActions.changeForm()
    ).to.deep.equal(expectedAction)
  })
  it('should dispatch an action to save url', () => { //
    expect(
      formActions.saveUrl()
    ).to.have.property('type','SAVE_URL')
  })
  it('should dispatch an action to save email', () => { //
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
    ).to.deep.equal(expectedAction)
  })
  it('should dispatch an action to save description', () => { //
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
    ).to.deep.equal(expectedAction)
  })
  it('should dispatch an action to toggle option2', () => {
    const expectedAction = {
      type: CHANGE_OPTION2
    }
    expect(
      formActions.checkOption2()
    ).to.deep.equal(expectedAction)
  })
  it('should dispatch an action to toggle option3', () => {
    const expectedAction = {
      type: CHANGE_OPTION3
    }
    expect(
      formActions.checkOption3()
    ).to.deep.equal(expectedAction)
  })
  it('should dispatch an action to toggle option4', () => { //
    const expectedAction = {
      type: CHANGE_OPTION4
    }
    expect(
      formActions.checkOption4()
    ).to.deep.equal(expectedAction)
  })
  it('should dispatch an action to toggle option5', () => { //
    const expectedAction = {
      type: CHANGE_OPTION5
    }
    expect(
      formActions.checkOption5()
    ).to.deep.equal(expectedAction)
  })
  it('should dispatch an action to show the valid email required message', () => { //
    const expectedAction = {
      type: VALID_EMAIL_REQUIRED_MESSAGE
    }
    expect(
      formActions.validEmailRequiredMessage()
    ).to.deep.equal(expectedAction)
  })
  it('should dispatch an action to hide the valid email required message', () => { //
    const expectedAction = {
      type: HIDE_VALID_EMAIL_REQUIRED_MESSAGE
    }
    expect(
      formActions.hideValidEmailRequiredMessage()
    ).to.deep.equal(expectedAction)
  })
  it('should dispatch an action show the criteria required message', () => { //
    expect(
      formActions.showCriteriaRequiredMessage()
    ).to.have.property('type','SHOW_CRITERIA_REQUIRED_MESSAGE')
  })
})

describe('Yoti actions', () => {//
  it('should dispatch an action to setUpForMobile()', () => {
    expect(
      yotiActions.setUpForMobile()
    ).to.have.property('type','SET_UP_FOR_MOBILE')
  })
  it('should dispatch an action to close Qr code', () => {
    const expectedAction = {
      type: CLOSE_QR
    }
    expect(
      yotiActions.closeQr()
    ).to.deep.equal(expectedAction)
  })
  it('should dispatch an action to open Qr code', () => {
    const expectedAction = {
      type: OPEN_QR
    }
    expect(
      yotiActions.openQr()
    ).to.deep.equal(expectedAction)
  })
  it('should dispatch an action to add Qr code', () => {
    expect(
      yotiActions.addQr()
    ).to.have.property('type','ADD_QR_CODE')
  })
})
