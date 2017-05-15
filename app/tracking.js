import ReactGA from 'react-ga'

const gaTrackingCode = 'UA-XXXXXXXX'

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
