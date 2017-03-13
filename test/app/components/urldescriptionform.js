import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import UrlDescriptionForm from '../../../app/components/UrlDescriptionForm'

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

describe('<UrlDescriptionForm /> teest props of several elements', () => {
  it('PageTile component should have a heading prop', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('PageTitle').props().heading).to.equal('REPORT CONTENT WEB ADDRESS')
  })
  it('PageTile component should have a backgroundColor prop', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('PageTitle').props().backgroundColor).to.equal('dark-cobalt')
  })
  it('ProgreessBar component should have a percentage prop', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('ProgressBar').props().percentage).to.equal('100')
  })
  it(' <TextField> has a hintText property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('TextField').first().props().hintText).to.equal('Please enter the website in concern here. If you have multiple webpages (URLs) to report. Please let us know in the description.')
  })
  it(' <TextField> has a floatingLabelText property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('TextField').first().props().floatingLabelText).to.equal('url')
  })
  it(' <TextField> has a hintText property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('TextField').get(1).props.hintText).to.equal('Message Field')
  })
  it(' <TextField> has a floatingLabelText property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('TextField').get(1).props.floatingLabelText).to.equal('Description')
  })
  it(' <TextField> has a rows property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('TextField').get(1).props.rows).to.equal(4)
  })
  it(' <TextField> has a multiLine property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('TextField').get(1).props.multiLine).to.equal(true)
  })
  it(' <RaisedButton> 1  should have a label property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('RaisedButton').get(0).props.label).to.equal('Submit')
  })
  it(' <RaisedButton> 1 should have an id property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('RaisedButton').get(0).props.id).to.equal('submit-url')
  })
  it(' <RaisedButton> 1  should have a primary property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('RaisedButton').get(0).props.primary).to.equal(true)
  })
  it(' <RaisedButton> 2  should have a label property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('RaisedButton').get(1).props.label).to.equal('Previous')
  })
  it(' <RaisedButton> 2  should have a primary property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('RaisedButton').get(1).props.primary).to.equal(true)
  })
})
