import React from 'react'
import '../scss/style.scss'

const PageTitle = (props) => (
  <div className={`title-container ${props.backgroundColor}`}>
    <h1 className='title-heading'>{props.heading}</h1>
    <p className='title-subheading'>
      {props.subheading}
    </p>
  </div>
)

export default PageTitle
