const qr = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_QR_CODE':
      return {
        qrSvg: action.qrSvg
      }
    default:
      return {}
  }
}

export default qr
