import React from 'react'
import '../scss/style.scss'

const ProgressBar = (props) => (
  <div className='progress-bar'>
    <div className={`determinate${props.percentage}`} />
  </div>
)

export default ProgressBar
