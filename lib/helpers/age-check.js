const ageCheck = (dateOfBirth) => {
  let age = Math.floor((new Date() - new Date(dateOfBirth)) / (1000 * 60 * 60 * 24 * 365.25))
  return age < 25
}

module.exports = ageCheck
