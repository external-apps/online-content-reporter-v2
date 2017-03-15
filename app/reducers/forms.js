import {
  CHANGE_MODAL,
  CHANGE_FORM,
  TOGGLE_CRITERIA,
  SAVE_URL,
  SAVE_DESCRIPTION,
  REQUIRED_MESSAGE
} from '../../constants/action-types'

const initialState = {
  modalIsOpen: false,
  firstForm: true,
  imageCriteria: [],
  url: '',
  description: '',
  required: false
}

const forms = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      }
    case CHANGE_FORM:
      return {
        ...state,
        firstForm: !state.firstForm
      }
    case TOGGLE_CRITERIA:
      return {
        ...state,
        imageCriteria: state.imageCriteria.indexOf(action.criteria) !== -1
          ? (() => {
            state.imageCriteria.splice(state.imageCriteria.indexOf(action.criteria), 1)
            return state.imageCriteria
          })()
            : state.imageCriteria.concat(action.criteria)
      }
    case SAVE_URL:
      return {
        ...state,
        url: action.url
      }
    case SAVE_DESCRIPTION:
      return {
        ...state,
        description: action.description
      }
    case REQUIRED_MESSAGE:
      return {
        ...state,
        required: !state.required
      }
    default:
      return state
  }
}

export default forms
