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
	const word_limit = 200
	let shortInfo = `AIAA AUST Student Branch has started its journey with General Member Recruitment Fall’23, dated from 02 June 2024 to 04 June 2024. Over three action-packed days, the campus of Ahsanullah University of Science and Technology(AUST) buzzed with energy, enthusiasm, and endless fun. From thrilling dart board games to the challenging buzz-wire contest, our booth was the ultimate hub of student engagement!
	`
	if (shortInfo.length > word_limit){
		shortInfo = shortInfo.slice(0,word_limit) + '. . . '
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
				<Link to={"/activites"}>
					<div className='overflow-hidden bg-darker_blue rounded-xl px-0 mt-3'>
						<Flex className={" gap-4 justify-between flex flex-col"}>
							<div className='relative overflow-hidden h-[400px]'>
								<Image
									src={"/images/GM_Recruitment.jpg"}
									className='absolute bottom-0 left-0 translate-y-[0%]'
									alt={"Activity Image"}
								></Image>
							</div>
							<div className='px-5'>
								<Flex className={"flex flex-col gap-3 pt-6 items-start"}>
									<h2 className=' font-poppings font-bold text-white text-xl'>
										General Member Recruitment Fall'23
									</h2>
									<Flex className={"items-center gap-3 flex"}>
										<SlCalender className=' text-white w-5 h-5 mb-[1px]' />
										<span className='font-poppins font-medium text-white text-[16px]'>
											02-04 June
										</span>
									</Flex>
								</Flex>
								<Flex className={"flex flex-col items-center"}>
									<p className='font-poppins font-medium text-white text-[15px] mt-10 mb-12 leading-8 text-pretty'>
										{shortInfo}
									</p>
									<Button className={"mb-5"} invert='true' link={'/activites'}>
										Learn More
									</Button>
								</Flex>
							</div>
						</Flex>
					</div>
				</Link>
			) : (
				<Link to={"/activites"}>
					<div className='w-full overflow-hidden bg-darker_blue rounded-xl px-0 mt-3 hover:shadow-xl hover:shadow-black/30 duration-500 group'>
						<Flex className={" gap-7 justify-between flex"}>
							<div className='w-[35%] relative overflow-hidden'>
								<Image
									src={"/images/GM_Recruitment.jpg"}
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
									<h2 className=' font-poppings font-bold text-white lg:text-2xl text-xl'>
										General Member Recruitment Fall'23
									</h2>
									<Flex className={"items-center gap-3 flex"}>
										<SlCalender className=' text-white w-5 h-5 mb-[2px]' />
										<span className='font-poppins font-medium text-white lg:text-lg text-[16px]'>
											02-04 June
										</span>
									</Flex>
								</Flex>
								<p className='font-poppins font-medium text-white lg:text-lg text-[16px] mt-10 lg:mb-24 mb-12 lg:leading-8 leading-6 text-pretty'>
									{shortInfo}
								</p>
								<Button
									className={"absolute lg:bottom-11 lg:right-11 bottom-6 right-6"}
									invert='true'
									link={'/activites'}
								>
									Learn More
								</Button>
							</div>
						</Flex>
					</div>
				</Link>
			)}
		</Container>
	)
}

export default ActivityCard
