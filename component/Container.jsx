import React from 'react'


const Container = ({children, className}) => {
  return (
    <div className={`max-w-container mx-auto md:px-3 px-5 ${className}`}>{children}</div>
  )
}

export default Container