import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'
import PageTitle from '../components/PageTitle'

const OverAge = () => (
  <div>
    <PageTitle heading='ARE YOU UNDER 18?' subheading='You must be 17 or younger.' backgroundColor='blue' />
    <div className='what-now'>
      <h3>What can I do now?</h3>
      <i className='identity small material-icons'>perm_identity</i>
      <p>
        Unfortunately we are not legally able to remove the online content if you are over 18. There are other options though:
      </p>
    </div>

    <div className='other-ops'>
      <div className='option'>
        <i className='identity small material-icons'>contacts</i>
        <a className='contact' href='https://www.ceop.police.uk/CEOP-Reporting/'>
          Contact CEOP
        </a>
      </div>

      <div className='option'>
        <i className='identity small material-icons'>contacts</i>
        <a className='contact' href='http://www.themix.org.uk/'>
          Contact The Mix
       </a>
      </div>
      <div className='option'>
        <i className='identity small material-icons'>contacts</i>
        <a className='contact' href='http://www.samaritans.org/'>
          Contact Samaritans
        </a>
      </div>
    </div>
    <Link to='/'>
      <p>Go Home</p>
    </Link>
  </div>
)

export default OverAge
