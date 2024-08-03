import React from 'react'

const Image = ({src, alt, className, onLoad}) => {
  return (
      <img className={`${className}`} src = {src} alt = {alt} onLoad = {onLoad}></img>
  )
}

export default Image