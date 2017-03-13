const ageCheck = (dateOfBirth) => {
  let age = Math.floor((new Date() - new Date(dateOfBirth)) / (1000 * 60 * 60 * 24 * 365.25))
  console.log(dateOfBirth)
  console.log(age)
  return age < 26
}

module.exports = ageCheck
