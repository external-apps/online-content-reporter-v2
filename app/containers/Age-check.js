import React from 'react'
import { Link } from 'react-router'
// import '../scss/style'


class AgeCheck extends React.Component {
  render () {
    return (
      <div>
        <h1>Age check Me</h1>
        <Link to='/form'>
          <p>Take me to form</p>
        </Link>
      </div>
    )
  }
}

export default AgeCheck
