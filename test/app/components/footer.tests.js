import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../../../app/components/Footer'

describe('<Footer /> ', () => {
  it('<Home /> should render an element with className footer', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('.footer')).to.have.length(1)
  })
  it('<Home /> should render an element with className footer', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('.footer-info')).to.have.length(1)
  })
})
