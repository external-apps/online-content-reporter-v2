import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import yotiSaga from './actions/yoti'
import yoti from './reducers/yoti'
import forms from './reducers/forms'
// Styling & Themes
import muiTheme from './assets/theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './scss/style.scss'
// Components
import AgeCheck from './containers/AgeCheck'
import Home from './containers/Home'
import Forms from './containers/Forms'
import OverAge from './components/OverAge'
import NotFound from './components/NotFound'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middleware = [ sagaMiddleware, routerMiddleware(browserHistory) ]

const reducers = combineReducers({
  yoti,
  forms,
  routing: routerReducer
})

// mount saga on the Store
const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

// then run the saga
sagaMiddleware.run(yotiSaga)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={Home} />
        <Route path='/age-check' component={AgeCheck} />
        <Route path='/form' component={Forms} />
        <Route path='/over-age' component={OverAge} />
        <Route path='*' component={NotFound} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
