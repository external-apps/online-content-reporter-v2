import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import ProgressBar from '../../../app/components/ProgressBar'

describe('<ProgressBar />', () => {
  it('renders an element with progress-bar class', () => {
    const wrapper = shallow(<ProgressBar />)
    expect(wrapper.find('.progress-bar')).to.have.length(1)
  })
})
