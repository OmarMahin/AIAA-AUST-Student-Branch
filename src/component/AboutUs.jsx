import React from 'react'
import Button from './Button'
import Container from './Container'
import Title from './Title'

const AboutUs = () => {
  return (
    <Container>
        <Title>About Us</Title>
        <p className=' w-full text-font-color font-poppins font-medium text-[20px] text-justify leading-10'>Welcome to <span className=' font-bold'>AIAA AUST Student Branch</span>, the first student branch of the American Institute of Aeronautics and Astronautics(AIAA) in Bangladesh. At Ahsanullah University of Science and Technology (AUST), we are dedicated to pushing the boundaries of aerospace through innovation, research, and professional development with <span className=' font-bold'>AIAA</span> . . .</p>
        <Button className={' mt-14 mb-8'} link = {'/about_us'}>Learn More</Button>
    </Container>

  )
}

export default AboutUs