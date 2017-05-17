import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'

import yoti from './reducers/yoti.js'
import forms from './reducers/forms.js'
import flash from './reducers/flash.js'

const logger = createLogger({
  collapsed: true,
  predicate: (getState, action) => {
    return action.type.indexOf('LOCATION_CHANGE') === -1 &&
    action.type.indexOf('SET_TYPING_TEXT') === -1 &&
    action.type.indexOf('CHANGE_ROUTER_UPDATING_STATUS')
  }
})

const middleware = process.env.NODE_ENV !== 'production'
  ? [ routerMiddleware(browserHistory), logger ]
  : [ routerMiddleware(browserHistory) ]

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

export const history = syncHistoryWithStore(browserHistory, store)
