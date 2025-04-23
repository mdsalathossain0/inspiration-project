import React from 'react'

const ArticleButton = ({text,className}) => {
  return (
    <button className={`text-sm bg-first font-normal font-inter leading-6 py-3 px-8 rounded-[29px] ${className}`}>{text}</button>
  )
}

export default ArticleButton