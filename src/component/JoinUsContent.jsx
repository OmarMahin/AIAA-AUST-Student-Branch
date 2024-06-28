import React from "react"
import { FaCircle } from "react-icons/fa"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"
import Title from "./Title"

const JoinUsContent = () => {
	return (
		<Container>
			<Title>Join Us</Title>
			<p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 mt-14 text-font-color'>
				Are you an engineering student passionate about aerospace and astronautics? Do you dream
				of reaching new heights in your career? Then here's your chance to be part of something
				extraordinary!
			</p>
			<h3 className='font-poppins font-bold lg:text-2xl text-base text-light-blue mt-10'>
				Why join the AIAA AUST Student Branch:
			</h3>
			<p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 mt-8 text-font-color'>
				By joining us you will be able to-
			</p>
			<List
				className={
					"md:pl-10 pl-2 mt-4 flex-col flex lg:gap-3 gap-3 text-[17px] font-poppins font-medium text-font-color"
				}
			>
				<ListItem className={"items-center lg:gap-4 gap-4 flex"}>
					<div>
						<FaCircle className=' text-darknest_blue h-2 w-2' />
					</div>
					Become a part of the world’s largest aerospace technical society.
				</ListItem>
				<ListItem className={"items-center lg:gap-4 gap-4 flex"}>
					<div>
						<FaCircle className=' text-darknest_blue h-2 w-2' />
					</div>
					Work on cutting-edge projects and solutions.
				</ListItem>
				<ListItem className={"items-center lg:gap-4 gap-4 flex"}>
					<div>
						<FaCircle className=' text-darknest_blue h-2 w-2' />
					</div>
					Participate in NASA's Student Launch, Spaceport America Cup, DBF (Design/Build/Fly),
					and Rocketry.
				</ListItem>
				<ListItem className={"items-center lg:gap-4 gap-4 flex"}>
					<div>
						<FaCircle className=' text-darknest_blue h-2 w-2' />
					</div>
					Connect with industry experts, alumni, and student chapters.
				</ListItem>
				<ListItem className={"items-center lg:gap-4 gap-4 flex"}>
					<div>
						<FaCircle className=' text-darknest_blue h-2 w-2' />
					</div>
					Learn from industry leaders and academics.
				</ListItem>
				<ListItem className={"items-center lg:gap-4 gap-4 flex"}>
					<div>
						<FaCircle className=' text-darknest_blue h-2 w-2' />
					</div>
					Enhance your professional skills.
				</ListItem>
				<ListItem className={"items-center lg:gap-4 gap-4 flex"}>
					<div>
						<FaCircle className=' text-darknest_blue h-2 w-2' />
					</div>
					Present your work on a global platform.
				</ListItem>
			</List>

			<p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 mt-8 text-font-color'>
				So what are you waiting for? Click on the link below to join the AIAA AUST Student
				Branch.
			</p>
			<p className='font-poppins font-semibold lg:text-[15x] text-base text-pretty lg:leading-9 leading-9 mt-3 text-gray-700 italic'>
				Note: Our General Member Recruitment for Fall 2023 has been closed. But don't worry, we
				will be back again for Spring 2024.
			</p>

			<Flex className={"w-full justify-center"}>
				<div
					className={`py-2 px-9 bg-light-blue rounded-lg inline-block text-white lg:text-xl text-[16px] border-2 border-light-blue hover:bg-[#EAF3FF] hover:text-font-color duration-150 mt-10 mb-40 hover:cursor-pointer`}
				>
					<span className='font-poppins font-medium'>Join Us</span>
				</div>
			</Flex>
		</Container>
	)
}

export default JoinUsContent
