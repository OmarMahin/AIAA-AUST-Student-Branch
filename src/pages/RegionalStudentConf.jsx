import React from "react"
import AnimatePage from "../component/AnimatePage"
import Button from "../component/Button"
import Container from "../component/Container"
import Title from "../component/Title"

const RegionalStudentConf = () => {
	return (
		<Container>
			<AnimatePage>
				<Title>Regional Student Conference</Title>
				<p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 text-font-color'>
					AIAA’s Regional Student Conferences gives students the chance to present their
					research in a formal technical meeting atmosphere. Just as important, you’ll exchange
					ideas and discuss programs with students from other schools in your region.
				</p>
				<p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 text-font-color mt-5'>
					A university student in good standing at their institution who is also an AIAA
					Student Member is eligible to submit a paper to the Regional Student Conference. The
					submitting and presenting author(s) must be AIAA Student Members.   
				</p>
                <p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 text-font-color mt-5'>
                To learn more visit the link below.  
				</p>

				<Button
					link={"https://www.aiaa.org/get-involved/students-educators/student-conferences"}
					newPage={true}
					className={"mt-10 mb-20"}
				>
					Learn More
				</Button>
			</AnimatePage>
		</Container>
	)
}

export default RegionalStudentConf
