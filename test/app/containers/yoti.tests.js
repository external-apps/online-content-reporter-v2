import { expect } from 'chai'
import React from 'react'
import { connect } from 'react-redux'
import { shallowWithStore } from 'enzyme-redux'
import { createMockStore } from 'redux-test-utils'
import Yoti from '../../../app/containers/Yoti'

let state= {
  yoti: {
    isMobile: false,
    target: '_blank',
    haveQr: false,
    showQr: false,
    isAgeVerified: false,
    isUnder18: false,
    isOver18: false,
    href: null,
    buttonLabelStyle: { fontSize: '1.1rem', textTransform: 'none', fontFamily: 'childline' },
    buttonStyle: { padding: '0.8rem 0', whiteSpace: 'nowrap', minWidth: '8rem' }
  },
  forms: {
    modalIsOpen: false,
    firstForm: true,
    imageCriteria: [],
    url: '',
    description: '',
    criteriaRequiredMessage: false,
    urlRequiredMessage: false,
    validEmail: true,
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false
  }
}

describe('test Home props with shallowWithStore', () => {
  describe('state', () => {
    const mapStateToProps = (state) => ({
      yoti :state.yoti
    });
    const ConnectedComponent = connect(mapStateToProps)(Yoti)
    const component = shallowWithStore(<ConnectedComponent />, createMockStore(state))
    it('initialize prop.yoti.haveQr to be false', () => {
      expect(component.props().yoti.haveQr).to.equal(false)
    })
    it('initialize prop.yoti.isMobile to be false', () => {
      expect(component.props().yoti.isMobile).to.equal(false)
    })
    it('initialize prop.yoti.showQr to be false', () => {
      expect(component.props().yoti.showQr).to.equal(false)
    })
    it('initialize prop.yoti.isAgeVerified to be false', () => {
      expect(component.props().yoti.isAgeVerified).to.equal(false)
    })
    it('initialize prop.yoti.isUnder18 to be false', () => {
      expect(component.props().yoti.isUnder18).to.equal(false)
    })
    it('initialize prop.yoti.isOver18 to be false', () => {
      expect(component.props().yoti.isOver18).to.equal(false)
    })
    it('initialize prop.yoti.href to be null', () => {
      expect(component.props().yoti.href).to.equal(null)
    })
    it('initialize prop.yoti.buttonLabelStyle', () => {
      expect(component.props().yoti.buttonLabelStyle).to.deep.equal({ fontSize: '1.1rem', textTransform: 'none', fontFamily: 'childline' })
    })
    it('initialize prop.yoti.buttonStyle', () => {
      expect(component.props().yoti.buttonStyle).to.deep.equal({ padding: '0.8rem 0', whiteSpace: 'nowrap', minWidth: '8rem' })
    })
  })
})
