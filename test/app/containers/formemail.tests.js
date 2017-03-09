import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import FormEmail from '../../../app/containers/FormEmail'
import sinon from 'sinon'
import { Link } from 'react-router'
import ReactHTMLEmail from 'react-html-email'
// set up React to support a few HTML attributes useful for legacy clients
ReactHTMLEmail.injectReactEmailAttributes()
import { Box, Email, Image, Item, Span, A,renderEmail } from 'react-html-email'

describe('renders <FormEmail />', () => {
  it('<FormEmail /> should have an <Email /> component', () => {
    const wrapper = shallow(<FormEmail />)
    expect(wrapper.find('Email')).to.have.length(1)
  })
  it('<FormEmail /> should have 3 <Item /> components', () => {
    const wrapper = shallow(<FormEmail />)
    expect(wrapper.find('Item')).to.have.length(3)
  })
  it('<FormEmail /> should have a <Span /> components', () => {
    const wrapper = shallow(<FormEmail />)
    expect(wrapper.find('Span')).to.have.length(2)
  })
  it('<FormEmail /> should have a <Box /> components', () => {
    const wrapper = shallow(<FormEmail />)
    expect(wrapper.find('Box')).to.have.length(1)
  })
  it('<FormEmail /> should have a <Image /> components', () => {
    const wrapper = shallow(<FormEmail />)
    expect(wrapper.find('Image')).to.have.length(1)
  })
})
