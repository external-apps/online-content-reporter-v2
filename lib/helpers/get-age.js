const { MAXIMUM_REPORTER_AGE } = require('../../constants/age.js')

const ageCheck = (dateOfBirth) => {
  let age = Math.floor(getAge(dateOfBirth))
  return age < MAXIMUM_REPORTER_AGE
}

const getAge = dateOfBirth =>
  (Date.now() - new Date(dateOfBirth)) / (1000 * 60 * 60 * 24 * 365.25)

module.exports = {
  ageCheck
}
