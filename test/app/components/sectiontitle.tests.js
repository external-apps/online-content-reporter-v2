import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import SectionTitle from '../../../app/components/SectionTitle'

const props = {
  heading: 'Heading',
  subheading: 'Subheading',
  span: 'I am bold :D'
}

describe('<SectionTitle /> ', () => {
  it('<Header /> should render a section-title-container', () => {
    const wrapper = shallow(<SectionTitle />)
    expect(wrapper.find('.section-title-container')).to.have.length(1)
  })
  it('<Header /> should render a section-title-heading', () => {
    const wrapper = shallow(<SectionTitle />)
    expect(wrapper.find('.section-title-heading')).to.have.length(1)
  })
  it('<Header /> should render a section-title-subheading', () => {
    const wrapper = shallow(<SectionTitle />)
    expect(wrapper.find('.section-title-subheading')).to.have.length(1)
  })
  it('<Header /> should render a span', () => {
    const wrapper = shallow(<SectionTitle />)
    expect(wrapper.find('span')).to.have.length(1)
  })
  it('<Header /> should render a span with className bold', () => {
    const wrapper = shallow(<SectionTitle />)
    expect(wrapper.find('span').props().className).to.equal('bold')
  })
})

describe('<SectionTitle /> test props ', () => {
  it('<SectionTitle /> should have a heading prop with the text "Heading"', () => {
    const wrapper = shallow(<SectionTitle />)
    wrapper.setProps({...props})
    expect(wrapper.find('.section-title-heading').text()).to.equal('Heading')
  })
  it('<SectionTitle /> can receive a subheading prop and render it', () => {
    const wrapper = shallow(<SectionTitle />)
    wrapper.setProps({...props})
    expect(wrapper.find('.section-title-subheading').text()).to.equal('Subheading I am bold :D')
  })
  it('<SectionTitle /> can receive a span prop and render it', () => {
    const wrapper = shallow(<SectionTitle />)
    wrapper.setProps({...props})
    expect(wrapper.find('span').text()).to.equal(' I am bold :D')
  })
})
