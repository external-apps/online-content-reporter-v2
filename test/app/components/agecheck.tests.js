import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import AgeCheck from '../../../app/components/AgeCheckPage'

describe('<AgeCheck />', () => {
  it('renders a Header component', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('Header')).to.have.length(1)
  })
  it('renders a SectionTitle component', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('SectionTitle')).to.have.length(1)
  })
  /*it('renders a Yoti component', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('Yoti')).to.have.length(1)
  })*/
  it('renders a Footer component', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('Footer')).to.have.length(1)
  })
})
