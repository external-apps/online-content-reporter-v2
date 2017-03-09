import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import PageTitle from '../../../app/components/PageTitle'

describe('<PageTitle />', () => {
  it('renders a PageTitle compoent', () => {
    const wrapper = shallow(<PageTitle />)
    expect(wrapper.find('div')).to.have.length(1)
  })
  it('renders a PageTitle compoent', () => {
    const wrapper = shallow(<PageTitle />)
    expect(wrapper.find('.page-title-heading')).to.have.length(1)
  })
  it('renders a PageTitle compoent', () => {
    const wrapper = shallow(<PageTitle />)
    expect(wrapper.find('.page-title-subheading')).to.have.length(1)
  })
})
