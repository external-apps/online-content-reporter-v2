import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, browserHistory } from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AgeCheck from './components/AgeCheckPage'
import Home from './components/Home'
import UrlForm from './containers/UrlForm'
import OverAge from './components/OverAge'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import qr from './reducers/qr'

const reducers = combineReducers({
  qr
})

const store = createStore(reducers)

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme({userAgent: navigator.userAgent})}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/age-check' component={AgeCheck} />
        <Route path='/form' component={UrlForm} />
        <Route path='/over-age' component={OverAge} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)

      // <Route path='*' component={() => <div>404</div>} />
