import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'

const Home = () => (
  <div className='home'>
    <h1>Childline HOME</h1>
    <Link to='/age-check'>
      <p>Prove Age Here</p>
    </Link>
  </div>
)

export default Home
