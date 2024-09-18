import React from "react"
import Flex from "./Flex"
import TeamMember from "./TeamMember"

const CreditsContent = () => {
	return (
		<Flex className={"flex flex-col gap-10 items-center mb-20"}>
			<h1 className='lg:text-3xl text-2xl font-poppins text-darker_blue my-9 font-semibold text-center'>
				Web Development Team
			</h1>
			{window.innerWidth > 768 ? (
				<Flex className={"flex justify-between flex-wrap"}>
					<TeamMember
						name={"Fabbiha Tahsin Prova"}
						image={"Fabbiha Tahsin Prova.png"}
						position={"Team Leader"}
						deparment={"CSE"}
					></TeamMember>
					<TeamMember
						name={"Md. Omar Karim"}
						image={"Md Omar Karim.png"}
						position={"Web Development & Publicity Executive"}
						deparment={"ME"}
					></TeamMember>
				</Flex>
			) : (
				<Flex className={"flex flex-col gap-9 items-center"}>
					<TeamMember
						name={"Fabbiha Tahsin Prova"}
						image={"Fabbiha Tahsin Prova.png"}
						position={"Team Leader"}
						deparment={"CSE"}
					></TeamMember>
					<TeamMember
						name={"Md. Omar Karim"}
						image={"Md Omar Karim.png"}
						position={"Web Development & Publicity Executive"}
						deparment={"ME"}
					></TeamMember>
				</Flex>
			)}
		</Flex>
	)
}

export default CreditsContent
