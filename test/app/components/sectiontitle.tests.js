import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import SectionTitle from '../../../app/components/SectionTitle'

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
