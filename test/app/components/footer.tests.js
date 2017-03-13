import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../../../app/components/Footer'

describe('<Footer /> ', () => {
  it('<Footer /> should render an element with className footer', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('.footer')).to.have.length(1)
  })
  it('<Footer /> should render an element with className footer', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('.footer-info')).to.have.length(1)
  })
  it('<Footer /> should render an element with className footer-logos', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('.footer-logos')).to.have.length(1)
  })
  it('<Footer /> should render an img tag', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('img')).to.have.length(1)
  })
  it('<Footer /> should render an element with src prop', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('img').props().src).to.equal('imgs/iwf-logo.png')
  })
  it('<Footer /> should render an element with an alt prop', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('img').props().alt).to.equal('IWF logo')
  })
  it('<Footer /> should render 3 a tags', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('a')).to.have.length(3)
  })
})
