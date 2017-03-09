import { expect } from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Form from '../../../app/containers/Forms'
import sinon from 'sinon'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import PageTitle from '../../../app/components/PageTitle'
import yoti from '../../../app/reducers/yoti'
import forms from '../../../app/reducers/forms'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

/*describe('<Form />', () => {
  it('renders a PageTitle compoent', () => {
    const wrapper = shallow(<Form />)
    expect(wrapper.find('PageTitle')).to.have.length(1)
  })
})*/
