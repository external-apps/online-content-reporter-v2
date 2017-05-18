import * as types from '../../constants/action-types.js'
import { call, put, takeEvery, select } from 'redux-saga/effects'
import axios from 'axios'
import { startShowFlash } from './flash.js'

export const openModal = () => {
  return {
    type: types.OPEN_MODAL
  }
}
export const closeModal = () => {
  return {
    type: types.CLOSE_MODAL
  }
}
export const changeForm = () => {
  return {
    type: types.CHANGE_FORM
  }
}

export const checkOption1 = () => {
  return {
    type: types.CHANGE_OPTION1
  }
}

export const checkOption2 = () => {
  return {
    type: types.CHANGE_OPTION2
  }
}
export const checkOption3 = () => {
  return {
    type: types.CHANGE_OPTION3
  }
}
export const checkOption4 = () => {
  return {
    type: types.CHANGE_OPTION4
  }
}
export const checkOption5 = () => {
  return {
    type: types.CHANGE_OPTION5
  }
}
export const toggleCriteria = (criteria) => {
  return {
    type: types.TOGGLE_CRITERIA,
    criteria
  }
}

export const saveUrl = (url) => {
  return {
    type: types.SAVE_URL,
    url
  }
}

export const saveDescription = (description) => {
  return {
    type: types.SAVE_DESCRIPTION,
    description
  }
}

export const saveEmail = (email) => {
  return {
    type: types.SAVE_EMAIL,
    email
  }
}

export const showUrlRequiredMessage = () => {
  return {
    type: types.SHOW_URL_REQUIRED_MESSAGE
  }
}

export const showCriteriaRequiredMessage = () => {
  return {
    type: types.SHOW_CRITERIA_REQUIRED_MESSAGE,
    criteriaRequiredMessage: true
  }
}

export const validEmailRequiredMessage = () => {
  return {
    type: types.VALID_EMAIL_REQUIRED_MESSAGE
  }
}

export const hideValidEmailRequiredMessage = () => {
  return {
    type: types.HIDE_VALID_EMAIL_REQUIRED_MESSAGE
  }
}

export const startSubmitForm = () => {
  return {
    type: types.START_SUBMIT_FORM
  }
}

function * submitFormEffect () {
  const currentState = yield (select())
  // here we need a spinner
  const { imageCriteria, url, description, email } = currentState.forms
  const payload = { imageCriteria, url, description, email }
  const config = {
    headers: {
      'Authorization': `Bearer ${currentState.yoti.ageVerifactionToken}`
    },
    validateStatus: (status) =>
      status >= 200 && status < 600
  }
  const response = yield (call(submitForm, payload, config))
  if (response.status === 200) {
    yield (put(openModal()))
  } else {
    const errorMessage = response.data.error
    yield (put(startShowFlash(errorMessage)))
  }
}

const submitForm = (payload, config) => {
  return axios.post('/email', payload, config)
  .then(res => {
    return res
  })
  .catch((error) => {
    return error
  })
}

export function formSaga () {
  return [
    takeEvery(types.START_SUBMIT_FORM, submitFormEffect)
  ]
}

export default formSaga
