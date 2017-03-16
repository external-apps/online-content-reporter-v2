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

describe('<ConfirmationModal /> props', () => {
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

describe('<ConfirmationModal />', () => {
  it('div with className mod', () => {
    const wrapper = shallow(<ConfirmationModal />)
    expect(wrapper.find('.mod')).to.have.length(1)
  })
  it('Link', () => {
    const wrapper = shallow(<ConfirmationModal />)
    expect(wrapper.find('Link')).to.have.length(1)
  })
  it('RaisedButton', () => {
    const wrapper = shallow(<ConfirmationModal />)
    expect(wrapper.find('RaisedButton')).to.have.length(2)
  })
  it('TextField', () => {
    const wrapper = shallow(<ConfirmationModal />)
    expect(wrapper.find('TextField')).to.have.length(1)
  })
})

describe('<ConfirmationModal />', () => {
  it('Link', () => {
    const wrapper = shallow(<ConfirmationModal />)
    expect(wrapper.find('Link').props().className).to.equal('modal-link')
  })
  it('Link', () => {
    const wrapper = shallow(<ConfirmationModal />)
    expect(wrapper.find('Link').props().to).to.equal('/')
  })
  it('RaisedButton', () => {
    const wrapper = shallow(<ConfirmationModal />)
    expect(wrapper.find('RaisedButton').get(0).props.primary).to.equal(true)
  })
  it('RaisedButton', () => {
    const wrapper = shallow(<ConfirmationModal />)
    expect(wrapper.find('RaisedButton').get(0).props.className).to.equal('close_btn')
  })
  it('RaisedButton', () => {
    const wrapper = shallow(<ConfirmationModal />)
    expect(wrapper.find('RaisedButton').get(0).props.label).to.equal('X')
  })
  it('RaisedButton', () => {
    const wrapper = shallow(<ConfirmationModal />)
    expect(wrapper.find('RaisedButton').get(1).props.primary).to.equal(true)
  })
  it('RaisedButton', () => {
    const wrapper = shallow(<ConfirmationModal />)
    expect(wrapper.find('RaisedButton').get(1).props.label).to.equal('Submit')
  })
  it('TextField', () => {
    const wrapper = shallow(<ConfirmationModal />)
    expect(wrapper.find('TextField').props().hintText).to.equal('jane.doe@gmail.com')
  })
  it('TextField', () => {
    const wrapper = shallow(<ConfirmationModal />)
    expect(wrapper.find('TextField').props().floatingLabelText).to.equal('Email address')
  })
})
