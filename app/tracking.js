import ReactGA from 'react-ga'

const isDev = process.env.NODE_ENV !== 'production'
const gaTrackingCode = isDev ? '' : GA_TRACKING_ID

ReactGA.initialize(gaTrackingCode)

export const logPageView = (page = window.location.pathname) => {
  ReactGA.set({ page })
  ReactGA.pageview(page)
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
