import React from 'react'

const Flex = ({children, className, onClick, ref, id}) => {
  return (
    <div className={`lg:flex ${className}`} onClick = {onClick} ref = {ref} id = {id}>{children}</div>
  )
}

export default Flex