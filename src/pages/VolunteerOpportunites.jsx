import React from "react"
import AnimatePage from "../component/AnimatePage"
import Button from "../component/Button"
import Container from "../component/Container"
import Title from "../component/Title"

const VolunteerOpportunites = () => {
	return (
		<Container>
			<AnimatePage>
				<Title>Volunteer Opportunities</Title>
				<p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 text-font-color'>
					If you want to become a part of the biggest aerospace technical society in the world,
					meet aerospace professionals, students, and educators, as well as, present your work
					on a global platform, then AIAA provides volunteer opportunities just for you.
				</p>
				<p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 text-font-color mt-5'>	
					Visit the link given below to learn more.
				</p>

				<Button
					link={"https://www.aiaa.org/get-involved/volunteer-opportunities"}
					newPage={true}
					className={"mt-10 mb-20"}
				>
					Learn More
				</Button>
			</AnimatePage>
		</Container>
	)
}

export default VolunteerOpportunites
