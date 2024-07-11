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
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"

const UserAccount = (data) => {
	const user_data = data.data

	axios.defaults.withCredentials = true

	const navigation = useNavigate()

	let imageInputRef = useRef()

	let [imageData, setImageData] = useState("")
	let [showConfirmMessage, setShowConfirmMessage] = useState(false)
	let [otpError, setOtpError] = useState(false)
	let [otpSend, setOtpSend] = useState(false)

	let dataKey = []
	let dataValue = []

	for (let [key, value] of Object.entries(user_data)) {
		if (key.split("_").length > 1) {
			key = key.split("_")[0] + " " + key.split("_")[1]
		}
		if (key != "profileImage") {
			if (key == "name") {
				dataKey.push(key)
				dataValue.push(value)
			} else {
				dataKey.push(key)
				dataValue.push(value)
			}
		}
	}

	let name = user_data.name
	let nameParts = name.split(" ")
	let userName = nameParts[0][0] + nameParts.pop()[0]

	let handleImageUploadClick = (e) => {
		imageInputRef.current.click()
	}

	let closeConfirmMessage = () => {
		setShowConfirmMessage(false)
	}

	let sendToOTP_Page = () => {
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

	let uploadImage = (e) => {
		setImageData(e.target.files[0])
		axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/file/imageUpload`, {
				imageData,
			})
			.then((data) => {
				console.log(data)
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
					<div className='w-full h-[40%] absolute bottom-[-100%] duration-300 group-hover:bottom-0 bg-gradient-to-t from-black/80'>
						<Flex className=' flex flex-col items-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
							<MdOutlineFileUpload className=' w-7 h-7' />
							<span>Upload Image</span>
						</Flex>
						<input
							type={"file"}
							accept={".png, .jpg, .jpeg"}
							ref={imageInputRef}
							className={"hidden"}
							onChange={uploadImage}
						></input>
					</div>
					{user_data.profileImage != "N/A" ? (
						""
					) : (
						<span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppins font-bold text-[80px]'>
							{userName}
						</span>
					)}
				</div>
				<div className='mt-16 p-8 bg-[#E7ECF1]  rounded-2xl shadow-around shadow-black/40'>
					<Flex className={""}>
						<Flex className={"w-[50%] flex flex-col gap-2"}>
							{dataKey.map((data, index) =>
								data != "userProfileName" && data != "imageURL" ? (
									<Flex
										className={`flex font-poppins font-semibold text-darknest_blue justify-between text-xl w-full ${
											index % 2 == 0 ? "bg-[#d3e0ec]" : ""
										} p-4 rounded-l-lg`}
									>
										<h3>{data[0].toUpperCase() + data.substring(1)}</h3>
										<h3>:</h3>
									</Flex>
								) : (
									""
								)
							)}
						</Flex>
						<Flex className={"w-[50%] flex flex-col gap-2"}>
							{dataValue.map((data, index) =>
								dataKey[index] != "userProfileName" && dataKey[index] != "imageURL" ? (
									<Flex
										className={`flex font-poppins font-semibold text-darker_blue justify-between text-xl w-full ${
											index % 2 == 0 ? "bg-[#d3e0ec]" : ""
										} p-4 rounded-r-lg`}
									>
										<h3>{data}</h3>
									</Flex>
								) : (
									""
								)
							)}
						</Flex>
					</Flex>
					<Flex className={"flex gap-5 mt-12 w-[80%]"}>
						<Button
							onClick={() => {
								setShowConfirmMessage(true)
							}}
						>
							Change Password
						</Button>
						<Button>Edit Information</Button>
					</Flex>
				</div>
			</Flex>
		</Container>
	)
}

export default UserAccount
