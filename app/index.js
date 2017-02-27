import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, browserHistory } from 'react-router'
import AgeCheck from './containers/Age-check'
import Home from './components/Home'
import ContentForm from './components/ContentForm'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/age-check' component={AgeCheck} />
    <Route path='/form' component={ContentForm} />
  </Router>,
  document.getElementById('root')
)
