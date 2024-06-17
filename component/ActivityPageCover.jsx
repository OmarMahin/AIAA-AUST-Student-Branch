import React from 'react'
import Image from './Image'

const ActivityPageCover = ({image}) => {
  return (
    <div className='w-full lg:h-[400px] md:h-[300px] h-[200px] rounded-xl overflow-hidden relative lg:mt-20 mt-14'>
        <Image src={`images/${image}`} className = 'absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full' alt={'Activity Image'}></Image>
    </div>
  )
}

export default ActivityPageCover