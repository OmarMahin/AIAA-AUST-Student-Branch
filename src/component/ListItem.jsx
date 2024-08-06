import React from 'react'

const ListItem = ({children, className, onClick, id, keyValue}) => {
  return (
    <li className={`flex ${className}`}  onClick = {onClick} id = {id} key={keyValue}>
        {children}
    </li>
  )
}

export default ListItem