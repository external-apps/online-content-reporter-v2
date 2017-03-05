export const addQrAction = (qrSvg) => {
  console.log('firing off addQrAction NOW', qrSvg);
  return {
    type: 'ADD_QR_CODE',
    qrSvg
  }
}
