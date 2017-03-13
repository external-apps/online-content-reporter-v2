import React from 'react'
import '../scss/style.scss'

const ProgressBar = (props) => {
  console.log(props)
  return (
  <div >
    <h2>Step {props.form==='1' ? 1 :2} of 2 </h2>
  </div>
)}

export default ProgressBar
