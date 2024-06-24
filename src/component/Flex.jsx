import React from 'react'

const Flex = ({children, className, onClick, ref}) => {
  return (
    <div className={`lg:flex ${className}`} onClick = {onClick} ref = {ref}>{children}</div>
  )
}

export default Flex