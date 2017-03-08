import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import ProgressBar from '../../../app/components/ProgressBar'
import sinon from 'sinon'
import { Link } from 'react-router'


describe('<ProgressBar />', () => {
  it('renders an home', () => {
    const wrapper = shallow(<ProgressBar />)
    expect(wrapper.find('.progress-bar')).to.have.length(1)
  })
})
