import { push } from 'react-router-redux'
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

import { MAXIMUM_REPORTER_AGE } from '../../constants/age.js'
import * as types from '../../constants/action-types.js'

export const qrFetchRequested = () => {
  return {
    type: types.QR_FETCH_REQUESTED
  }
}

export const addQr = (qrSvg) => {
  return {
    type: types.ADD_QR_CODE,
    qrSvg,
    haveQr: true
  }
}

export const addJWT = ageVerifactionToken => {
  return {
    type: types.ADD_JWT,
    ageVerifactionToken
  }
}

export const setUpForMobile = (href) => {
  return {
    type: types.SET_UP_FOR_MOBILE,
    href,
    target: '_self',
    isMobile: true,
    buttonLabelStyle: { fontSize: '0.8rem', textTransform: 'none', fontFamily: 'childline' },
    buttonStyle: { whiteSpace: 'nowrap', minWidth: '5rem' }
  }
}

export const ageIsVerified = () => {
  return {
    type: types.AGE_IS_VERIFIED
  }
}

export const closeQr = () => {
  return {
    type: types.CLOSE_QR
  }
}

export const openQr = () => {
  return {
    type: types.OPEN_QR
  }
}

function getQr () {
  return axios.get('/get-qr').then(res => {
    return res.data
  })
}

function listenForToken (proto, url) {
  return new Promise((resolve) => {
    var host = 'wss://api.yoti.com/api/v1/connect-sessions/' + proto
    var socket = new WebSocket(host)
    socket.onopen = () => {
      socket.send(JSON.stringify({subscription: proto}))
    }
    socket.onmessage = (msg) => {
      var data = JSON.parse(msg.data)
      if (data.status === 'COMPLETED') {
        return resolve(data.token)
      }
    }
  })
}

function getAgeVerificationToken (token) {
  return axios.get(`/thankyou?token=${token}`)
    .then(res => res.data.ageToken)
    .catch((error) => { console.log(error) })
}

function * fetchQrEffect (fetchQrAction) {
  try {
    const res = yield call(getQr)
    yield put(addQr(res.svg))
    const token = yield call(listenForToken, res.proto, res.url)
    const ageVerifactionToken = yield call(getAgeVerificationToken, token)
    yield put(addJWT(ageVerifactionToken))
    const isUnder18 = jwtDecode(ageVerifactionToken).age <= MAXIMUM_REPORTER_AGE
    if (isUnder18) {
      yield put(push('/form'))
    } else {
      yield put(push('/over-age'))
    }
  } catch (e) {
    yield put({type: 'QR_FETCH_FAILED', message: e.message})
  }
}

function * yotiSaga () {
  yield takeEvery(types.QR_FETCH_REQUESTED, fetchQrEffect)
}

export default yotiSaga
