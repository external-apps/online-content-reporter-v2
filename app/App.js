import React from 'react'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router'
import jwtDecode from 'jwt-decode'
import { push } from 'react-router-redux'
import cookie from 'react-cookie'
import { store, history } from './store'
import { qrFetchRequested, getAgeVerificationToken, addJWT } from './actions/yoti'
// Styling & Themes
import muiTheme from './assets/theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// Components
import AgeCheck from './containers/AgeCheck'
import Home from './containers/Home'
import Forms from './containers/Forms'
import OverAge from './components/OverAge'
import NotFound from './components/NotFound'

class App extends React.Component {
  constructor (props) {
    super(props)

    const { pathname } = history.getCurrentLocation()

    if (pathname !== '/accept-yoti-token') {
      history.replace('/')
    } else {
      const ageVerifactionToken = cookie.load('yotiVerifiedAge')
      const { isUnder18 } = jwtDecode(ageVerifactionToken)
      store.dispatch(addJWT(ageVerifactionToken))
      cookie.remove('yotiVerifiedAge')
      if (isUnder18) {
        store.dispatch(push('/form'))
      } else {
        store.dispatch(push('/over-age'))
      }
    }
  }

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
