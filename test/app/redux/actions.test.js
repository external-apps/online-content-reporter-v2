import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon'
import * as formActions from '../../../app/actions/forms'
import * as yotiActions from '../../../app/actions/yoti'

import {
  ADD_QR_CODE,
  SET_UP_FOR_MOBILE,
  CHANGE_MODAL,
  CHANGE_FORM,
  SAVE_URL,
  SAVE_DESCRIPTION,
  TOGGLE_CRITERIA
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
