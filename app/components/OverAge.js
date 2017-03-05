import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'

const OverAge = () => (
  <div className="overage">
  <div className="content-title-overage">
    <h2 className='page-title'>SORRY, YOU ARE TOO OLD FOR THIS SERVICE</h2>
    <p className='old-title-p'>
      You must be 17 or younger.
    </p>
  </div>

    <div className='old-info'>
      <div className='what-now'>
        <h3>What can I do now?</h3>
        <i className="identity small material-icons">perm_identity</i>
        <p>
          Unfortunately we are not legally able to remove the online content if you are over 18. There are other options though:
        </p>
      </div>

        <div className='other-ops'>
          <div className='option'>
            <i className="identity small material-icons">contacts</i>
            <a className='contact' href='https://www.ceop.police.uk/CEOP-Reporting/'>
              Contact CEOP
            </a>
          </div>

        <div className="option">
            <i className="identity small material-icons">contacts</i>
              <a className='contact' href='http://www.themix.org.uk/'>
              Contact The Mix
           </a>
        </div>
        <div className="option">
          <i className="identity small material-icons">contacts</i>
          <a className='contact' href='http://www.samaritans.org/'>
            Contact Samaritans
          </a>
        </div>
    </div>
    <Link to='/'>
      <p>Go Home</p>
    </Link>
  </div>
  </div>
)

export default OverAge
