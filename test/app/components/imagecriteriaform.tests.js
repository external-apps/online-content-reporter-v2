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
  it('renders a component with className other-options', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('.other-options')).to.have.length(1)
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

describe('<ImageCriteriaForm /> teest props of several elements', () => {
  it('PageTile component should have a heading prop', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('PageTitle').props().heading).to.equal('DESCRIBE THE ONLINE CONTENT')
  })
  it('PageTile component should have a backgroundColor prop', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('PageTitle').props().backgroundColor).to.equal('purple')
  })
  it('ProgreessBar component should have a percentage prop', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('ProgressBar').props().percentage).to.equal('66')
  })
})
