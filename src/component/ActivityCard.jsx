import Container from "./Container"
import React, { useEffect } from "react"
import Image from "./Image"
import Flex from "./Flex"
import Button from "./Button"
import { SlCalender } from "react-icons/sl"
import { useState } from "react"
import { Link } from "react-router-dom"

const ActivityCard = () => {
	let [smallerDisplay, setSmallerDisplay] = useState(false)
	const imagePath = "/images/Activites/Relief_And_Rescue_Bot/cardBanner.png"
	const heading = "Rescue and Relief Bot For Flood Effected Area"
	const date = "12 September 2024"
	const pageLink = "/activites/rescue_and_relief_bot"
	const word_limit = 200
	let shortInfo = `Initiated by AIAA AUST Student Branch Chair Anas Al Rafin, and with contributions from a dedicated team of 17 students, this project exemplifies the power of engineering applied to real-world problems. We have created a remote-controlled waterborne bot capable of navigating floodwaters to rescue individuals weighing up to 50 kg and deliver essential supplies such as food, medicine, drinkable water, and relief materials to regions otherwise unreachable by conventional methods. Designed to operate in severely impacted areas, the bot provides both immediate humanitarian aid and life-saving assistance.
	`
	if (shortInfo.length > word_limit) {
		shortInfo = shortInfo.slice(0, word_limit) + ". . . "
	}
	useEffect(() => {
		function checkWindowSize() {
			if (window.innerWidth < 768) {
				setSmallerDisplay(true)
			} else {
				setSmallerDisplay(false)
			}
		}
		checkWindowSize()
		window.addEventListener("resize", checkWindowSize)
	}, [])

	return (
		<Container>
			{smallerDisplay ? (
				<Link to={pageLink}>
					<div className='overflow-hidden bg-darker_blue rounded-xl px-0 mt-3'>
						<Flex className={" gap-4 justify-between flex flex-col"}>
							<div className='relative overflow-hidden lg:h-[400px] h-[300px]'>
								<Image
									src={imagePath}
									className='absolute bottom-0 left-0 translate-y-[0%]'
									alt={"Activity Image"}
								></Image>
							</div>
							<div className='px-5'>
								<Flex className={"flex flex-col gap-3 pt-6 items-start w-full"}>
									<h2 className=' font-poppings font-bold text-white text-xl'>
										{heading}
									</h2>
									<Flex className={"items-center gap-3 flex"}>
										<SlCalender className=' text-white w-5 h-5 mb-[1px]' />
										<span className='font-poppins font-medium text-white text-[16px]'>
											{date}
										</span>
									</Flex>
								</Flex>
								<Flex className={"flex flex-col items-center"}>
									<p className='font-poppins font-medium text-white text-[15px] mt-10 mb-12 leading-8 text-pretty'>
										{shortInfo}
									</p>
									<Button className={"mb-5"} invert='true' link={pageLink}>
										Learn More
									</Button>
								</Flex>
							</div>
						</Flex>
					</div>
				</Link>
			) : (
				<Link to={pageLink}>
					<div className='w-full overflow-hidden bg-darker_blue rounded-xl px-0 mt-3 hover:shadow-xl hover:shadow-black/30 duration-500 group'>
						<Flex className={" gap-7 justify-between flex"}>
							<div className='w-[35%] relative overflow-hidden'>
								<Image
									src={imagePath}
									className=' absolute bottom-0 left-0 translate-y-[0%] inline-block duration-500 lg:group-hover:scale-[1.05]'
									alt={"Activity Image"}
								></Image>
							</div>
							<div className='w-[65%] lg:pr-11 lg:pb-11 pr-6 pb-6 relative'>
								<Flex
									className={
										"justify-between pt-6 lg:items-center flex lg:flex-row flex-col lg:gap-0 gap-2"
									}
								>
									<h2 className=' font-poppings font-bold text-white lg:text-2xl text-xl w-[80%]'>
										{heading}
									</h2>
									<Flex className={"items-center gap-3 flex"}>
										<SlCalender className=' text-white w-5 h-5 mb-[2px]' />
										<span className='font-poppins font-medium text-white lg:text-[15px] text-[16px]'>
											{date}
										</span>
									</Flex>
								</Flex>
								<p className='font-poppins font-medium text-white lg:text-lg text-[16px] mt-10 lg:mb-24 mb-12 lg:leading-8 leading-6 text-pretty'>
									{shortInfo}
								</p>
								<div className='absolute lg:bottom-11 lg:right-11 bottom-6 right-6'>
									<Button invert={true} link={pageLink}>
										Learn More
									</Button>
								</div>
							</div>
						</Flex>
					</div>
				</Link>
			)}
		</Container>
	)
}

export default ActivityCard
