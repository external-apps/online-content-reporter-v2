import React from 'react'
import '../scss/style.scss'

const PageTitle = (props) => (
  <div className={`title-container ${props.backgroundColor}`}>
    <h1 className='title-text'>{props.text}</h1>
  </div>
)

export default PageTitle
