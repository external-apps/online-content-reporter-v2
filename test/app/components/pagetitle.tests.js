import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import PageTitle from '../../../app/components/PageTitle'
const props = {
   subheading :'I am a subtitle'
};

describe('<PageTitle />', () => {
  it('renders a PageTitle compoent', () => {
    const wrapper = shallow(<PageTitle />)
    expect(wrapper.find('div')).to.have.length(1)
    expect(wrapper.children().length).to.equal(2)
  })
  it('renders a PageTitle compoent', () => {
    const wrapper = shallow(<PageTitle />)
    expect(wrapper.find('.page-title-heading')).to.have.length(1)
  })
  it('renders a PageTitle compoent', () => {
    const wrapper = shallow(<PageTitle />)
    expect(wrapper.find('.page-title-subheading')).to.have.length(1)
    expect(wrapper.find('p')).to.have.length(1)
    wrapper.setProps({...props})
    expect(wrapper.find('p').text()).to.equal('I am a subtitle')
  })
})
