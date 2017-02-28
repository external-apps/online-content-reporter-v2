import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'

const OverAge = () => (
  <div>
  <div className="title title-old-main">
    <h2 className='old-title'>SORRY, YOU ARE TOO OLD FOR THIS SERVICE</h2>
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
          <div className='option1'>
            <i className="identity small material-icons">contacts</i>
            <a className='contact' href='https://www.ceop.police.uk/CEOP-Reporting/'>
              Contact CEOP
            </a>
            <div className="spacer" style="clear: both;"></div>
          </div>

        <div className="option2">
            <i className="identity small material-icons">contacts</i>
              <a className='contact' href='http://www.themix.org.uk/'>
              Contact The Mix
           </a>
          <div className="spacer" style="clear: both;"></div>
        </div>
        <div className="option3">
          <i className="identity small material-icons">contacts</i>
          <a className='contact' href='http://www.samaritans.org/'>
            Contact Samaritans
          </a>
          <div className="spacer" style="clear: both;"></div>
        </div>
    </div>
    <Link to='/overage'>
      <p>Prove Age Here</p>
    </Link>
  </div>
  </div>
)

export default OverAge
