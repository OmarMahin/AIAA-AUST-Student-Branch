import React from "react"
import AnimatePage from "../component/AnimatePage"
import Container from "../component/Container"
import TeamContent from "../component/TeamContent"
import Title from "../component/Title"

const Team = () => {
	return (
		<AnimatePage>
			<Container>
				<Title>Our Team</Title>
				<TeamContent></TeamContent>
			</Container>
		</AnimatePage>
	)
}

export default Team
