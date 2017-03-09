import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import AgeCheck from '../../../app/components/AgeCheckPage'
import sinon from 'sinon'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import PageTitle from '../../../app/components/PageTitle'
import ProgressBar from '../../../app/components/ProgressBar'

describe('renders <AgeCheck />', () => {
  it('<AgeCheck /> should have a <PageTitle /> component', () => {
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
  it('<AgeCheck /> should have a <ProgressBar /> component', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('ProgressBar')).to.have.length(1)
  })
  it('<AgeCheck /> should have a <ProgressBar /> component with a percentage prop', () => {
    const wrapper = shallow(<AgeCheck />)
    const barProps = wrapper.find('ProgressBar').props()
    expect(barProps.percentage).to.equal('33')
  })
  it('renders ', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('.age-info-1')).to.have.length(1)
  })
  it('renders ', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('.age-info-1').childAt(0).type()).to.equal('p')
  })
  it('renders ', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('.age-info-1').childAt(0).find('a')).to.have.length(1)
  })
  it('renders ', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('.age-info-2')).to.have.length(1)
  })
  it('renders ', () => {
    const wrapper = shallow(<AgeCheck />) /*i guess they should be Links justto be consisten!!*/
    expect(wrapper.find('a')).to.have.length(2)
  })
  it('renders ', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('i')).to.have.length(2)
  })
})
