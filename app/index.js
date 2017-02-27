import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, browserHistory } from 'react-router'
import AgeCheck from './containers/Age-check'
import Home from './components/Home'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/age-check' component={AgeCheck} />
  </Router>,
  document.getElementById('root')
)
