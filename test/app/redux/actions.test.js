import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon'
import * as formActions from '../../../app/actions/forms'
import * as yotiActions from '../../../app/actions/yoti'

import {
  ADD_QR_CODE,
  SET_UP_FOR_MOBILE,
  OPEN_MODAL,
  CLOSE_MODAL,
  NEXT_FORM,
  SAVE_URL,
  SAVE_DESCRIPTION,
  ADD_CRITERIA
} from '../../../constants/action-types'

describe('Test actions', () => {
  it('should dispatch an action to openModal()', () => {
    const expectedAction = {
      type: OPEN_MODAL,
    }
    expect(
      formActions.openModal()
    ).to.deep.equal(expectedAction);
  })
  it('should dispatch an action to closeModal()', () => {
    const expectedAction = {
      type: CLOSE_MODAL,
    }
    expect(
      formActions.closeModal()
    ).to.deep.equal(expectedAction);
  })
  it('should dispatch an action to nextForm()', () => {
    const expectedAction = {
      type: NEXT_FORM,
    }
    expect(
      formActions.nextForm()
    ).to.deep.equal(expectedAction);
  })
  it('should dispatch an action to save url', () => { //
    const expectedAction = {
      type: SAVE_URL,
    }
    expect(
      formActions.saveUrl()
    ).to.have.property('type','SAVE_URL')
  })
  it('should dispatch an action to save description', () => { //
    const expectedAction = {
      type: SAVE_DESCRIPTION,
    }
    expect(
      formActions.saveDescription()
    ).to.have.property('type','SAVE_DESCRIPTION')
  })
})

describe('FeatureFirstContainer actions', () => {//
  it('should dispatch an action to openModal()', () => {
    const expectedAction = {
      type: SET_UP_FOR_MOBILE,
    }
    expect(
      yotiActions.setUpForMobile()
    ).to.have.property('type','SET_UP_FOR_MOBILE')
  })
})
