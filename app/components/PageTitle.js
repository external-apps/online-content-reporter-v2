import React from 'react'
import '../scss/style.scss'

const PageTitle = (props) => (
  <div className={`title-container-${props.backgroundColor}`}>
    <h1 className='page-title-heading'>{props.heading}</h1>
    <p className='page-title-subheading'>
      {props.subheading}
    </p>
  </div>
)

export default PageTitle
