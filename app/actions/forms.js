import * as types from '../../constants/action-types.js'

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

export const nextForm = () => {
  return {
    type: types.NEXT_FORM
  }
}

export const addCriteria = () => {
  return {
    type: types.ADD_CRITERIA
  }
}
