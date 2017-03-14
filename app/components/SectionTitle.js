import React from 'react'
import '../scss/style.scss'

const SectionTitle = (props) => {
  let list
  if (props.list) {
    list = props.list.map( (item,i) => <li key={i} style={{backgroundColor: 'white', margin: '0.25rem 0'}} >{item}</li>)
  }
  return (
  <div className='section-title-container'>
    <h1 className='section-title-heading'>{props.heading}</h1>
    <div className='section-title-subheading'>
      {props.subheading}
      <span className='bold'> {props.span}</span>
      <ul>
        {props.list &&  list}
      </ul>
    </div>
  </div>
)
}

export default SectionTitle
