import createSagaMiddleware from 'redux-saga'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'

import yoti from './reducers/yoti'
import forms from './reducers/forms'
import yotiSaga from './actions/yoti'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middleware = [ sagaMiddleware, routerMiddleware(browserHistory) ]

const reducers = combineReducers({
  yoti,
  forms,
  routing: routerReducer
})

export const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

sagaMiddleware.run(yotiSaga)

export const history = syncHistoryWithStore(browserHistory, store)
