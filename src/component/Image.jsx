import React from 'react'

const Image = ({src, alt, className, onLoad, fetchpriority = '', sizes = '', imrSrcSet = '', loadingType = ''}) => {
  return (
      <img className={`${className}`} srcSet={imrSrcSet} src = {src} alt = {alt} onLoad = {onLoad} fetchPriority={fetchpriority} sizes={sizes} loading={loadingType} ></img>
  )
}

export default Image