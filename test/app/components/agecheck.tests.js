import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import AgeCheck from '../../../app/components/AgeCheckPage'

describe('renders <AgeCheck />', () => {
  /*it('<AgeCheck /> should have a <PageTitle /> component', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('PageTitle')).to.have.length(1)
  })
  it('<AgeCheck /> should have a <PageTitle /> component with a heading prop', () => {
    const wrapper = shallow(<AgeCheck />)
    const titleProps = wrapper.find('PageTitle').props()
    expect(titleProps.heading).to.equal('ARE YOU UNDER 18?')
  })
  it('<AgeCheck /> should have a <PageTitle /> component with backgroundColor prop', () => {
    const wrapper = shallow(<AgeCheck />)
    const titleProps = wrapper.find('PageTitle').props()
    expect(titleProps.backgroundColor).to.equal('blue')
  })
  it('<AgeCheck /> should render an element with .age-info-1 class', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('.age-info')).to.have.length(1)
  })
  it('.age-info-1 class should have a <p> children', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('.age-info').childAt(0).type()).to.equal('div')
  })*/
  /*it('.age-info-1 class should have a <p> children, which has an <a> children', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('.age-info').childAt(0).find('a')).to.have.length(1)
  })*/
  /*it('<AgeCheck /> should render an element with .age-info class', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('.age-overage')).to.have.length(1)
  })*/
  it('<AgeCheck /> should render 2 <a> tags', () => {
    const wrapper = shallow(<AgeCheck />) /*i guess they should be Links justto be consisten!!*/
    expect(wrapper.find('a')).to.have.length(2)
  })
  /*it('<AgeCheck /> should render 2 <i> tags', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('i')).to.have.length(1)
  })*/
})
