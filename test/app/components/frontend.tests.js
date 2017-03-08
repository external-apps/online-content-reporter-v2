import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Home from '../../../app/components/Home'


describe('<Home />', () => {
  it('renders an home', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.home-header')).to.have.length(1)
  })
})
