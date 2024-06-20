import React from "react"
import Flex from "./Flex"
import Image from "./Image"

const TeamMember = ({
	name,
	image,
	position,
	deparment,
	deparment2,
	facebookLink,
	linkedInLink,
	className
}) => {
	if (!image) {
		image = "Default_Image.png"
	}

	return (
		<div>
			<Flex className={`flex flex-col items-center mb-6 ${className} w-[300px]`}>
				<div className='lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] rounded-full bg-[#D6DDE5] overflow-hidden relative'>
					<Image
						src={`images/members/Fall'23/${image}`}
						alt={`${name}'s image'`}
						className={" absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"}
					></Image>
				</div>
				<h3 className={` mt-7 font-poppins font-bold text-darknest_blue ${name.length > 25 ? 'lg:text-[17px] text-[16px] py-[6px]' : 'lg:text-[22px] text-[20px]'}  text-center`}>
					{name}
				</h3>
				<p className='w-[250px] text-center mt-3 font-poppins font-semibold text-darker_blue text-[17px]'>
					{position}
				</p>
				<h3 className='mt-3 font-poppins font-bold text-darker_blue text-xl text-center'>{deparment}</h3>
				<h3 className='font-poppins font-bold text-darker_blue text-xl text-center'>{deparment2}</h3>
			</Flex>
		</div>
	)
}

export default TeamMember
