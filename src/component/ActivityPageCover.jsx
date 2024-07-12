import React from 'react'
import Image from './Image'

const ActivityPageCover = ({image}) => {
  return (
    <div className='w-full lg:h-[450px] md:h-[300px] h-[200px] rounded-xl overflow-hidden relative lg:mt-14 mt-10'>
        <Image src={`/images/ActivityCovers/${image}`} className = 'absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full' alt={'Activity Image'}></Image>
    </div>
  )
}

export default ActivityPageCover