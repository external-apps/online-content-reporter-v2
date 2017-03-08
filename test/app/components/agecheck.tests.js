import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import AgeCheck from '../../../app/components/AgeCheckPage'
import sinon from 'sinon'
import { Link } from 'react-router'
import Form from '../../../app/containers/Forms'
import RaisedButton from 'material-ui/RaisedButton'
import PageTitle from '../../../app/components/PageTitle'
import ProgressBar from '../../../app/components/ProgressBar'

describe('<AgeCheck />', () => {
  it('renders ', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('PageTitle')).to.have.length(1)
    const titleProps = wrapper.find('PageTitle').props()
    expect(titleProps.heading).to.equal('ARE YOU UNDER 18?')
    expect(titleProps.backgroundColor).to.equal('title-container-light-blue')
  })
  it('renders ', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('ProgressBar')).to.have.length(1)
    const barProps = wrapper.find('ProgressBar').props()
      expect(barProps.percentage).to.equal('33')
  })
  it('renders ', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('.age-info-1')).to.have.length(1)
  })
  it('renders ', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('.age-info-2')).to.have.length(1)
  })
})
