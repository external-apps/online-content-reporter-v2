import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Home from '../../../app/components/Home'
import sinon from 'sinon'
import { Link } from 'react-router'
import Form from '../../../app/containers/Forms'
import RaisedButton from 'material-ui/RaisedButton'
import PageTitle from '../../../app/components/PageTitle'
import * as formActions from '../../../app/actions/forms'
import * as yotiActions from '../../../app/actions/yoti'

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
  /*it('renders one <PageTitle/> component', () => {
   const wrapper = shallow(<Home />)
   expect(wrapper.find(<PageTitle/>)).to.have.length(1)
 })*/
   it('renders one <RaisedButton/> element', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find(RaisedButton)).to.have.length(1)
  })
  it('renders one <Link /> element', () => {
   const wrapper = shallow(<Home />)
   expect(wrapper.find(Link)).to.have.length(2) // update the test when we remove the other link
 })
})



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
  it('should dispatch an action to close modal', () => { //
    const expectedAction = {
      type: ADD_CRITERIA,
    }
    expect(
      formActions.addCriteria()
    ).to.have.property('type','ADD_CRITERIA')
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
