import {
  ADD_QR_CODE,
  CLOSE_QR,
  OPEN_QR,
  AGE_IS_VERIFIED,
  SET_UP_FOR_MOBILE,
  ADD_JWT
} from '../../constants/action-types'

const desktopInitialState = {
  isMobile: false,
  target: '_blank',
  haveQr: false,
  showQr: false,
  isAgeVerified: false,
  isUnder18: false,
  isOver18: false,
  href: null,
  buttonLabelStyle: { fontSize: '1.1rem', textTransform: 'none', fontFamily: 'childline' },
  buttonStyle: { padding: '0.8rem 0', whiteSpace: 'nowrap', minWidth: '8rem' }
}

const mobileInitialState = {
  isMobile: true,
  target: '_self',
  haveQr: false,
  showQr: false,
  isAgeVerified: false,
  isUnder18: false,
  isOver18: false,
  href: `https://www.yoti.com/connect/${YOTI_APP_ID}`,
  buttonLabelStyle: { fontSize: '0.8rem', textTransform: 'none', fontFamily: 'childline' },
  buttonStyle: { whiteSpace: 'nowrap', minWidth: '5rem' }
}

var isMobileRE = /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Android/i
var isMobile = isMobileRE.test(navigator.userAgent) &&
  /Mobile/i.test(navigator.userAgent)

const yoti = (state = isMobile ? mobileInitialState : desktopInitialState, action) => {
  switch (action.type) {
    case ADD_QR_CODE:
      return {
        ...state,
        qrSvg: action.qrSvg,
        haveQr: action.haveQr
      }
    case ADD_JWT:
      return {
        ...state,
        ageVerifactionToken: action.ageVerifactionToken
      }
    case AGE_IS_VERIFIED:
      return {
        ...state,
        isAgeVerified: true
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
