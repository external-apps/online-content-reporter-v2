import {
  OPEN_MODAL,
  CLOSE_MODAL,
  NEXT_FORM,
  ADD_CRITERIA
} from '../../constants/action-types'

const initialState = {
  modalIsOpen: false,
  firstForm: true,
  imageCriteria: []
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
    case ADD_CRITERIA:
      return {
        ...state,
        imageCriteria: state.imageCriteria.concat(action.criteria)
      }
    default:
      return state
  }
}

export default forms
