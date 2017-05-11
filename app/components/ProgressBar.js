import React from 'react'

const ProgressBar = (props) => {
  return (
    <div className='progress-bar'>
      <h2>Step { props.form === '1' ? 1 : 2} of 2</h2>
    </div>
  )
}

export default ProgressBar
