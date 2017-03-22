import { expect } from 'chai'
import React from 'react'
import { connect } from 'react-redux'
import { shallowWithStore } from 'enzyme-redux'
import { createMockStore } from 'redux-test-utils'
import Form from '../../../app/containers/Forms'

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

describe('test Form props with shallowWithStore', () => {
    const mapStateToProps = (state) => state
    const ConnectedComponent = connect(mapStateToProps)(Form)
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
    it('initialize prop.forms.modalIsOpen to be false', () => {
      expect(component.props().forms.modalIsOpen).to.equal(false)
    })
    it('initialize prop.forms.firstForm to be true', () => {
      expect(component.props().forms.firstForm).to.equal(true)
    })
    it('initialize prop.forms.criteriaRequiredMessage to be false', () => {
      expect(component.props().forms.criteriaRequiredMessage).to.equal(false)
    })
    it('initialize prop.forms.urlRequiredMessage to be false', () => {
      expect(component.props().forms.urlRequiredMessage).to.equal(false)
    })
    it('initialize prop.forms.validEmail to be true', () => {
      expect(component.props().forms.validEmail).to.equal(true)
    })
    it('initialize prop.forms.option1 to be false', () => {
      expect(component.props().forms.option1).to.equal(false)
    })
    it('initialize prop.forms.option2 to be false', () => {
      expect(component.props().forms.option2).to.equal(false)
    })
    it('initialize prop.forms.option3 to be false', () => {
      expect(component.props().forms.option3).to.equal(false)
    })
    it('initialize prop.forms.option4 to be false', () => {
      expect(component.props().forms.option4).to.equal(false)
    })
    it('initialize prop.forms.option5 to be false', () => {
      expect(component.props().forms.option5).to.equal(false)
    })
    it('initialize prop.forms.imageCriteria to be an empty array', () => {
      expect(component.props().forms.imageCriteria.length).to.equal(0)
    })
    it('initialize prop.forms.url to be an empty string', () => {
      expect(component.props().forms.url).to.equal("")
    })
    it('initialize prop.forms.description to be an empty string', () => {
      expect(component.props().forms.description).to.equal("")
    })
})
