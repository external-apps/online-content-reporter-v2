import React from 'react'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router'
import jwtDecode from 'jwt-decode'
import { push } from 'react-router-redux'
// Styling & Themes
import muiTheme from './assets/theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// Components
import AgeCheck from './containers/AgeCheck.js'
import Home from './containers/Home.js'
import Forms from './containers/Forms.js'
import OverAge from './components/OverAge.js'
import NotFound from './components/NotFound.js'
import FlashError from './containers/FlashError.js'
// Actions, effects and variables
import { store, history } from './store.js'
import { logPageView } from './tracking.js'
import { addJWT } from './actions/yoti.js'
import { startShowFlash } from './actions/flash.js'
import { AGE_ERROR } from '../constants/error.js'

class App extends React.Component {
  constructor (props) {
    super(props)

    const { pathname, query } = history.getCurrentLocation()
    const { error } = query

    if (error) {
      store.dispatch(startShowFlash(error))
    }

    if (pathname !== '/accept-age-token') {
      history.replace('/')
      return
    }

    if (error === AGE_ERROR) {
      store.dispatch(push('/age-check'))
      return
    }

    const ageVerifactionToken = query.session
    const { isUnder18 } = jwtDecode(ageVerifactionToken)
    store.dispatch(addJWT(ageVerifactionToken))

    if (isUnder18) {
      store.dispatch(push('/form'))
    } else {
      store.dispatch(push('/over-age'))
    }
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <div>
            <FlashError />
            <Router
              onUpdate={() => {
                logPageView()
              }}
              history={history}
              >
              <Route path='/' component={Home} />
              <Route path='/age-check' component={AgeCheck} />
              <Route path='/form' component={Forms} />
              <Route path='/over-age' component={OverAge} />
              <Route path='*' component={NotFound} />
            </Router>
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App
