import React from 'react'

const List = ({text, className}) => {
  return (
    <li className= {`list-none text-sm text-first font-medium  font-inter ${className}`}>{text}</li>
  )
}

export default List