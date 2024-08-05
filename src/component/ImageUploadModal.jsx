import React from "react"
import { useState } from "react"
import { useRef } from "react"
import Button from "./Button"
import Flex from "./Flex"
import { IoIosCloseCircle } from "react-icons/io"
import { toast } from "react-toastify"
import Cropper from "react-easy-crop"
import getCroppedImg from "../helperFunctions/ImageCrop"
import axios from "axios"
import { dataURLtoFile } from "../helperFunctions/base64toFile"

const ASPECT_RATIO = 1
const MIN_WIDTH = 250

const ImageUploadModal = ({ showModal, closeModal, user_id }) => {
	let imageInputRef = useRef()

	const [imgUrl, setImgUrl] = useState("")
	const [crop, setCrop] = useState({ x: 0, y: 0 })
	const [zoom, setZoom] = useState(1)
	const [imgCroppedArea, setImgCroppedArea] = useState("")

	const [loading, setLoading] = useState(false)
	

	let browseImage = () => {
		imageInputRef.current.click()
	}

	let handleClose = (e) => {
		if (e.target.id && e.target.id == "Background") {
			setImgUrl('')
			closeModal()
		}
	}

	const fileUpload = (e) => {
		const file = e.target.files?.[0]

		if (!file) {
			return
		}
		const reader = new FileReader()

		reader.addEventListener("load", () => {
			const imageElement = new Image()

			const imageUrl = reader.result?.toString() || ""

			imageElement.src = imageUrl

			imageElement.addEventListener("load", (e) => {
				const { width, height } = e.currentTarget
				

				if (width < MIN_WIDTH || height < MIN_WIDTH) {
					toast.error("Image must be atleast 200 x 200 px")
					setImgUrl("")
					return
				}
				setImgUrl(imageUrl)
			})

			
		})

		reader.readAsDataURL(file)
	}

	const onImageLoad = (e) => {
		const { width, height } = e.currentTarget

		const cropAspectRatio = (MIN_WIDTH / width) * 100

		const cropData = makeAspectCrop(
			{
				unit: "%",
				width: cropAspectRatio,
			},

			ASPECT_RATIO,
			width,
			height
		)

		const centeredCrop = centerCrop(cropData, width, height)
		setCrop(centeredCrop)
	}

	const onCropComplete = (croppedArea, croppedAreaPixels) => {
		setImgCroppedArea(croppedAreaPixels)
	}

	const uploadImg = async () => {
		
		if (!imgUrl) {
			toast.error("Please select an image")
			return
		}
		const croppedImageUrl = await getCroppedImg(imgUrl, imgCroppedArea)
		const imageData = dataURLtoFile(croppedImageUrl, `${user_id}-pfp`)

		let imageFormData = new FormData()
		imageFormData.append("file", imageData)
		
		setLoading(true)

		axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/file/imageUpload`, imageFormData)
			.then((response) => {
				if (response.status == '200') {
					const data = response.data
					if (data){
						setLoading(false)
						window.location.reload()
					}
				}
				
			})
			.catch((err) => {
				console.log(err)
				setLoading(false)
			})
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
						id={"Background"}
						className='flex w-6 h-6 text-font-color relative hover:cursor-pointer after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full'
						onClick={(e) => {
							handleClose(e)
						}}
					>
						<IoIosCloseCircle className='w-full h-full' />
					</Flex>
				</Flex>
				<Flex className='lg:w-[400px] w-[350px] h-80 flex flex-col overflow-hidden relative border-[1px] border-gray-300 items-center justify-center bg-[#D6DDE5]'>
					{imgUrl && (
						<Cropper
							image={imgUrl}
							crop={crop}
							zoom={zoom}
							aspect={1}
							onCropChange={setCrop}
							onCropComplete={onCropComplete}
							onZoomChange={setZoom}
							cropShape={"round"}
							showGrid={false}
							minZoom = {1}
							maxZoom = {20}
							zoomWithScroll = {true}
							cropSize={{ width: MIN_WIDTH, height: MIN_WIDTH }}
						/>
					)}
				</Flex>
				<Flex className={"flex gap-2 mt-5"}>
					<input
						type={"file"}
						accept={"image/*"}
						ref={imageInputRef}
						onChange={fileUpload}
						className={"hidden"}
						onLoad={onImageLoad}
					></input>
					<input
					className="hidden"
					type={'range'}
					value = {zoom}
					min = {1}
					max = {20}
					onChange = {(e)=>{setZoom(e.target.value)}}
					>
						
					</input>
					<Button className={"lg:text-sm lg:px-3 lg:py-[5px] h-9 leading-[9px]"} onClick={browseImage}>
						Browse
					</Button>
					<Button className={`lg:text-sm ${loading ? "lg:px-7 " : 'lg:px-3'} lg:py-[5px] h-9 leading-[9px]`} onClick={uploadImg} loading = {loading}>
						Upload
					</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default ImageUploadModal
