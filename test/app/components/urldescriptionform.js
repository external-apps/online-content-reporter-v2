import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import UrlDescriptionForm from '../../../app/components/UrlDescriptionForm'
import PageTitle from '../../../app/components/PageTitle'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import ProgressBar from '../../../app/components/ProgressBar'
import ConfirmationModal from '../../../app/components/ConfirmationModal'
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
  it('renders a compoent with className url-form-description', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('.url-form-description')).to.have.length(1)
  })
  it('renders a compoent wth className form-container', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('.form-container')).to.have.length(1)
  })
  it('renders a compoent wth className <ConfirmationModal>', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('ConfirmationModal')).to.have.length(1)
  })
  it('renders a compoent wth className <RaisedButton>', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('RaisedButton')).to.have.length(2)
  })
  it('renders a compoent wth className <TextField>', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('TextField')).to.have.length(2)
  })
})
