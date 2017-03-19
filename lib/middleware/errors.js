
module.exports.catch404Error = (req, res, next) => {
  const err = new Error('Not Found')
  console.log('I am called!!')
  err.status = 404
  next(err)
}

module.exports.handleError = (err, req, res, next) => {
  res.status(err.status || 500)
    console.log('me too')
  res.send( {
    status: err.status,
    message: err.message,
  })
}
