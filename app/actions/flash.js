import * as types from '../../constants/action-types.js'

export const setFlash = (errorMessage) => {
  return {
    type: types.SET_FLASH,
    errorMessage
  }
}

export const showFlash = () => {
  return {
    type: types.SHOW_FLASH
  }
}

export const hideFlash = () => {
  return {
    type: types.HIDE_FLASH
  }
}
