import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import YotiDescription from '../../../app/components/YotiDescription'

describe('<YotiDescription /> showQr prop false tests', () => {
  it('renders an element with class yoti-description-container', () => {
    const wrapper = shallow(<YotiDescription yoti={{showQr:false}}/>)
    expect(wrapper.find('.yoti-description-container')).to.have.length(1)
  })
  it('renders an element with class yoti-description-title', () => {
    const wrapper = shallow(<YotiDescription yoti={{showQr:false}}/>)
    expect(wrapper.find('.yoti-description-title')).to.have.length(1)
  })
  it('renders a span element with class yoti-description', () => {
    const wrapper = shallow(<YotiDescription yoti={{showQr:false}} />)
    expect(wrapper.find('span').props().className).to.equal('yoti-description')
  })
  it('renders a p element with class yoti-instructions', () => {
    const wrapper = shallow(<YotiDescription yoti={{showQr:false}}/>)
    expect(wrapper.find('p').get(1).props.className).to.equal('yoti-instructions')
  })
  it('renders an img element with alt tag yoti logo', () => {
    const wrapper = shallow(<YotiDescription yoti={{showQr:false}}/>)
    expect(wrapper.find('img').props().alt).to.equal('yoti logo')
  })
  it('renders an img element with src pointing to the yoti logo', () => {
    const wrapper = shallow(<YotiDescription yoti={{showQr:false}}/>)
    expect(wrapper.find('img').props().src).to.equal('/assets/imgs/yoti-logo.svg')
  })
  it('renders an anvhor tag with href pointing to the yoti website', () => {
    const wrapper = shallow(<YotiDescription yoti={{showQr:false}}/>)
    expect(wrapper.find('a').props().href).to.equal('www.yoti.com/')
  })
})

describe('<YotiDescription /> showQr prop true tests', () => {
  it('renders an element with class yoti-qr', () => {
    const wrapper = shallow(<YotiDescription yoti={{showQr:true}}/>)
    expect(wrapper.find('.yoti-qr')).to.have.length(1)
  })
  it('renders a QrCode element', () => {
    const wrapper = shallow(<YotiDescription yoti={{showQr:true}}/>)
    console.log(wrapper.debug())
    expect(wrapper.find('QrCode')).to.have.length(1)
  })
})
