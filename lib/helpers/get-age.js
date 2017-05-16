// const ageCheck = (dateOfBirth) => {
//   let age = Math.floor(getAge(dateOfBirth))
//   return age < 40
// }

const getAge = dateOfBirth =>
  (Date.now() - new Date(dateOfBirth)) / (1000 * 60 * 60 * 24 * 365.25)

module.exports = {
  // ageCheck,
  getAge
}
