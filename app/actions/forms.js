import * as types from '../../constants/action-types.js'

export const changeModal = () => {
  return {
    type: types.CHANGE_MODAL
  }
}
export const changeForm = () => {
  return {
    type: types.CHANGE_FORM
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
    type: types.SHOW_CRITERIA_REQUIRED_MESSAGE
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
