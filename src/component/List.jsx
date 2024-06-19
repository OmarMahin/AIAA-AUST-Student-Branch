import React from 'react'
import Flex from './Flex'

const List = ({className, children, ref}) => {
  return (
    <ul ref={ref}>
        <Flex className={className}>{children}</Flex>
    </ul>
  )
}

export default List