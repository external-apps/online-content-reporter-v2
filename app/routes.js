import App from './App.js'

const errorLoading = (e) => {
  if (e) {
    throw new Error(`Dynamic page loading failed: ${e}`)
  }
}

const loadRoute = (cb) => (module) => cb(null, module.default)

export default {
  path: '/',
  component: App,
  indexRoute: {
    getComponent: (location, cb) => {
      System.import('./components/Home.js')
        .then(loadRoute(cb))
        .catch(errorLoading)
    }
  },
  childRoutes: [
    {
      path: 'age-check',
      getComponent: (location, cb) => {
        System.import('./containers/Age-check')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    }
  ]
}
