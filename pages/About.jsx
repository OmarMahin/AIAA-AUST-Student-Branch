import React from "react"
import AboutContent from "../component/AboutContent"
import AnimatePage from "../component/AnimatePage"
import Container from "../component/Container"
import Title from "../component/Title"

const About = () => {
	return (
		<AnimatePage>

		<Container>
			<Title>About Us</Title>
			<AboutContent></AboutContent>
		</Container>
		</AnimatePage>
	)
}

export default About
