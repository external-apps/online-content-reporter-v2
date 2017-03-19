export const storeCurrentUrl = (url) => {
  try {
    window.sessionStorage.setItem('url', url)
  } catch (err) {
    console.log(err)
  }
}

export const getCurrentUrl = () => {
  try {
    return window.sessionStorage.getItem('url')
  } catch (err) {
    console.log(err)
  }
}

export const clearCurrentUrl = () => {
  try {
    window.sessionStorage.removeItem('url')
  } catch (err) {
    console.log(err)
  }
}
