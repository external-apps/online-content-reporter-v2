import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import ImageCriteriaForm from '../../../app/components/ImgCriteriaForm'
import PageTitle from '../../../app/components/PageTitle'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import ProgressBar from '../../../app/components/ProgressBar'
import { List, ListItem } from 'material-ui/List'

const props = {
    modalIsOpen: false,
    firstForm: true,
    imageCriteria: [],
    url: '',
    description: ''
}

describe('<ImageCriteriaForm />', () => {
  it('renders a PageTitle compoent', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('PageTitle')).to.have.length(1)
  })
  it('renders a ProgreessBar component', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('ProgressBar')).to.have.length(1)
  })
  it('renders a component with className form-container', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('.form-container')).to.have.length(1)
  })
  it('renders a component with className form-container', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('.form-container')).to.have.length(1)
  })
  it('renders a <List> component ', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('List')).to.have.length(1)
  })
  it('renders 5 <ListItem> components ', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('ListItem')).to.have.length(5)
  })
})
