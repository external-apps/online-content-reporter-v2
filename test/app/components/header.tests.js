import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../../app/components/Header'

describe('<Header /> ', () => {
  it('<Header /> should render an h2 tag', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('h2')).to.have.length(1)
  })
  it('<Header /> should render an h2 tag with class header', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('.header')).to.have.length(1)
  })
  it('<Header /> should render an h2 tag with class header and text REPORT AN IMAGE OR VIDEO', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('.header').text()).to.equal('REPORT AN IMAGE OR VIDEO')
  })
})
