import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Home from '../../../app/components/Home'
import sinon from 'sinon'
import Form from '../../../app/containers/Forms'
import * as formActions from '../../../app/actions/forms'
import {
  ADD_QR_CODE,
  SET_UP_FOR_MOBILE,
  OPEN_MODAL,
  CLOSE_MODAL,
  NEXT_FORM,
  ADD_CRITERIA
} from '../../../constants/action-types'

describe('<Home />', () => {
  it('renders an home', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.home-header')).to.have.length(1)
  })

})



describe('FeatureFirstContainer actions', () => {
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
/*  it('should dispatch an action to close modal', () => {
    const expectedAction = {
      type: ADD_CRITERIA,
    }
    expect(
      formActions.addCriteria()
    ).to.deep.equal(expectedAction);
  }) expect criteria*/
})
