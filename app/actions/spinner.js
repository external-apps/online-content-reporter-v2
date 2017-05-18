import * as types from '../../constants/action-types.js'

export const showSpinner = () => {
  return {
    type: types.SHOW_SPINNER
  }
}

export const hideSpinner = () => {
  return {
    type: types.HIDE_SPINNER
  }
}
