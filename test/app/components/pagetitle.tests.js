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
  it('<PageTitle /> should render an element with className page-title-heading', () => {
    const wrapper = shallow(<PageTitle />)
    expect(wrapper.find('.page-title-heading')).to.have.length(1)
  })
  it('<PageTitle /> should render an element with className page-title-subheading', () => {
    const wrapper = shallow(<PageTitle />)
    expect(wrapper.find('.page-title-subheading')).to.have.length(1)
  })
  it('<PageTitle /> should render a <p> tag', () => {
    const wrapper = shallow(<PageTitle />)
    expect(wrapper.find('p')).to.have.length(1)
  })
  it('<PageTitle /> should accept props', () => {
    const wrapper = shallow(<PageTitle />)
    wrapper.setProps({...props})
    expect(wrapper.find('p').text()).to.equal('I am a subtitle')
  })

})
