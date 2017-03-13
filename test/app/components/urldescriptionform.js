import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import UrlDescriptionForm from '../../../app/components/UrlDescriptionForm'
import PageTitle from '../../../app/components/PageTitle'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import ProgressBar from '../../../app/components/ProgressBar'
const props = {
    modalIsOpen: false,
    firstForm: true,
    imageCriteria: [],
    url: '',
    description: ''
}

describe('<UrlDescriptionForm />', () => {
  it('renders a PageTitle compoent', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('PageTitle')).to.have.length(1)
  })
  it('renders a ProgreessBar compoent', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('ProgressBar')).to.have.length(1)
  })
})
