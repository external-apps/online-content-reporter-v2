import React from 'react'

const SectionTitle = (props) => {
  return (
    <div className='section-title-container'>
      <h1 className='section-title-heading'>{props.heading}</h1>
      <div className='section-title-subheading'>
        {props.subheading}
        <span className='bold'> {props.span}</span>
      </div>
    </div>
  )
}

export default SectionTitle
