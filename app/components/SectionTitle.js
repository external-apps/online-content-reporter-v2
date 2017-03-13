import React from 'react'
import '../scss/style.scss'

const SectionTitle = (props) => (
  <div className='section-title-container'>
    <h1 className='section-title-heading'>{props.heading}</h1>
    <p className='section-title-subheading'>
      {props.subheading}
      <span className='bold'> {props.span}</span>
    </p>
  </div>
)

export default SectionTitle
