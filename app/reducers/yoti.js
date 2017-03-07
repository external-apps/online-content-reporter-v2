import {
  ADD_QR_CODE,
  SET_UP_FOR_MOBILE
} from '../../constants/action-types'

const initialState = {
  isMobile: false,
  target: '_blank',
  haveQr: false
}

const yoti = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QR_CODE:
      return {
        ...state,
        qrSvg: action.qrSvg,
        haveQr: action.haveQr
      }
    case SET_UP_FOR_MOBILE:
      return {
        isMobile: !state.isMobile,
        href: action.href,
        target: action.target
      }
    default:
      return state
  }
}

export default yoti
