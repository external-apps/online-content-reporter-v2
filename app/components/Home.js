import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'

const Home = () => (
  <div className='home'>
    <p>HAHO</p>
    <h1 className='title'>Childline HOME</h1>
    <img src='imgs/childline-logo.jpg' alt='alternative' />
    <Link to='/age-check'>
      <p>Prove Age Here</p>
    </Link>
  </div>
)

export default Home
