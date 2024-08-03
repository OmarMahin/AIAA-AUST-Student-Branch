import React from "react"
import { useState } from "react"
import { useRef } from "react"
import Button from "./Button"
import Flex from "./Flex"
import Image from "./Image"
import { IoIosCloseCircle } from "react-icons/io"

const ImageUploadModal = ({ showModal, closeModal }) => {
	let imageInputRef = useRef()

	let browseImage = () => {
		imageInputRef.current.click()
	}

	let handleClose = (e) => {
		if (e.target.id && e.target.id == "Background") {
			closeModal()
		}
	}

	return (
		<Flex
			className={`${
				showModal ? "scale-100" : "scale-0"
			} flex fixed z-50 top-0 left-0 w-full h-full bg-black/20 justify-center items-center`}
			id={"Background"}
			onClick={(e) => {
				handleClose(e)
			}}
		>
			<Flex
				className={`flex flex-col bg-background-color rounded-lg py-4 px-5 ${
					showModal ? "scale-100 opacity-100" : "scale-75 opacity-0"
				} duration-300`}
			>
				<Flex className={"flex justify-between items-center pb-4"}>
					<h2 className={"font-poppins font-medium text-font-color text-lg "}>Image Edit</h2>
					<Flex
						id={'Background'}
						className='flex w-6 h-6 text-font-color relative hover:cursor-pointer after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full'
						onClick={(e) => {
							handleClose(e)
						}}
					>
						<IoIosCloseCircle  className="w-full h-full"/>
					</Flex>
				</Flex>
				<div className='w-80 h-80 overflow-hidden relative border-[1px] border-gray-300'>
					<Image
						src={"./images/Banner_For_Phone.png"}
						className={"absolute -translate-x-1/2 -translate-y-1/2 w-full top-1/2 left-1/2"}
						alt={"Display Image"}
					></Image>
				</div>
				<Flex className={"flex gap-2 mt-5"}>
					<input
						type={"file"}
						accept={"image/*"}
						ref={imageInputRef}
						className={"hidden"}
					></input>
					<Button className={"lg:text-sm lg:px-3 lg:py-[5px] h-9"} onClick={browseImage}>
						Browse
					</Button>
					<Button className={"lg:text-sm lg:px-3 lg:py-[5px] h-9"}>Upload</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default ImageUploadModal
