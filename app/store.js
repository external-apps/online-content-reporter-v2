import createSagaMiddleware from 'redux-saga'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'

import yoti from './reducers/yoti'
import forms from './reducers/forms'
import yotiSaga from './actions/yoti'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
  collapsed: true,
  predicate: (getState, action) => {
    return action.type.indexOf('LOCATION_CHANGE') === -1 &&
    action.type.indexOf('SET_TYPING_TEXT') === -1 &&
    action.type.indexOf('CHANGE_ROUTER_UPDATING_STATUS')
  }
})

const isDev = window.location.href.includes('localhost')
const middleware = [ sagaMiddleware, routerMiddleware(browserHistory) ]
const finalMiddleware = isDev
  ? middleware.concat(logger)
  : middleware

const reducers = combineReducers({
  yoti,
  forms,
  routing: routerReducer
})

export const store = createStore(
  reducers,
  applyMiddleware(...finalMiddleware)
)

sagaMiddleware.run(yotiSaga)

export const history = syncHistoryWithStore(browserHistory, store)
