import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, browserHistory } from 'react-router'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AgeCheck from './components/AgeCheckPage'
import Home from './containers/Home'
import Forms from './containers/Forms'
import OverAge from './components/OverAge'
import NotFound from './components/NotFound'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import yoti from './reducers/yoti'
import forms from './reducers/forms'
import muiTheme from './assets/theme'

const reducers = combineReducers({
  yoti,
  forms,
  routing: routerReducer
})

const store = createStore(reducers)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={Home} />
        <Route path='/age-check' component={AgeCheck} />
        <Route path='/form' component={Forms} />
        <Route path='/over-age' component={OverAge} />
        <Route path='/*' component={NotFound} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
