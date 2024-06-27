import React from "react"
import { useState } from "react"
import { useRef } from "react"
import { MdOutlineFileUpload } from "react-icons/md"
import axios from "axios"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import Title from "./Title"
import { useLayoutEffect } from "react"

const UserAccount = (data) => {
	const user_data = data.data

	axios.defaults.withCredentials = true

	let imageInputRef = useRef()

	let [imageData, setImageData] = useState("")

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

	let uploadImage = (e) => {
		setImageData(e.target.files[0])
		axios
			.post("http://localhost:3000/api/v1/file/imageUpload", {
				imageData,
			})
			.then((data) => {
				console.log(data)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<Container>
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
						<Button>Change Password</Button>
						<Button>Edit Information</Button>
					</Flex>
				</div>
			</Flex>
		</Container>
	)
}

export default UserAccount
