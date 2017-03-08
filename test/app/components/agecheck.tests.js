import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import AgeCheck from '../../../app/components/AgeCheckPage'
import sinon from 'sinon'
import { Link } from 'react-router'
import Form from '../../../app/containers/Forms'
import RaisedButton from 'material-ui/RaisedButton'
import PageTitle from '../../../app/components/PageTitle'

describe('<AgeCheck />', () => {
  it('renders ', () => {
    const wrapper = shallow(<AgeCheck />)
    expect(wrapper.find('PageTitle')).to.have.length(1)
  })

})
