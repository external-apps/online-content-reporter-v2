import React from 'react'
import '../scss/style.scss'

const ProgressBar = (props) => (
  <div className='progress'>
    <div className={`determinate${props.percentage}`} />
  </div>
)

export default ProgressBar
