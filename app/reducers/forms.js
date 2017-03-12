import {
  OPEN_MODAL,
  CLOSE_MODAL,
  NEXT_FORM,
  TOGGLE_CRITERIA,
  SAVE_URL,
  SAVE_DESCRIPTION
} from '../../constants/action-types'

const initialState = {
  modalIsOpen: false,
  firstForm: true,
  imageCriteria: [],
  url: '',
  description: ''
}

const forms = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false
      }
    case NEXT_FORM:
      return {
        ...state,
        firstForm: false
      }
    case TOGGLE_CRITERIA:
      return {
        ...state,
        imageCriteria: state.imageCriteria.indexOf(action.criteria) !== -1
          ? (()=>{state.imageCriteria.splice(state.imageCriteria.indexOf(action.criteria), 1);
                return state.imageCriteria})()
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
    default:
      return state
  }
}

export default forms
