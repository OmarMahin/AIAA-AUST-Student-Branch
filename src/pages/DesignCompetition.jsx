import React from "react"
import AnimatePage from "../component/AnimatePage"
import Button from "../component/Button"
import Container from "../component/Container"
import Title from "../component/Title"

const DesignCompetition = () => {
  return (
    <Container>
			<AnimatePage>
				<Title>Design Competitions</Title>
				<p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 text-font-color'>
                The AIAA Foundation sponsors design competitions every year. These competitions offer a great opportunity for students to participate in a simulated real-world problem, allowing students to gain experience and receive useful and constructive feedback from technical experts who sit on AIAA Technical Committees.
				</p>
				<p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 text-font-color mt-5'>
                AIAA design competitions allow students to perform theoretical work and gain real-world insight into the design process. Whether students are designing an aircraft, engine, or space vehicle, they will go through all the primary design steps involved in determining a solution to a Request for Proposal (RFP).    
				</p>
				<p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 text-font-color mt-5'>
                To learn more visit the link below.  
				</p>

				<Button
					link={"https://www.aiaa.org/get-involved/students-educators/Design-Competitions"}
					newPage={true}
					className={"mt-10 mb-20"}
				>
					Learn More
				</Button>
			</AnimatePage>
		</Container>
  )
}

export default DesignCompetition