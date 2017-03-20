import React from 'react';
import {expect} from 'chai';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import forms from '../../../app/reducers/forms'

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

const storeStateMock = {
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
};

let store;
let component;
/*describe('tests for MyContainerComponent', () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    component = shallow(<Form store={store} />).shallow();
  });

  it.only('renders container', () => {
    expect(component.find('ImgCriteriaForm')).to.have.length.of(1);
  });
});*/
