import React from 'react'

const Loading = () => {
  return (
    <div className='flex__Loading'>
        <span className="loader text-3xl font-bold  ">Loading Weather Data... </span>
        { <span className="loader__icon"></span> }
        </div>
    
    
  )
}

export default Loading