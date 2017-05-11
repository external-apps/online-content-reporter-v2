import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router'

import { store, history } from './store'
// Styling & Themes
import muiTheme from './assets/theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// Components
import AgeCheck from './components/AgeCheckPage'
import Home from './containers/Home'
import Forms from './containers/Forms'
import OverAge from './components/OverAge'
import NotFound from './components/NotFound'

class App extends React.Component {
  render () {
    return (
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
      </MuiThemeProvider>
    )
  }
}

export default App
