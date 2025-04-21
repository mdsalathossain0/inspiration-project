import React from 'react'

const SubHeading = ({text ,extratext, className}) => {
  return (
    <p className={`text-sm font-normal font-inter leading-6 ${className}`}>{text}
     {' '} [<span className='text-third cursor-pointer '>{extratext}</span>]
    </p>
  )
}

export default SubHeading