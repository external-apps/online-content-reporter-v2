import * as types from '../../constants/action-types.js'

export const addQr = (qrSvg) => {
  return {
    type: types.ADD_QR_CODE,
    qrSvg
  }
}

export const targetSelf = () => {
  return {
    type: types.TARGET_SELF,
    target: '_self'
  }
}

export const setHref = (href) => {
  return {
    type: types.SET_HREF,
    href
  }
}

export const toggleMobile = () => {
  return {
    type: types.TOGGLE_MOBILE
  }
}
