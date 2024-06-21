import React, { useState } from "react"
import Container from "./Container"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"
import Title from "./Title"

const AdminPanel = () => {
	let [current, setCurrent] = useState(0)
	let [memberData, setMemberData] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

	let handleCurrentMenu = (e) => {
		const _id = e.target.id
		setCurrent(_id)
	}
	return (
		<Container>
			<h3 className=' text-darknest_blue text-center font-poppins font-bold text-3xl my-10'>
				Admin Panel
			</h3>
			<Flex className={"flex w-full shadow-around shadow-black/60 mb-10 rounded-lg h-[600px] overflow-hidden"}>
				<div className=' bg-darknest_blue w-[15%]'>
					<List className={"flex flex-col mt-4 pl-3 gap-4"}>
						<ListItem
							className={`font-poppins font-medium text-medium ${
								current == 0
									? "bg-[#E7ECF1] text-black"
									: "text-[#eaecee] hover:bg-light-blue "
							}  px-6 py-3 duration-300 border-b-[1px] border-[#c7d6e663] rounded-l-md hover:cursor-pointer`}
							id={"0"}
							onClick={handleCurrentMenu}
						>
							Add Member
						</ListItem>
						<ListItem
							className={`font-poppins font-medium text-medium ${
								current == 1
									? "bg-[#E7ECF1] text-black"
									: "text-[#eaecee] hover:bg-light-blue "
							}  px-6 py-3 duration-300 border-b-[1px] border-[#c7d6e663] rounded-l-md hover:cursor-pointer`}
							id={"1"}
							onClick={handleCurrentMenu}
						>
							Member List
						</ListItem>
					</List>
				</div>
				<div className=' bg-[#E7ECF1] w-[85%] relative'>
					<div
						className={`px-10 py-10 w-full absolute top-0 left-0 ${
							current == 0 ? "z-10" : "z-[-1]"
						}`}
					>
						<h3>Member Initial Information</h3>
					</div>
					<div
						className={`px-4 pt-8 w-full top-0 left-0 ${
							current == 1 ? "relative" : "absolute z-[-1]"
						} h-full`}
					>
						<Flex
							className={" justify-evenly p-3 border-[2px] border-light-blue rounded-lg "}
						>
							<span className='font-poppins font-medium text-light-blue text-base w-16 text-center '>
								AASB Id
							</span>
							<span className='font-poppins font-medium text-light-blue text-base w-16 text-center '>
								AIAA Id
							</span>
							<span className='font-poppins font-medium text-light-blue text-base w-56 text-center '>
								Name
							</span>
							<span className='font-poppins font-medium text-light-blue text-base w-56 text-center '>
								Email
							</span>
							<span className='font-poppins font-medium text-light-blue text-base w-28 text-center '>
								Member Type
							</span>
							<span className='font-poppins font-medium text-light-blue text-base w-40 text-center'>
								Member Session
							</span>
						</Flex>
						<div className='h-[80%] overflow-auto mt-7'>
							<List className={"flex flex-col w-full gap-6 overflow-auto px-3 pt-1"}>
								{memberData.map((data, index) =>
									index % 2 == 0 ? (
										<ListItem className={"px-3 bg-[#bdd8f3] py-4 rounded-lg hover:shadow-md duration-300"}>
											<Flex className={"w-full justify-evenly"}>
												<span className='font-poppins font-medium text-light-blue text-[15px] w-16 text-center '>
													12345
												</span>
												<span className='font-poppins font-medium text-light-blue text-[15px] w-16 text-center '>
													12345
												</span>
												<span className='font-poppins font-medium text-light-blue text-[15px] w-56 text-center '>
													Dummy Dummy name
												</span>
												<span className='font-poppins font-medium text-light-blue text-[15px] w-56 text-center '>
													Dummy@dummy.com
												</span>
												<span className='font-poppins font-medium text-light-blue text-[15px] w-28 text-center '>
													Dummy
												</span>
												<span className='font-poppins font-medium text-light-blue text-[15px] w-40 text-center'>
													Fall 2023
												</span>
											</Flex>
										</ListItem>
									) : (
										<ListItem className={"px-3 bg-[#d7e2ec] py-4 rounded-lg"}>
											<Flex className={"w-full justify-evenly"}>
												<span className='font-poppins font-medium text-light-blue text-[15px] w-16 text-center '>
													12345
												</span>
												<span className='font-poppins font-medium text-light-blue text-[15px] w-16 text-center '>
													12345
												</span>
												<span className='font-poppins font-medium text-light-blue text-[15px] w-56 text-center '>
													Dummy Dummy name
												</span>
												<span className='font-poppins font-medium text-light-blue text-[15px] w-56 text-center '>
													Dummy@dummy.com
												</span>
												<span className='font-poppins font-medium text-light-blue text-[15px] w-28 text-center '>
													Dummy
												</span>
												<span className='font-poppins font-medium text-light-blue text-[15px] w-40 text-center'>
													Fall 2023
												</span>
											</Flex>
										</ListItem>
									)
								)}
							</List>
						</div>
					</div>
				</div>
			</Flex>
		</Container>
	)
}

export default AdminPanel
