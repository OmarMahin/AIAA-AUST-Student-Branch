import React from 'react'

const Title = ({children}) => {
  return (
    <div className=' mt-20 mb-10'>
        <h2 className='relative after:absolute after:bottom-[-13px] lg:after:w-[150px] after:w-[120px] after:h-1 after:translate-x-[0%] after:left-0 after:bg-gradient-to-r after:from-darknest_blue after:to-transparent font-poppins font-bold lg:text-4xl text-3xl text-darknest_blue'>{children}</h2>
    </div>
  )
}

export default Title