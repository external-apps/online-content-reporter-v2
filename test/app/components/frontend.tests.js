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


describe('<Form />', () => {


})
