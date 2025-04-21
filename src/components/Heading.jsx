import React from 'react'

const Heading = ({text, className}) => {
  return (
    
    <h3 className={`text-28 text-second font-semibold font-inter leading-8 ${className}`}>{text}</h3>
    
  )
}

export default Heading