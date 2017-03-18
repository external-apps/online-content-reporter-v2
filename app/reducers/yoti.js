import {
  ADD_QR_CODE,
  CLOSE_QR,
  OPEN_QR,
  SET_UP_FOR_MOBILE
} from '../../constants/action-types'

const initialState = {
  isMobile: false,
  target: '_blank',
  haveQr: false,
  showQr: false,
  buttonLabelStyle: { fontSize: '1.1rem', textTransform: 'none', fontFamily: 'childline' },
  buttonStyle: { padding: '0.8rem 0', whiteSpace: 'nowrap', minWidth: '8rem' }
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
        ...state,
        isMobile: !state.isMobile,
        href: action.href,
        target: action.target,
        buttonStyle: action.buttonStyle,
        buttonLabelStyle: action.buttonLabelStyle
      }
    case CLOSE_QR:
      return {
        ...state,
        showQr: false
      }
    case OPEN_QR:
      return {
        ...state,
        showQr: true
      }
    default:
      return state
  }
}

export default yoti
