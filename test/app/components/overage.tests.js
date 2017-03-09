import { expect } from 'chai'
import React from 'react'
import { shallow, render } from 'enzyme'
import OverAge from '../../../app/components/OverAge'
import PageTitle from '../../../app/components/PageTitle'
import sinon from 'sinon'
import { Link } from 'react-router'


describe('<OverAge />', () => {
  it('<OverAge /> should render a <PageTitle/> element', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('PageTitle')).to.have.length(1)
    const pageTitleProps = wrapper.find('PageTitle').props();
    expect(pageTitleProps.heading).to.equal("SORRY, YOU'RE TOO OLD FOR THIS SERVICE")
  })
  it('<OverAge /> should render an element with className what-now', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.what-now')).to.have.length(1)
  })
  it('<OverAge /> should render an <h3>', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('h3')).to.have.length(1)
  })
  it('<OverAge /> should render an element with className other-ops', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.other-ops')).to.have.length(1)
  })
  // TODO test nested elements too
})

describe('<OverAge /> deeper', () => {
  it('renders a', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.what-now').childAt(0).text()).to.equal('What can I do now?')
  })
  it('renders a 3 options', () => {
    const wrapper = render(<OverAge />)
    expect(wrapper.find('.option')).to.have.length(3)
  })
  it('renders a 3 options', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.other-ops').childAt(0).childAt(1).text()).to.equal('Contact CEOP')
  })
  it('renders a 3 options', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.other-ops').childAt(1).childAt(1).text()).to.equal('Contact The Mix')
  })
  it('renders a 3 options', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.other-ops').childAt(2).childAt(1).text()).to.equal('Contact Samaritans')
  })
  it('renders a 3 contacts', () => {
    const wrapper = render(<OverAge />)
    expect(wrapper.find('.contact')).to.have.length(3)
  })
  it('renders a 3 i tags', () => {
    const wrapper = render(<OverAge />)
    expect(wrapper.find('i')).to.have.length(4)
  })
})
