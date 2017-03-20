import { expect } from 'chai'
import React from 'react'
import { shallow, mount } from 'enzyme'
import UrlDescriptionForm from '../../../app/containers/Home'
import mockStore from 'redux-mock-store';
const props = {
  forms:{
  modalIsOpen: false,
  firstForm: false,
  imageCriteria: [],
  url: 'sg',
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

/*describe('<UrlDescriptionForm />', () => {
    let store = mockStore(props);
    component = mount(<UrlDescriptionForm props={store} />);
  it.only('renders container', () => {
    expect(component.find('Header')).to.have.length.of(1);
  });
*/
  /*it('renders a Header compoent', () => {
    const wrapper = shallow(<UrlDescriptionForm/>)
    console.log(wrapper)
    console.log(wrapper.debug())
    expect(wrapper.find('Header')).to.have.length(1)
  })*/
/*  it('renders a ProgreessBar compoent', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('ProgressBar')).to.have.length(1)
  })
  it('renders a SectionTitle compoent', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('SectionTitle')).to.have.length(1)
  })
  it('renders a SectionTitle compoent should have a heading prop', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('SectionTitle').props().heading).to.equal('REPORT CONTENT WEB ADDRESS')
  })
  it('renders a SectionTitle compoent should have a subheading prop', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('SectionTitle').props().subheading).to.equal('Please include any info that you think may help us, such as:')
  })
  it('renders a compoent wth className instruction-list', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('.instruction-list')).to.have.length(1)
  })
  it('renders a list item with text "if there is more than one website"', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('.instruction-list').childAt(0).childAt(1).text()).to.equal("if there's more than one website")
  })
  it('renders 3 list items', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('li')).to.have.length(3)
  })
  it('renders a compoent with className form-container', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('.form-container')).to.have.length(1)
  })
  it('renders a compoent with className section-title', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('.section-title').text()).to.equal('WEB ADDRESS')
  })
  it('renders a compoent with className <ConfirmationModal>', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('ConfirmationModal')).to.have.length(1)
  })
  it('renders a div with className buttons', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('.buttons')).to.have.length(1)
  })
  it('renders a compoent with className <RaisedButton>', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('RaisedButton')).to.have.length(2)
  })
  it('renders a compoent with className <TextField>', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('TextField')).to.have.length(2)
  })
})

describe('<UrlDescriptionForm /> teest props of several elements', () => {
  it('ProgreessBar component should have a percentage prop', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('ProgressBar').props().form).to.equal('2')
  })
  it(' <TextField> has a hintText property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('TextField').first().props().hintText).to.equal('If there is more than one website, add these in the box below')
  })
  it(' <TextField> has a floatingLabelText property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('TextField').first().props().floatingLabelText).to.equal('url')
  })
  it(' <TextField> has a hintText property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('TextField').get(1).props.hintText).to.equal('Tell us about where you found the image')
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
    expect(wrapper.find('RaisedButton').get(1).props.label).to.equal('Submit')
  })
  it(' <RaisedButton> 1 should have an id property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('RaisedButton').get(1).props.id).to.equal('submit-url')
  })
  it(' <RaisedButton> 1  should have a primary property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('RaisedButton').get(0).props.primary).to.equal(true)
  })
  it(' <RaisedButton> 2  should have a label property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('RaisedButton').get(0).props.label).to.equal('Previous')
  })
  it(' <RaisedButton> 2  should have a primary property', () => {
    const wrapper = shallow(<UrlDescriptionForm />)
    expect(wrapper.find('RaisedButton').get(1).props.primary).to.equal(true)
  })*/
//})
