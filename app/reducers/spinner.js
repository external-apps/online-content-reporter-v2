import {
  SHOW_SPINNER,
  HIDE_SPINNER
} from '../../constants/action-types'

const initialState = {
  showSpinner: false
}

const spinner = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        showSpinner: true
      }
    case HIDE_SPINNER:
      return {
        ...state,
        showSpinner: false
      }
    default:
      return state
  }
}

export default spinner
