import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import ConfirmationModal from '../../../app/components/ConfirmationModal'

const props = {
    modalIsOpen: false,
    firstForm: true,
    imageCriteria: [],
    url: '',
    description: ''
}

describe('<ConfirmationModal />', () => {
  it('initialize isOpen as false', () => {
    const wrapper = shallow(<ConfirmationModal />)
    wrapper.setProps({...props})
    expect(wrapper.props().isOpen).to.equal(false)
  })
  it('ConfirmationModal should have a contentLabel prop', () => {
    const wrapper = shallow(<ConfirmationModal />)
    wrapper.setProps({...props})
    expect(wrapper.props().contentLabel).to.equal('Reassuring message')
  })
})
