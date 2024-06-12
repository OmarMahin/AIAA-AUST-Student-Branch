import React from 'react'

const ListItem = ({children, className, onClick}) => {
  return (
    <li className={`flex ${className}`}  onClick = {onClick}>
        {children}
    </li>
  )
}

export default ListItem