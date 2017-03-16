import {
  CHANGE_MODAL,
  CHANGE_FORM,
  TOGGLE_CRITERIA,
  SAVE_URL,
  SAVE_DESCRIPTION,
  SAVE_EMAIL,
  SHOW_URL_REQUIRED_MESSAGE,
  VALID_EMAIL_REQUIRED_MESSAGE,
  HIDE_VALID_EMAIL_REQUIRED_MESSAGE,
  SHOW_CRITERIA_REQUIRED_MESSAGE
} from '../../constants/action-types'

const initialState = {
  modalIsOpen: false,
  firstForm: true,
  imageCriteria: [],
  url: '',
  description: '',
  criteriaRequiredMessage: false,
  urlRequiredMessage: false,
  validEmail: true
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
        firstForm: !state.firstForm,
        urlRequiredMessage: false,
        criteriaRequiredMessage: false
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
    case SAVE_DESCRIPTION:
      return {
        ...state,
        description: action.description,
        criteriaRequiredMessage: false
      }
    case SAVE_URL:
      return {
        ...state,
        url: action.url,
        urlRequiredMessage: false
      }
    case SAVE_EMAIL:
      return {
        ...state,
        email: action.email
      }
    case SHOW_CRITERIA_REQUIRED_MESSAGE:
      return {
        ...state,
        criteriaRequiredMessage: !state.criteriaRequiredMessage
      }
    case SHOW_URL_REQUIRED_MESSAGE:
      return {
        ...state,
        urlRequiredMessage: !state.urlRequiredMessage
      }
    case VALID_EMAIL_REQUIRED_MESSAGE:
      return {
        ...state,
        validEmail: false
      }
    case HIDE_VALID_EMAIL_REQUIRED_MESSAGE:
        return {
          ...state,
          validEmail: true
      }
    default:
      return state
  }
}

export default forms
