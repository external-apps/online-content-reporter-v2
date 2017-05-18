function dateToday () {
  let date = new Date()
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let year = date.getFullYear()
  let month = months[date.getMonth()]
  let day = date.getDate()
  let hour = date.getHours()
  if (hour < 10) {
    hour = ('0').concat(hour)
  }
  let minute = date.getMinutes()
  if (minute < 10) {
    minute = ('0').concat(minute)
  }
  return [`${day} ${month} ${year}`, `${hour}:${minute}`]
}

module.exports = {
  dateToday
}
