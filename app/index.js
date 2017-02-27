import React from 'react'
import ReactDOM from 'react-dom'
import { Router, BrowserHistory } from 'react-router'
import routes from './routes'

import Home from './components/Home'

ReactDOM.render(
  // <Router history={BrowserHistory} routes={routes} />,
  <Home />,
  document.getElementById('root')
)
