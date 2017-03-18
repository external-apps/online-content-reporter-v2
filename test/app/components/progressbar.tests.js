import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import ProgressBar from '../../../app/components/ProgressBar'

const props = {
  form: '1'
}

describe('<ProgressBar />', () => {
  it('renders an element with progress-bar class', () => {
    const wrapper = shallow(<ProgressBar />)
    expect(wrapper.find('.progress-bar')).to.have.length(1)
  })
  it('renders an h2 element', () => {
    const wrapper = shallow(<ProgressBar />)
    expect(wrapper.find('h2')).to.have.length(1)
  })
})

describe('<ProgressBar /> should receive props and render them', () => {
  it('receives a form prop and renders it', () => {
    const wrapper = shallow(<ProgressBar />)
    wrapper.setProps({...props})
    expect(wrapper.find('h2').text()).to.equal('Step 1 of 2')
  })
})
