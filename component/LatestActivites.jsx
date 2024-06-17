import React from 'react'
import ActivityCard from './ActivityCard'
import Container from './Container'
import Title from './Title'

const LatestActivites = () => {
  return (
    <Container className={'mb-60'}>
        <Title>Latest Activities</Title>
        <ActivityCard></ActivityCard>
    </Container>

  )
}

export default LatestActivites