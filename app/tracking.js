import ReactGA from 'react-ga'

const isDev = process.env.NODE_ENV !== 'production'
const gaTrackingCode = isDev ? '' : 'UA-99231754-2'

ReactGA.initialize(gaTrackingCode)

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const trackClick = (category, action) => {
  ReactGA.event({
    category,
    action
  })
}

export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label
  })
}
