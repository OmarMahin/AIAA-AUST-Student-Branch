import React from "react"
import { Link } from "react-router-dom"
import Container from "./Container"
import { GoDotFill } from "react-icons/go"
import List from "./List"
import ListItem from "./ListItem"

const AboutContent = () => {
	return (
		<Container>
			<div className=' px-10 text-[#212121]'>
				<p className=' font-poppins font-medium text-lg text-justify leading-9'>
					Welcome to <span className=' font-bold'>AIAA AUST Student Branch</span>, the first
					student branch of the{" "}
					<Link
						to={"https://www.aiaa.org/"}
						target='_blank'
						className=' font-bold text-light-blue'
					>
						American Institute of Aeronautics and Astronautics(AIAA)
					</Link>{" "}
					in Bangladesh. At{" "}
					<Link
						to={"https://aust.edu/"}
						target='_blank'
						className=' font-bold text-light-blue'
					>
						Ahsanullah University of Science and Technology (AUST)
					</Link>
					, we are dedicated to pushing the boundaries of aerospace through innovation,
					research, and professional development with <span className=' font-bold'>AIAA</span>
					. 
				</p>

				<h3 className=' mt-16 font-poppins font-bold text-2xl text-light-blue'>
					What is AIAA?
				</h3>
				<p className=' mt-5 font-poppins font-medium text-lg text-justify leading-9'>
					<span className=' font-bold'>AIAA</span> is the world’s largest aerospace technical
					society established in <span className=' font-bold'>1963</span> by the merger of the
					two great aerospace societies of the day, the American Rocket Society (founded in
					1930 as the American Interplanetary Society), and the Institute of the Aerospace
					Sciences (established in 1933 as the Institute of the Aeronautical Sciences).
					<span className=' font-bold'>AIAA</span> has been a proud aerospace leader for over
					80 years. It is dedicated to shaping the future of aerospace, astronautics, and STEM
					educations as well as committed to provide resources and experiences that assist in
					an aero enthusiast's personal and professional development.
				</p>

				<h3 className=' mt-16 font-poppins font-bold text-2xl text-light-blue'>Our Vision</h3>
				<p className=' mt-5 font-poppins font-medium text-lg text-justify leading-9'>
					At <span className=' font-bold'>AIAA AUST Student Branch</span> our vision is to
					reach new heights in the Aerospace and Aviation field though{" "}
					<span className=' font-bold'>AIAA</span> by giving:
					<List className={"pl-10 mt-4 flex-col"}>
						<ListItem className={"items-center gap-4"}>
							<GoDotFill className=' text-darknest_blue' />
							Cutting-edge aerospace insights
						</ListItem>
						<ListItem className={"items-center gap-4"}>
							<GoDotFill className=' text-darknest_blue' />
							Networking opportunities with industry leaders
						</ListItem>
						<ListItem className={"items-center gap-4"}>
							<GoDotFill className=' text-darknest_blue' />
							Career development resources
						</ListItem>
						<ListItem className={"items-center gap-4"}>
							<GoDotFill className=' text-darknest_blue' />
							Resources for innovating and developing aerospace technologies
						</ListItem>
					</List>
				</p>

				<p className='mt-5 font-poppins font-medium text-lg text-justify leading-9'>
					Our members get the opportunity to enhance their professional skills as well as
					presenting their work on a global platform. They also get the chance to participate
					in NASA’s Student Launch, Spaceport America Cup, DBF(Design/Build/Fly), Rocketry
					competitions and many more.
				</p>
				<p className='mb-52 mt-5 font-poppins font-medium text-lg text-justify leading-9'>
					Stay with us for more exciting updates and a sneek peak into the horizon of our
					visions.
				</p>
			</div>
		</Container>
	)
}

export default AboutContent
