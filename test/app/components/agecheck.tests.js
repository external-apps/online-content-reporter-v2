import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import AgeCheck from '../../../app/components/AgeCheckPage'

describe('renders <AgeCheck />', () => {
  it('<AgeCheck /> should render 2 <a> tags', () => {
    const wrapper = shallow(<AgeCheck />) /*i guess they should be Links justto be consisten!!*/
    expect(wrapper.find('a')).to.have.length(2)
  })
})
