import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import OverAge from '../../../app/components/OverAge'
import PageTitle from '../../../app/components/PageTitle'
import sinon from 'sinon'
import { Link } from 'react-router'


describe('<OverAge />', () => {
  it('renders an PageTitle', () => {
    const wrapper = shallow(<OverAge />)
    expect(wrapper.find('PageTitle')).to.have.length(1)
  })
})
