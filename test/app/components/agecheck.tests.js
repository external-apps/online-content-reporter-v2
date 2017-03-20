import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
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
 it('renders an element with agecheck-body class', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('.agecheck-body')).to.have.length(1)
  })
  it('renders an element with age-info class', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('.age-info')).to.have.length(1)
  })
  it('renders an element with age-info class has a child with "What can I do if I am over 18?"text', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('.age-info').childAt(0).text()).to.have.equal('What can I do if I am over 18?')
  })
  it('renders an element with age-info class has a p tag child', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('.age-info').find('p')).to.have.length(1)
  })
})

describe('<AgeCheck /> SectionTitle props', () => {
  it('has a heading "CONFIRM YOUR AGE"', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('SectionTitle').props().heading).to.equal('CONFIRM YOUR AGE')
  })
  it('has a heading "To remove an image or video, we just need to know your age. We can only remove this content if you are under 18."', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('SectionTitle').props().subheading).to.equal("To remove an image or video, we just need to know your age. We can only remove this content if you're under 18.")
  })
})
