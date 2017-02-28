import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, browserHistory } from 'react-router'
import AgeCheck from './containers/Age-check'
import Home from './components/Home'
import ContentForm from './components/ContentForm'
import UrlForm from './components/UrlForm'
import OverAge from './components/OverAge'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/age-check' component={AgeCheck} />
    <Route path='/form' component={ContentForm} />
    <Route path='/form2' component={UrlForm} />
    <Route path='/over-age' component={OverAge} />
  </Router>,
  document.getElementById('root')
)
