import React from 'react'

const FooterList = ({className, text}) => {
  return (
    <li className={`text-sm md:text-base text-first font-medium font-inter list-none ${className}`}>{text}</li>
  )
}

export default FooterList