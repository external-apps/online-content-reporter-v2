import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Home from '../../../app/components/Home'
import sinon from 'sinon'
import { Link } from 'react-router'
import Form from '../../../app/containers/Forms'
import RaisedButton from 'material-ui/RaisedButton'
import PageTitle from '../../../app/components/PageTitle'

describe('<Home />', () => {
  it('renders an home', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.home-header')).to.have.length(1)
  })
   it('renders one <RaisedButton/> element', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find(RaisedButton)).to.have.length(1)
  })
  it('renders one <Link /> element', () => {
   const wrapper = shallow(<Home />)
   expect(wrapper.find(Link)).to.have.length(2) // update the test when we remove the other link
 })

})
describe('<Home /> children node tests', () => {
  it('renders an home', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.home-header-info')).to.have.length(1)
  })
  it('renders an home', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.home-header-phone')).to.have.length(1)
  })
  it('renders an home', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.home-title')).to.have.length(1)
  })
  it('renders an home', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.home-info')).to.have.length(1)
  })
  it('renders an home', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.section-title')).to.have.length(1)
  })
  it('renders an home', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.home-logos')).to.have.length(1)
  })
  it('renders an home', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('img')).to.have.length(2)
  })
})
