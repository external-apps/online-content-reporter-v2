import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import PageTitle from '../../../app/components/PageTitle'

describe('<PageTitle />', () => {
  it('renders a PageTitle compoent', () => {
    const wrapper = shallow(<PageTitle />)
    expect(wrapper.find('.title-container')).to.have.length(1)
  })
})
