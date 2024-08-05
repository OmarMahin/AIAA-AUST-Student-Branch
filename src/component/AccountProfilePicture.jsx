import React, { useEffect, useState } from "react"
import Flex from "./Flex"
import { IoPencil } from "react-icons/io5"
import axios from "axios"
import ImageUploadModal from "./ImageUploadModal"
import Image from "./Image"

const AccountProfilePicture = ({ user_id }) => {
	const [showImageUploadModal, setShowImageUploadModal] = useState(false)
	const [user_data, setUser_data] = useState({})
	const [userName, setUserName] = useState("")

	useEffect(() => {
		axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/user/findMemberByUserId`, {
				_id: user_id,
			})
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (data.success) {
						const user = data.data.user
						setUser_data(user)
						const name = user.name
						const nameParts = name.split(" ")
						setUserName(nameParts[0][0] + nameParts.pop()[0])
					}
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<Flex className={"relative"}>
			<Flex
				className={
					"flex lg:w-9 lg:h-9 w-7 h-7 rounded-full absolute z-10 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#a0b6ca] justify-center items-center hover:cursor-pointer border-2 border-white"
				}
				onClick={() => setShowImageUploadModal(true)}
			>
				<IoPencil className='lg:text-xl text-lg text-darknest_blue' />
			</Flex>
			<div className='lg:w-52 lg:h-52 w-40 h-40 rounded-full bg-[#D6DDE5] mx-auto relative group border-[1px] border-slate-200 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[5] overflow-hidden'>
				{user_data.profileImage ? (
					<Image
						src={user_data.profileImage}
						alt={"User Profile Picture"}
						className={"absolute -translate-x-1/2 -translate-y-1/2 w-full top-1/2 left-1/2"}
					></Image>
				) : userName ? (
					<span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppins font-bold text-[80px]'>
						{userName}
					</span>
				) : (
					<Image
						src={'/images/Default_Image.png'}
						alt={"Default Image"}
						className={"absolute -translate-x-1/2 -translate-y-1/2 w-full top-1/2 left-1/2"}
					></Image>
				)}
			</div>

			<ImageUploadModal
				showModal={showImageUploadModal}
				closeModal={() => setShowImageUploadModal(false)}
				user_id={user_id}
			></ImageUploadModal>
		</Flex>
	)
}

export default AccountProfilePicture
