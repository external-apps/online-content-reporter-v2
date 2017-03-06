import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, browserHistory } from 'react-router'
import AgeCheck from './containers/Age-check'
import Home from './components/Home'
import ContentForm from './components/ContentForm'
import UrlForm from './components/UrlForm'
import OverAge from './components/OverAge'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import qr from './reducers/qr'

const reducers = combineReducers({
  qr: qr
})

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='/age-check' component={AgeCheck} />
      <Route path='/form' component={ContentForm} />
      <Route path='/form2' component={UrlForm} />
      <Route path='/over-age' component={OverAge} />

    </Router>
  </Provider>,
  document.getElementById('root')
)

      // <Route path='*' component={() => <div>404</div>} />
