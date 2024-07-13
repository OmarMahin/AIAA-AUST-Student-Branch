import React from "react"
import AnimatePage from "../component/AnimatePage"
import Button from "../component/Button"
import Container from "../component/Container"
import Title from "../component/Title"

const DBF_Information = () => {
	return (
		<Container>
			<AnimatePage>
				<Title>DBF Competition</Title>
				<p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 text-font-color'>
					Every year the AIAA Foundation with assistance from several AIAA Technical Committees
					and corporate sponsors, hosts a competition for undergraduate and graduate students
					to design and build a remote-controlled aircraft to perform specific tasks. Students
					then come together to face off against each other in April. For specific information
					about the Design/Build/Fly Competition, visit the link given below.
				</p>
				<Button link={"https://www.aiaa.org/dbf"} newPage={true} className={"mt-10 mb-20"}>
					Learn More
				</Button>
			</AnimatePage>
		</Container>
	)
}

export default DBF_Information
