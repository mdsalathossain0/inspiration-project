import React from 'react'

const SubHeading = ({text , className}) => {
  return (
    <p className={`text-sm font-normal font-inter leading-6 ${className}`}>{text}</p>
  )
}

export default SubHeading