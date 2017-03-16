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

export const changeQr = () => {
  return {
    type: types.CHANGE_QR
  }
}
