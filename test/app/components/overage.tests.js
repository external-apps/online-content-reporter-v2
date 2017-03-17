import { expect } from 'chai'
import React from 'react'
import { shallow, render } from 'enzyme'
import OverAge from '../../../app/components/OverAge'
import PageTitle from '../../../app/components/PageTitle'
import sinon from 'sinon'
import { Link } from 'react-router'


describe('<OverAge />', () => {
  it('<OverAge /> should render a Header', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('Header')).to.have.length(1)
  })
  it('<OverAge /> should render a SectionTitle', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('SectionTitle')).to.have.length(1)
  })
  it('<OverAge /> should render an element with className instruction-list', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.instruction-list')).to.have.length(1)
  })
  it('<OverAge /> should render an element with className what-now', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.what-now')).to.have.length(1)
  })
  it('<OverAge /> should render an element with className other-ops', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.other-ops')).to.have.length(1)
  })
  it('<OverAge /> should render a Footer', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('Footer')).to.have.length(1)
  })
})

describe('<OverAge /> deeper', () => {
  it('<OverAge /> should render a SectionTitle with heading', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('SectionTitle').props().heading).to.equal("SORRY, WE CAN ONLY HELP IF YOU'RE UNDER 18")
  })
  it('<OverAge /> should render a SectionTitle with a subheading', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('SectionTitle').props().subheading).to.equal('There are still lots of things you can do. Try contacting:')
  })
  it('<OverAge /> should render an element with className instruction-list', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.instruction-list')).to.have.length(1)
  })
  it('<OverAge /> should render an element with className instruction-list', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.instruction-list').childAt(0).find('li')).to.have.length(4)
  })
  it('<OverAge /> should render an element with className what-now that should have a child with text "What can I do now?"', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.what-now').childAt(0).text()).to.equal('What can I do now?')
  })
  it('<OverAge /> should render an element with className what-now that should have a p tag child', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.what-now').childAt(1).find('p')).to.have.length(1)
  })
  it('<OverAge /> should render 2 elements with className option', () => {
    const wrapper = render(<OverAge />)
    expect(wrapper.find('.option')).to.have.length(2)
  })
  it('the 1st element with className option should have a grandchild with text "Contact The Mix"', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.other-ops').childAt(0).childAt(1).text()).to.equal('Contact The Mix')
  })
  it('the 1st element with className option should have a grandchild pointing to the "The Mix" site', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.other-ops').childAt(0).childAt(1).props().href).to.equal('http://www.themix.org.uk/')
  })
  it('the 2nd element with className option should have a grandchild with text "Contact Samaritans"', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.other-ops').childAt(1).childAt(1).text()).to.equal('Contact Samaritans')
  })
  it('the 2nd element with className option should have a grandchild pointing to the "Samaritans" site', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('.other-ops').childAt(1).childAt(1).props().href).to.equal('http://www.samaritans.org/')
  })
  it('<OverAge /> should render 2 elements with className contact', () => {
    const wrapper = render(<OverAge />)
    expect(wrapper.find('.contact')).to.have.length(2)
  })
  it('<OverAge /> should render 3 <i> tags', () => {
    const wrapper = render(<OverAge />)
    expect(wrapper.find('i')).to.have.length(2)
  })
})
