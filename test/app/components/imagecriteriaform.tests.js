import { expect } from 'chai'
import React from 'react'
import { shallow,mount } from 'enzyme'
import ImageCriteriaForm from '../../../app/components/ImgCriteriaForm'

const props = {
  forms:{
  modalIsOpen: false,
  firstForm: true,
  imageCriteria: [],
  url: '',
  description: '',
  criteriaRequiredMessage: false,
  urlRequiredMessage: false,
  validEmail: true,
  option1: false,
  option2: false,
  option3: false,
  option4: false,
  option5: false
}
}

describe('<ImageCriteriaForm />', () => {
/*  it.only('renders a ProgressBar component', () => {
    const wrapper = mount(<ImageCriteriaForm {...props} />)
    console.log(wrapper.debug())
    expect(wrapper.find('ProgressBar')).to.have.length(1)
  })
  const wrapper = mount(<ImageCriteriaForm {...props} />)
  console.log(wrapper.debug())
  console.log(wrapper.props())*/
/*  it('renders a component with className form-container', () => {
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
  it('renders a <Footer /> component ', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('Footer')).to.have.length(1)
  })
})

describe('<ImageCriteriaForm /> teest props of several elements', () => {
  it('ProgreessBar component should have a percentage prop', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('ProgressBar').props().form).to.equal('1')
  })
  it('<ListItem> no1 should have primaryText "Someone posing in a sexual way" ', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('ListItem').get(0).props.primaryText).to.equal('Someone posing in a sexual way')
  })
  it('<ListItem> no1 should have primaryText "Someone touching themselves in a sexual way" ', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('ListItem').get(1).props.primaryText).to.equal('Someone touching themselves in a sexual way')
  })
  it('<ListItem> no1 should have primaryText "Any sexual activity involving a child, adult or both" ', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('ListItem').get(2).props.primaryText).to.equal('Any sexual activity involving a child, adult or both')
  })
  it('<ListItem> no1 should have primaryText "Someone hurting someone else" ', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('ListItem').get(3).props.primaryText).to.equal('Someone hurting someone else')
  })
  it('<ListItem> no1 should have primaryText "Sexual activity that includes animals" ', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('ListItem').get(4).props.primaryText).to.equal('Sexual activity that includes animals')
  })
  it(' <RaisedButton> should have a primary property', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('RaisedButton').props().primary).to.equal(true)
  })
  it('a tag should point to the childline website', () => {
    const wrapper = shallow(<ImageCriteriaForm />)
    expect(wrapper.find('a').get(0).props.href).to.equal('https://www.childline.org.uk/get-support/1-2-1-counsellor-chat/')
  })*/
})
