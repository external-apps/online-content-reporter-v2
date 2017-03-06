import {
  ADD_QR_CODE,
  TARGET_SELF,
  SET_HREF,
  TOGGLE_MOBILE
} from '../../constants/action-types'

const initialState = {
  isMobile: false,
  href: `#`,
  target: undefined
}

const qr = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QR_CODE:
      return {
        ...state,
        qrSvg: action.qrSvg
      }
    case TARGET_SELF:
      return {
        ...state,
        target: action.target
      }
    case SET_HREF:
      return {
        ...state,
        href: action.href
      }
    case TOGGLE_MOBILE:
      return {
        ...state,
        isMobile: !state.isMobile
      }
    default:
      return state
  }
}

export default qr
