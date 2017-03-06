import * as types from '../../constants/action-types.js'

export const addQr = (qrSvg) => {
  return {
    type: types.ADD_QR_CODE,
    qrSvg
  }
}

export const setUpForMobile = (href) => {
  return {
    type: types.SET_UP_FOR_MOBILE,
    href,
    target: '_self'
  }
}
