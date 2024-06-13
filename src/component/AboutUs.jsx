import React from 'react'
import Button from './Button'
import Container from './Container'
import Title from './Title'

const AboutUs = () => {
  return (
    <Container>
        <Title>About Us</Title>
        <p className=' w-full text-font-color font-poppins font-medium lg:text-[20px] text-[18px] text-justify leading-10'>Welcome to <span className=' font-bold'>AIAA AUST Student Branch</span>, the first student branch of the American Institute of Aeronautics and Astronautics(AIAA) in Bangladesh. At Ahsanullah University of Science and Technology (AUST), we are dedicated to pushing the boundaries of aerospace through innovation, research, and professional development with <span className=' font-bold'>AIAA</span></p>
        <p className=' mt-5 w-full text-font-color font-poppins font-medium lg:text-[20px] text-[18px] text-justify leading-10'>
        <span className=' font-bold'>AIAA</span> is the world’s largest aerospace technical
				society established in <span className=' font-bold'>1963</span> by the merger of the two
				great aerospace societies of the day, the American Rocket Society (founded in 1930 as
				the American Interplanetary Society), and the Institute of the Aerospace Sciences . . 
        </p>
        <Button className={' mt-14 mb-8'} link = {'/about'}>Learn More</Button>
    </Container>

  )
}

export default AboutUs