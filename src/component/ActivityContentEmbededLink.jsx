import React from 'react'
import Flex from './Flex'
import { Link } from 'react-router-dom'

const ActivityContentEmbededLink = ({link}) => {
  return (
    <Flex className={"mt-2 font-poppins font-medium text-font-color text-lg"}>
        <span>Source link: <Link to={link} target='_blank' className='text-darker_blue'>{link}</Link></span>
    </Flex>
  )
}

export default ActivityContentEmbededLink