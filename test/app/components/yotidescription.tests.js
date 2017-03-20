import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import YotiDescription from '../../../app/components/YotiDescription'
const props = {
  props:{
    yoti: {
      showQr: false
    }
  }
}
console.log(YotiDescription)
describe('<YotiDescription />', () => {
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
