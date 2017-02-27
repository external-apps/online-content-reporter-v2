import React from 'react'
import { shallow } from 'enzyme'
import { Home } from '../../../app/components/Home'

function setup () {
  const enzymeWrapper = shallow(<Home />)

  return {
    // props,
    enzymeWrapper
  }
}

describe('Our first tests ', () => {
  it ('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()

    expect(Home.find('h1').hasClass('title')).toBe(true)
    // expect(enzymeWrapper.find('button').text()).toBe('Submit')

  })
})
