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

export const requiredMessage = () => {
  return {
    type: types.REQUIRED_MESSAGE
  }
}
