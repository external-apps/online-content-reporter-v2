import React from 'react'
import { Link } from 'react-router'
import '../scss/style.scss'

const ContentForm = () => (
  <div className="content">
    <div className="content-title">
      <h1 className='page-title'>DESCRIBE THE ONLINE CONTENT</h1>
    </div>

    <div className="progress">
       <div className="determinate"></div>
    </div>

    <div className='content-describe form-container'>
      <p>
        The content must fit a certain criteria for us to legally remove it. Please select the boxes below that apply.
      </p>
    </div>

    <div className="form-container">
      <form action="#">
        <p>
          <input type="checkbox" className="filled-in" id="filled-in-box-1"  />
          <label htmlFor="filled-in-box-1">Someone posing in a sexual way</label>
        </p>
        <p>
          <input type="checkbox" className="filled-in" id="filled-in-box-2" />
          <label htmlFor="filled-in-box-2">Someone touching themselves in a sexual way</label>
        </p>
        <p>
          <input type="checkbox" className="filled-in" id="filled-in-box-3" />
          <label htmlFor="filled-in-box-3">Any sexual activity involving a child, adult or both</label>
        </p>
        <p>
          <input type="checkbox" className="filled-in" id="filled-in-box-4"  />
          <label htmlFor="filled-in-box-4">Someone hurting someone else</label>
        </p>
        <p>
          <input type="checkbox" className="filled-in" id="filled-in-box-5" />
          <label htmlFor="filled-in-box-5">Sexual activity that includes animals.</label>
        </p>
        <a className="confirm waves-effect waves-light btn" href='/url-form.html'>Confirm</a>
      </form>
    </div>

    <div className="other-options">
      <div className="info">
        <i className="large material-icons">info_outline</i>
      </div>

      <div className="info-message">
        <p className="other-report">
          If the picture or video doesnt include any of the activities above,
           we may not be able to remove it. Talk to a
            <span><a href="https://www.childline.org.uk/get-support/1-2-1-counsellor-chat/"> Childline counsellor</a></span>
             for more advice.
          </p>
        </div>
    </div>
    <Link to='/form2'>
      <p>FORM2</p>
    </Link>
  </div>
)

export default ContentForm
