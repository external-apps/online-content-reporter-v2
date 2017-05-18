const ageCheck = (dateOfBirth) => {
  let age = Math.floor(getAge(dateOfBirth))
  return age < parseInt(process.env.MAXIMUM_REPORTER_AGE) || 18
}

const getAge = dateOfBirth =>
  (Date.now() - new Date(dateOfBirth)) / (1000 * 60 * 60 * 24 * 365.25)

module.exports = {
  ageCheck
}
