import React from 'react'
import AnimatePage from '../component/AnimatePage'
import Container from '../component/Container'
import Title from '../component/Title'
import CreditsContent from '../component/CreditsContent'

const Credits = () => {
  return (
    <AnimatePage>
        <Container>
            <Title>Credits</Title>
            <CreditsContent></CreditsContent>
        </Container>
    </AnimatePage>
  )
}

export default Credits