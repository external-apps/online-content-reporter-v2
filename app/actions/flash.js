import * as types from '../../constants/action-types.js'
import { put, takeEvery } from 'redux-saga/effects'

export const setFlash = (errorMessage) => {
  return {
    type: types.SET_FLASH,
    errorMessage
  }
}

export const showFlash = () => {
  return {
    type: types.SHOW_FLASH
  }
}

export const hideFlash = () => {
  return {
    type: types.HIDE_FLASH
  }
}

export const startShowFlash = (errorMessage) => {
  return {
    type: types.START_SHOW_FLASH,
    errorMessage
  }
}

function delay (ms) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms))
}

function * showFlashEffect (showFlashAction) {
  yield (put(setFlash(showFlashAction.errorMessage)))
  yield (put(showFlash()))
  yield (delay(5000))
  yield (put(hideFlash()))
}

export function flashSaga () {
  return [
    takeEvery(types.START_SHOW_FLASH, showFlashEffect)
  ]
}

export default flashSaga
