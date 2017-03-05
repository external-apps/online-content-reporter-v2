const qr = (state = {}, action) => {
  console.log('action dispatch for', action.type)
  switch (action.type) {
    case 'ADD_QR_CODE':
    console.log("adding SVG to state")
      return {
        qrSvg: action.qrSvg
      }
    default:
      return {}
  }
}

export default qr
