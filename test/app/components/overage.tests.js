import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import OverAge from '../../../app/components/OverAge'
import PageTitle from '../../../app/components/PageTitle'
import sinon from 'sinon'
import { Link } from 'react-router'


describe('<OverAge />', () => {
  it('renders an PageTitle', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('PageTitle')).to.have.length(1)
    const pageTitleProps = wrapper.find('PageTitle').props();
    expect(pageTitleProps.heading).to.equal("SORRY, YOU'RE TOO OLD FOR THIS SERVICE")
  })
  it('renders a', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.what-now')).to.have.length(1)
  })
  it('renders a', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('h3')).to.have.length(1)
  })
  it('renders a', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.other-ops')).to.have.length(1)
  })
  // TODO test nested elements too
})
