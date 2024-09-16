import React from "react"
import Button from "./Button"
import Container from "./Container"
import Title from "./Title"

const AboutUs = () => {
	return (
		<Container>
			<Title>AIAA AUST Student Branch</Title>
			<p className=' w-full text-font-color font-poppins font-medium lg:text-[19px] text-[17px] text-pretty leading-9'>
				<span className=' font-bold'>AIAA AUST Student Branch</span>, the first student branch
				of the American Institute of Aeronautics and Astronautics(AIAA) in Bangladesh. At the
				AIAA AUST Student Branch, we are dedicated to pushing the boundaries of aerospace
				through innovation, research, and professional development with{" "}
				<span className=' font-bold'>AIAA.</span>
			</p>
			<p
				className=' mt-5 w-full text-font-color font-poppins font-medium lg:text-[19px] text-[17px] text-pretty
         leading-9'
			>
				Our vision is to reach new heights in the Aerospace and Aviation field through{" "}
				<span className=' font-bold'>AIAA</span> by giving cutting-edge aerospace insights,
				networking opportunities with industry leaders, career development resources, as well as
				resources for innovating and developing aerospace technologies.
			</p>
			<Button className={" mt-14 mb-8"} link={"/about"}>
				Learn More
			</Button>
		</Container>
	)
}

export default AboutUs
