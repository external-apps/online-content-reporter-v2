import {
  ADD_QR_CODE,
  SET_UP_FOR_MOBILE
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
    case SET_UP_FOR_MOBILE:
      return {
        ...state,
        isMobile: !state.isMobile,
        href: action.href,
        target: action.target
      }
    default:
      return state
  }
}

export default qr
