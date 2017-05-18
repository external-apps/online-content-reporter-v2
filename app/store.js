import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { browserHistory } from 'react-router'
import createSagaMiddleware from 'redux-saga'

import yoti from './reducers/yoti.js'
import forms from './reducers/forms.js'
import flash from './reducers/flash.js'
import formSaga from './actions/forms.js'
import flashSaga from './actions/flash.js'

const logger = createLogger({
  collapsed: true,
  predicate: (getState, action) => {
    return action.type.indexOf('LOCATION_CHANGE') === -1 &&
    action.type.indexOf('SET_TYPING_TEXT') === -1 &&
    action.type.indexOf('CHANGE_ROUTER_UPDATING_STATUS')
  }
})

const sagaMiddleware = createSagaMiddleware()

const middleware = process.env.NODE_ENV !== 'production'
  ? [ routerMiddleware(browserHistory), sagaMiddleware, logger ]
  : [ routerMiddleware(browserHistory), sagaMiddleware ]

const reducers = combineReducers({
  yoti,
  forms,
  flash,
  routing: routerReducer
})

export const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

function * rootSaga () {
  yield [formSaga(), flashSaga()]
}

sagaMiddleware.run(rootSaga)

export const history = syncHistoryWithStore(browserHistory, store)
