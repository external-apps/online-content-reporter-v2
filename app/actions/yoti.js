import * as types from '../../constants/action-types.js'

export const addQr = (qrSvg) => {
  return {
    type: types.ADD_QR_CODE,
    qrSvg,
    haveQr: true
  }
}

export const setUpForMobile = (href) => {
  return {
    type: types.SET_UP_FOR_MOBILE,
    href,
    target: '_self',
    isMobile: false,
    buttonLabelStyle: { fontSize: '0.8rem', textTransform: 'none', fontFamily: 'childline' },
    buttonStyle: { whiteSpace: 'nowrap', minWidth: '5rem' }
  }
}

export const showQr = () => {
  return {
    type: types.SHOW_QR,
    showQr: true
  }
}

export const hideQr = () => {
  return {
    type: types.HIDE_QR,
  }
}
