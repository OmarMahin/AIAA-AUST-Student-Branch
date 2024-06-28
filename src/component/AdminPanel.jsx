import React, { useState } from "react"
import Container from "./Container"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"
import Button from "./Button"
import Image from "./Image"
import axios from "axios"
import { MdDelete } from "react-icons/md"
import { useEffect } from "react"
import { useRef } from "react"

const AdminPanel = () => {
	axios.defaults.withCredentials = true

	let confirmRef = useRef()

	let [current, setCurrent] = useState(0)
	let [memberData, setMemberData] = useState([])
	let [memberType, setMemberType] = useState("General")
	let [memberSession, setMemberSession] = useState("Fall 2023")
	let [aasbId, setAasbId] = useState("")
	let [aiaaId, setAiaaId] = useState("")
	let [refresh, setRefresh] = useState(false)
	let [showConfirmMessage, setShowConfirmMessage] = useState(false)
	let [confirmDelete, setConfirmDelete] = useState(false)
	let [currentId, setCurrentId] = useState("")

	let handleCurrentMenu = (e) => {
		const _id = e.target.id
		setCurrent(_id)
	}

	let handleAasbId = (e) => {
		setAasbId(e.target.value)
	}
	let handleAiaaId = (e) => {
		setAiaaId(e.target.value)
	}
	let handleMemberType = (e) => {
		setMemberType(e.target.value)
	}
	let handleMemberSession = (e) => {
		setMemberSession(e.target.value)
	}

	let closeConfirmMessage = () => {
		setShowConfirmMessage(false)
		setCurrentId("")
	}

	let handleIdStore = (id) => {
		setShowConfirmMessage(!showConfirmMessage)
		setCurrentId(id)
	}

	let handleAddMember = () => {
		axios
			.post("http://localhost:3000/api/v1/auth/initialSignUp", {
				name: "N/A",
				email: "N/A",
				AASBmembershipId: aasbId,
				AIAAmembershipId: aiaaId,
				password: "N/A",
				memberType,
				memberSession,
			})
			.then((data) => {
				setAasbId("")
				setAiaaId("")
				setMemberType("General")
				setMemberSession("Fall 2023")
				setRefresh(!refresh)
				console.log(data)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	let handleDeleteUser = () => {
		// console.log(currentId.type)
		axios
			.delete("http://localhost:3000/api/v1/auth/deleteMember", {
				data: { id: currentId },
			})
			.then((data) => {
				console.log(data)
				setRefresh(!refresh)
			})
	}

	useEffect(() => {

		axios
			.get("http://localhost:3000/api/v1/auth/getAllMembers")
			.then((data) => {
				setMemberData(data.data)
				console.log(data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [refresh])

	return (
		<Container>
			<h3 className=' text-darknest_blue text-center font-poppins font-bold text-3xl my-10'>
				Admin Panel
			</h3>
			<Flex
				className={
					"flex w-full shadow-around shadow-black/60 mb-10 rounded-lg h-[600px] overflow-hidden"
				}
			>
				<div className=' bg-darknest_blue w-[15%]'>
					<List className={"flex flex-col mt-8 pl-3 gap-4"}>
						<ListItem
							className={`font-poppins font-medium text-medium ${
								current == 0
									? "bg-[#E7ECF1] text-black rounded-l-lg"
									: "text-[#eaecee] hover:bg-light-blue rounded-none"
							}  px-6 py-3 duration-300 border-l-[3px] border-[#c7d6e663] hover:cursor-pointer`}
							id={"0"}
							onClick={handleCurrentMenu}
						>
							Add Member
						</ListItem>
						<ListItem
							className={`font-poppins font-medium text-medium ${
								current == 1
									? "bg-[#E7ECF1] text-black rounded-l-lg"
									: "text-[#eaecee] hover:bg-light-blue rounded-none"
							}  px-6 py-3 duration-300 border-l-[3px] border-[#c7d6e663] hover:cursor-pointer`}
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
						<h3 className=' text-darknest_blue text-xl font-poppins font-semibold text-center'>
							Member Initial Information
						</h3>
						<Flex className={"flex flex-col mt-10 w-[50%] gap-9 "}>
							<Flex className={"gap-10 items-center justify-between"}>
								<span className='font-poppins font-medium text-lg text-darker_blue'>
									AASB Id :
								</span>
								<input
									className='w-[60%] py-2 px-2 rounded-lg border-[2px] border-slate-500 font-poppins font-medium text-gray-800'
									onChange={handleAasbId}
									value={aasbId}
								></input>
							</Flex>
							<Flex className={"gap-10 items-center justify-between"}>
								<span className='font-poppins font-medium text-lg text-darker_blue'>
									AIAA Id :
								</span>
								<input
									className='w-[60%] py-2 px-2 rounded-lg border-[2px] border-slate-500 font-poppins font-medium text-gray-800'
									onChange={handleAiaaId}
									value={aiaaId}
								></input>
							</Flex>
							<Flex className={"gap-10 items-center justify-between"}>
								<span className='font-poppins font-medium text-lg text-darker_blue'>
									Member Type :
								</span>
								<select
									id='memberType'
									className={` block w-[40%] p-2.5 rounded-lg border-2 border-slate-500 font-poppins font-medium ${
										memberType == "Admin"
											? "bg-red-300 border-red-300 text-black"
											: memberType == "Executive"
											? "bg-green-300 border-green-300 text-black"
											: "bg-white text-gray-800"
									}`}
									onChange={handleMemberType}
									value={memberType}
								>
									<option selected value={"General"} className={"bg-white"}>
										General
									</option>
									<option value={"Executive"} className={"bg-white"}>
										Executive
									</option>
									<option value={"Admin"} className={"bg-white"}>
										Admin
									</option>
								</select>
							</Flex>
							<Flex className={"gap-10 items-center justify-between"}>
								<span className='font-poppins font-medium text-lg text-darker_blue'>
									Member Session :
								</span>
								<select
									id='memberType'
									className={` block w-[40%] p-2.5 rounded-lg border-2 border-slate-500 font-poppins font-medium bg-white text-gray-800`}
									onChange={handleMemberSession}
									value={memberSession}
								>
									<option selected value={"Fall 2023"} className={"bg-white"}>
										Fall 2023
									</option>
								</select>
							</Flex>
							<div className='mt-10 text-center'>
								<Button onClick={handleAddMember}>Add Member</Button>
							</div>
						</Flex>
						<Image
							src={"/images/ContactDesign.png"}
							alt='Admin Design'
							className={"absolute right-8 top-1/2 -translate-y-1/2"}
						></Image>
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
							<List className={"flex flex-col w-full gap-6 overflow-auto px-3 py-2"}>
								{memberData.map((data, index) => (
									<ListItem
										className={`px-3 ${
											index % 2 == 0 ? "bg-[#bdd8f3]" : "bg-[#d7e2ec]"
										} rounded-lg hover:shadow-md duration-300 relative group `}
									>
										<Flex className={"w-full justify-evenly items-center "}>
											<span className='font-poppins font-medium text-light-blue text-[14px] w-16 text-center '>
												{data.AASBmembershipId}
											</span>
											<span className='font-poppins font-medium text-light-blue text-[14px] w-16 text-center '>
												{data.AIAAmembershipId}
											</span>
											<span className='font-poppins font-medium text-light-blue text-[14px] w-56 text-center '>
												{data.name}
											</span>
											<span className='font-poppins font-medium text-light-blue text-[14px] w-56 text-center '>
												{data.email}
											</span>
											<span
												className={`font-poppins font-medium text-light-blue text-[14px] w-28 py-[5px] my-2 text-center rounded-full ${
													data.memberType == "Admin"
														? "bg-red-500 text-white"
														: data.memberType == "Executive"
														? "bg-green-400 text-white"
														: ""
												}`}
											>
												{data.memberType}
											</span>
											<span className='font-poppins font-medium text-light-blue text-[14px] w-40 text-center'>
												{data.memberSession}
											</span>
										</Flex>
										<MdDelete
											className='absolute top-1/2 right-3 -translate-y-1/2 bg-[#f4f5f7] text-red-500 rounded-full w-6 h-6 p-[3px] hover:cursor-pointer'
											onClick={() => handleIdStore(data._id)}
										/>
									</ListItem>
								))}
							</List>
						</div>
					</div>
				</div>
			</Flex>

			<div
				className={` w-[100vw] h-[100vh] fixed top-0 left-0 ${
					showConfirmMessage ? "z-20 bg-black/40 duration-300" : "z-[-1] bg-transparent"
				} `}
				onClick={closeConfirmMessage}
			>
				<Flex
					className={`absolute p-8 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center rounded-xl gap-10 ${
						showConfirmMessage ? "scale-100" : "scale-0"
					} duration-300`}
				>
					<span className={"font-poppins font-semibold text-darknest_blue text-xl"}>
						Are you sure you want to delete the user data?
					</span>
					<Flex className={"gap-4"}>
						<div
							className={`py-2 px-5 bg-red-500 rounded-lg inline-block text-white lg:text-[15px] text-[16px] border-2 border-red-500 hover:bg-red-300 hover:text-font-color duration-150 hover:cursor-pointer`}
							onClick={() => {
								setConfirmDelete(true)
								handleDeleteUser()
							}}
						>
							<span className='font-poppins font-medium'>Confirm</span>
						</div>
						<div
							className={`py-2 px-5 bg-light-blue rounded-lg inline-block text-white lg:text-[15px] text-[16px] border-2 border-light-blue hover:bg-[#EAF3FF] hover:text-font-color duration-150 hover:cursor-pointer`}
							onClick={closeConfirmMessage}
						>
							<span className='font-poppins font-medium'>Cancel</span>
						</div>
					</Flex>
				</Flex>
			</div>
		</Container>
	)
}

export default AdminPanel
