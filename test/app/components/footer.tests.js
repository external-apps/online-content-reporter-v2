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
  it('<Footer /> should render an element with className childline-stamp', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('.childline-stamp')).to.have.length(1)
  })
  it('<Footer /> should render an img tag', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('img')).to.have.length(1)
  })
  it('<Footer /> should render an element with src prop', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('img').props().src).to.equal('/assets/imgs/iwf-logo.png')
  })
  it('<Footer /> should render an element with an alt prop', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('img').props().alt).to.equal('IWF logo')
  })
  it('<Footer /> should render 3 a tags', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('a')).to.have.length(3)
  })
  it('<Footer /> should render 2 p tags', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('p')).to.have.length(2)
  })
  it('<Footer /> should render an <h5>', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('h5').text()).to.equal('ONLINE, ON THE PHONE, ANYTIME')
  })
  it('<Footer /> should render an <h2>', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('h2').text()).to.equal('childline')
  })
})

describe('<Footer /> a tag tests ', () => {
  it('<Footer /> should an a tag with href "https://www.iwf.org.uk/what-we-do"', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('a').get(0).props.href).to.equal('https://www.iwf.org.uk/what-we-do')
  })
  it('<Footer /> should an a tag with href "https://www.childline.org.uk"', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('a').get(1).props.href).to.equal('https://www.childline.org.uk')
  })
  it('<Footer /> should an a tag with href "https://www.yoti.com/"', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('a').get(2).props.href).to.equal('https://www.yoti.com/')
  })
})
