import {
  SET_FLASH,
  SHOW_FLASH,
  HIDE_FLASH
} from '../../constants/action-types'

const initialState = {
  errorMessage: '',
  showFlash: false
}

const flash = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLASH:
      return {
        ...state,
        errorMessage: action.errorMessage
      }
    case SHOW_FLASH:
      return {
        ...state,
        showFlash: true
      }
    case HIDE_FLASH:
      return {
        ...state,
        showFlash: false
      }
    default:
      return state
  }
}

export default flash
