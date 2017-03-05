import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Home from '../../../app/components/Home'


describe.only('<Home />', () => {
  /*it('renders three <Foo /> components', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo)).to.have.length(3);
  });*/

   /*it('renders an home', () => {
     const wrapper = shallow(<Home />)
//    console.log(wrapper.debug())
  //  console.log(wrapper.contains(<p>HAHO</p>))
     console.log(expect(wrapper.contains(<p>HAHO</p>)))
     expect(wrapper.contains(<p>HAHO</p>)).toBeTruthy();
   });*/
//notice: now it requests the assertionfunctions to be Chai style functions..is that what we want?
  it('renders an home', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.landing-header')).to.have.length(1)
  })
})
