import React from "react"
import { useState } from "react"
import { useRef } from "react"
import { MdOutlineFileUpload } from "react-icons/md"
import axios from "axios"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import Title from "./Title"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import Image from "./Image"
import { useEffect } from "react"
import List from "./List"
import ListItem from "./ListItem"

const UserAccount = (data) => {
	const user_data = data.data

	axios.defaults.withCredentials = true

	const navigation = useNavigate()

	let imageInputRef = useRef()

	let [refresh, setRefresh] = useState("")
	let [showConfirmMessage, setShowConfirmMessage] = useState(false)
	let [editInformation, setEditInformation] = useState(false)
	let [otpSend, setOtpSend] = useState(false)

	let [user_name, setUser_name] = useState(user_data.name)
	let [user_aasbId, setUser_AasbId] = useState(user_data.AASB_ID)
	let [user_aiaaId, setUser_AiaaId] = useState(user_data.AIAA_ID)
	let [user_email, setUser_Email] = useState(user_data.email)
	let [user_department, setUser_Department] = useState(user_data.Department)
	let [user_studentId, setUser_StudentId] = useState(user_data.Student_ID)
	let [user_year_semester, setUser_Year_Semester] = useState(user_data.YS)
	let [user_profileImage, setUser_ProfileImage] = useState(user_data.profileImage)
	let [user_contact, setUser_Contact] = useState(user_data.Contact_No)
	let [user_id, setUser_id] = useState(user_data.id)

	let [updated_user_student_id, setUpdated_user_student_id] = useState("")
	let [updated_user_department, setUpdated_user_department] = useState("")
	let [updated_user_ys, setUpdated_user_ys] = useState("")
	let [updated_user_contact, setUpdated_user_contact] = useState("")

	let [dataUpdating, setDataUpdating] = useState(false)

	let name = user_data.name
	let nameParts = name.split(" ")
	let userName = nameParts[0][0] + nameParts.pop()[0]

	let handleImageUploadClick = (e) => {
		imageInputRef.current.click()
	}

	let closeConfirmMessage = () => {
		setShowConfirmMessage(false)
	}

	let handleEditInformation = () => {
		if (!editInformation) {
			setEditInformation(true)
		} else {
			setEditInformation(false)
		}
	}

	let sendToOTP_Page = (e) => {

		e.preventDefault()

		if (!otpSend) {
			axios
				.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/auth/sendOTP`, {
					email: user_data.email,
				})
				.then((data) => {
					if (data.data.error) {
					} else {
						setOtpSend(true)
						console.log("otp Sent")
						navigation(`/user-otp/${data.data.pageLink}`)
						toast.success("An OTP has been sent to your email.")
					}
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}

	let uploadImage = async (e) => {
		const originalImage = e.target.files[0]

		const imageData = new File([originalImage], `${user_id}-${originalImage.name}`, {
			type: originalImage.type,
			lastModified: originalImage.lastModified,
		})

		let imageFormData = new FormData()
		imageFormData.append("file", imageData)
		console.log("Uploading")
		await axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/file/imageUpload`, imageFormData)
			.then((response) => {
				if (response.data.status) {
					user_data.profileImage = response.data.result
					setRefresh(!refresh)
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}

	document.addEventListener("click", (e) => {
		if (e.target.id === "background") {
			setShowConfirmMessage(false)
		}
	})

	let handleUpdate = (e) => {
		e.preventDefault()
		const data = {
			StudentId: updated_user_student_id
				? updated_user_student_id
				: user_studentId == "N/A"
				? null
				: user_studentId,
			department: updated_user_department ? updated_user_department : user_department,
			yearAndSemester: updated_user_ys ? updated_user_ys : user_year_semester,
			contact: updated_user_contact
				? updated_user_contact
				: user_contact == "N/A"
				? null
				: user_contact,
		}

		setDataUpdating(true)

		axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/user/updateUser`, {
				id: user_id,
				data,
			})
			.then((response) => {
				if (response.status == "200") {
					const data = response.data

					if (data.success) {

						toast.success(data.message)
						setEditInformation(false)
						setUser_StudentId(
							updated_user_student_id ? updated_user_student_id : user_data.Student_ID
						)
						setUser_Department(
							updated_user_department ? updated_user_department : user_data.Department
						)
						setUser_Year_Semester(updated_user_ys ? updated_user_ys : user_data.YS)
						setUser_Contact(
							updated_user_contact ? updated_user_contact : user_data.Contact_No
						)

						setUpdated_user_contact("")
						setUpdated_user_department("")
						setUpdated_user_student_id("")
						setUpdated_user_ys("")

					}

					else{
						toast.error(data.message)
						console.log(data.data.error)
					}

					setDataUpdating(false)
				}
			})
			.catch((error) => {
				setDataUpdating(false)
				console.log(error)
			})
	}

	useEffect(() => {
		console.log("Refreshed")
	}, [refresh])

	return (
		<Container>
			<Flex
				className={` w-[100vw] h-[100vh] fixed top-0 left-0 ${
					showConfirmMessage ? "z-20 bg-black/40 duration-300" : "z-[-1] bg-transparent"
				} `}
				id={"background"}
			>
				<Flex
					className={`absolute p-8 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center rounded-xl gap-10 ${
						showConfirmMessage ? "scale-100" : "scale-0"
					} duration-300`}
				>
					<span className={"font-poppins font-semibold text-darknest_blue text-xl"}>
						Are you sure you want to change your password?
					</span>
					<Flex className={"gap-4"}>
						<div
							className={`py-2 px-5 bg-red-500 rounded-lg inline-block text-white lg:text-[15px] text-[16px] border-2 border-red-500 hover:bg-red-300 hover:text-font-color duration-150 hover:cursor-pointer`}
							onClick={sendToOTP_Page}
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
			</Flex>
			<Title>Account Details</Title>
			<Flex className={"mt-10 flex flex-col w-[60%] mx-auto mb-40 "}>
				<div
					className='w-60 mt-8 h-60 rounded-full bg-[#aebed4] mx-auto relative hover:cursor-pointer overflow-hidden group '
					onClick={handleImageUploadClick}
				>
					<div className='w-full h-[40%] absolute bottom-[-100%] duration-300 group-hover:bottom-0 bg-gradient-to-t from-black/80 z-10'>
						<Flex className=' flex flex-col items-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
							<MdOutlineFileUpload className=' w-7 h-7' />
							<span>Upload Image</span>
						</Flex>

						<input
							type={"file"}
							accept={"image/*"}
							ref={imageInputRef}
							className={"hidden"}
							onChange={uploadImage}
						></input>
					</div>
					{user_data.profileImage != "N/A" ? (
						<Image
							src={user_data.profileImage}
							alt={"User Profile Picture"}
							className={
								"absolute -translate-x-1/2 -translate-y-1/2 w-full top-1/2 left-1/2"
							}
						></Image>
					) : (
						<span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppins font-bold text-[80px]'>
							{userName}
						</span>
					)}
				</div>
				<div className='mt-16 p-8 bg-[#E7ECF1]  rounded-2xl shadow-around shadow-black/40'>
					<Flex>
						<Flex className={"w-[50%] flex flex-col"}>
							<List className={"flex flex-col gap-2"}>
								<ListItem
									className={
										"bg-[#d3e0ec] flex font-poppins font-semibold text-darknest_blue justify-between text-xl w-full p-4 rounded-l-lg"
									}
								>
									{<h3>Name</h3>}
									{<h3>:</h3>}
								</ListItem>
								<ListItem
									className={
										"flex font-poppins font-semibold text-darknest_blue justify-between text-xl w-full p-4 rounded-l-lg"
									}
								>
									{<h3>Email</h3>}
									{<h3>:</h3>}
								</ListItem>
								<ListItem
									className={
										"bg-[#d3e0ec] flex font-poppins font-semibold text-darknest_blue justify-between text-xl w-full p-4 rounded-l-lg"
									}
								>
									{<h3>AIAA ID</h3>}
									{<h3>:</h3>}
								</ListItem>
								<ListItem
									className={
										"flex font-poppins font-semibold text-darknest_blue justify-between text-xl w-full p-4 rounded-l-lg"
									}
								>
									{<h3>AASB ID</h3>}
									{<h3>:</h3>}
								</ListItem>
								<ListItem
									className={
										"bg-[#d3e0ec] flex font-poppins font-semibold text-darknest_blue justify-between text-xl w-full p-4 rounded-l-lg"
									}
								>
									{<h3>Student ID</h3>}
									{<h3>:</h3>}
								</ListItem>
								<ListItem
									className={
										"flex font-poppins font-semibold text-darknest_blue justify-between text-xl w-full p-4 rounded-l-lg"
									}
								>
									{<h3>Department</h3>}
									{<h3>:</h3>}
								</ListItem>
								<ListItem
									className={
										"bg-[#d3e0ec] flex font-poppins font-semibold text-darknest_blue justify-between text-xl w-full p-4 rounded-l-lg"
									}
								>
									{<h3>Year/Semester</h3>}
									{<h3>:</h3>}
								</ListItem>
								<ListItem
									className={
										"flex font-poppins font-semibold text-darknest_blue justify-between text-xl w-full p-4 rounded-l-lg"
									}
								>
									{<h3>Contact No</h3>}
									{<h3>:</h3>}
								</ListItem>
							</List>
						</Flex>
						<Flex className={"w-[50%] flex flex-col gap-2"}>
							<List className={"flex flex-col gap-2"}>
								<ListItem
									className={`flex font-poppins font-semibold text-darker_blue justify-between text-xl w-full bg-[#d3e0ec] p-4 rounded-r-lg`}
								>
									{<h3>{user_name}</h3>}
								</ListItem>
							</List>
							<List className={"flex flex-col gap-2"}>
								<ListItem
									className={`flex font-poppins font-semibold text-darker_blue justify-between text-xl w-full p-4 rounded-r-lg`}
								>
									{<h3>{user_email}</h3>}
								</ListItem>
							</List>
							<List className={"flex flex-col gap-2"}>
								<ListItem
									className={`flex font-poppins font-semibold text-darker_blue justify-between text-xl w-full bg-[#d3e0ec] p-4 rounded-r-lg`}
								>
									{<h3>{user_aiaaId}</h3>}
								</ListItem>
							</List>
							<List className={"flex flex-col gap-2"}>
								<ListItem
									className={`flex font-poppins font-semibold text-darker_blue justify-between text-xl w-full  p-4 rounded-r-lg`}
								>
									{<h3>{user_aasbId}</h3>}
								</ListItem>
							</List>
							<List className={"flex flex-col gap-2"}>
								<ListItem
									className={`flex font-poppins font-semibold text-darker_blue justify-between text-xl w-full bg-[#d3e0ec] ${
										editInformation ? "py-[8px] pr-4" : "p-4"
									} rounded-r-lg`}
								>
									{editInformation ? (
										<input
											type={"text"}
											placeholder={user_studentId}
											className={"bg-transparent py-2 pl-4 placeholder:text-[#5d7d99]"}
											onChange={(e) => {
												setUpdated_user_student_id(e.target.value)
											}}
										></input>
									) : (
										<h3>{user_studentId}</h3>
									)}
								</ListItem>
							</List>
							<List className={"flex flex-col gap-2"}>
								<ListItem
									className={`flex font-poppins font-semibold text-darker_blue justify-between text-xl w-full ${
										editInformation ? "py-[7px] pr-4" : "p-4"
									} rounded-r-lg`}
								>
									{editInformation ? (
										<select
											className={"bg-transparent py-2 pl-[12px] w-full text-[#5d7d99]"}
											onChange={(e) => {
												setUpdated_user_department(e.target.value)
											}}
										>
											<option>N/A</option>
											<option>ME</option>
											<option>CSE</option>
											<option>EEE</option>
											<option>CE</option>
											<option>TE</option>
											<option>IPE</option>
											<option>Arch</option>
										</select>
									) : (
										<h3>{user_department}</h3>
									)}
								</ListItem>
							</List>
							<List className={"flex flex-col gap-2"}>
								<ListItem
									className={`flex font-poppins font-semibold text-darker_blue justify-between text-xl w-full bg-[#d3e0ec] ${
										editInformation ? "py-[7px] pr-4" : "p-4"
									} rounded-r-lg`}
								>
									{editInformation ? (
										<select
											className={"bg-transparent py-2 pl-[12px] w-full text-[#5d7d99]"}
											onChange={(e) => {
												setUpdated_user_ys(e.target.value)
											}}
										>
											<option>N/A</option>
											<option>1/1</option>
											<option>1/2</option>
											<option>2/1</option>
											<option>2/2</option>
											<option>3/1</option>
											<option>3/1</option>
											<option>4/1</option>
											<option>4/2</option>
										</select>
									) : (
										<h3>{user_year_semester}</h3>
									)}
								</ListItem>
							</List>
							<List className={"flex flex-col gap-2"}>
								<ListItem
									className={`flex font-poppins font-semibold text-darker_blue justify-between text-xl w-full ${
										editInformation ? "py-2 pr-4" : "p-4"
									} rounded-r-lg`}
								>
									{editInformation ? (
										<input
											type={"text"}
											placeholder={user_contact}
											className={"bg-transparent py-2 pl-4 placeholder:text-[#5d7d99]"}
											onChange={(e) => {
												setUpdated_user_contact(e.target.value)
											}}
										></input>
									) : (
										<h3>{user_contact}</h3>
									)}
								</ListItem>
							</List>
						</Flex>
					</Flex>
					<Flex className={"flex gap-5 mt-12 w-[80%]"}>
						{editInformation ? (
							<>
								<Button onClick={handleUpdate} loading = {dataUpdating}>Update</Button>
								<Button onClick={handleEditInformation}>Cancel</Button>
							</>
						) : (
							<>
								<Button
									onClick={() => {
										setShowConfirmMessage(true)
									}}
								>
									Change Password
								</Button>
								<Button onClick={handleEditInformation}>Edit Information</Button>
							</>
						)}
					</Flex>
				</div>
			</Flex>
		</Container>
	)
}

export default UserAccount
