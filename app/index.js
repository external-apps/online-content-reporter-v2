import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AgeCheck from './components/AgeCheckPage'
import Home from './components/Home'
import Forms from './containers/Forms'
import OverAge from './components/OverAge'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import yoti from './reducers/yoti'
import forms from './reducers/forms'
import muiTheme from './assets/theme'

const reducers = combineReducers({
  yoti,
  forms
})

const store = createStore(reducers)

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/age-check' component={AgeCheck} />
        <Route path='/form' component={Forms} />
        <Route path='/over-age' component={OverAge} />
        <Route path='*' component={Home} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
