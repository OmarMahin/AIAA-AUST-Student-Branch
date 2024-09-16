import axios from "axios"
import React, { useRef } from "react"
import { useState } from "react"
import { FaPhoneAlt } from "react-icons/fa"
import { toast } from "react-toastify"
import validateEmail from "../helperFunctions/ValidateEmail"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"
import SocialMediaIcons from "./SocialMediaIcons"
import emailjs from "@emailjs/browser"
import { TailSpin } from "react-loader-spinner"

const ContactCard = () => {
	let [name, setName] = useState("")
	let [email, setEmail] = useState("")
	let [message, setMessage] = useState("")

	let [loading, setLoading] = useState(false)

	const formRef = useRef()

	function emptyValues() {
		setName("")
		setEmail("")
		setMessage("")
	}

	let sendMessage = (e) => {
		e.preventDefault()

		if (!name) {
			toast.error("Please input your name")
			return
		}

		if (!email) {
			toast.error("Please input an email")
			return
		}

		if (!validateEmail(email)) {
			toast.error("Invalid email")
			return
		}

		if (!message) {
			toast.error("Please input your message")
			return
		}

		setLoading(true)
		emailjs
			.sendForm("service_t5o7fcp", "template_voujklh", formRef.current, {
				publicKey: "mjjwMSO1KPpX3A_HO",
			})
			.then(
				() => {
					toast.success("Message sent successfully")
					setLoading(false)
					emptyValues()
				},
				(error) => {
					toast.error("An error occured")
				}
			)

		// axios.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/email/sendMessage`, {
		// 	name,
		// 	email,
		// 	message
		// }).then((response)=>{
		// 	if (response.status == '200'){
		// 		const data = response.data
		// 		setLoading(false)
		// 		emptyValues()
		// 		if (data.success){

		// 			toast.success(data.message)
		// 		}
		// 		else{
		// 			toast.error(data.message)
		// 			console.log(data.data.error)
		// 		}
		// 	}
		// }).catch((error)=>{
		// 	setLoading(false)
		// 	emptyValues()
		// 	toast.error("An error occured")
		// 	console.log(error)
		// })
	}

	return (
		<Container>
			<Flex
				className={
					"flex lg:flex-row flex-col lg:w-[90%] bg-[#E7ECF1] lg:my-20 my-40 rounded-2xl mx-auto shadow-around shadow-black/60 justify-between"
				}
			>
				<Flex className={"flex flex-col lg:w-[49%] relative lg:pb-0 pb-28"}>
					<h3 className='mx-auto mt-11 font-poppins font-bold text-darknest_blue text-3xl'>
						Contact Us
					</h3>
					<div className='px-9 mt-12'>
						<p className='font-poppins font-medium lg:text-lg text-base text-font-color'>
							Have a query? Or want to give us feedback? Then, please feel free to contact us
							using the form or the social media and phone number given below.
						</p>
						<SocialMediaIcons className={"text-light-blue mt-6"}></SocialMediaIcons>
					</div>
					<Image
						src={"/images/ContactDesign.png"}
						className={
							"absolute lg:bottom-12 bottom-4 left-2/3 -translate-x-1/2 lg:w-[55%] md:w-[20%] sm:w-[25%] w-[40%]"
						}
					></Image>
				</Flex>
				<div className='lg:w-[2px] w-[80%] lg:h-auto h-[2px] bg-light-blue/40 lg:my-10 my-5 mx-auto'></div>
				<div className='lg:w-[49%] lg:mt-11 mt-6'>
					<form ref={formRef} onSubmit={sendMessage}>
						<Flex
							className={
								"flex flex-col items-center px-9 gap-8 font-poppins font-medium text-font-color"
							}
						>
							<input
								type={"text"}
								className='w-[100%] bg-white lg:py-4 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500'
								placeholder={"Name"}
								name='from'
								value={name}
								onChange={(e) => {
									setName(e.target.value)
								}}
							></input>
							<input
								type={"email"}
								className='w-[100%] bg-white lg:py-4 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500'
								placeholder={"Email"}
								name='email'
								value={email}
								onChange={(e) => {
									setEmail(e.target.value)
								}}
							></input>

							<textarea
								type={"textarea"}
								className='w-[100%] lg:h-[200px] h-[150px] bg-white lg:py-4 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 resize-none'
								placeholder={"Message"}
								name='message'
								value={message}
								onChange={(e) => {
									setMessage(e.target.value)
								}}
							></textarea>

							{/* <Button className={'mb-16'} loading = {loading} onClick = {(e) => sendMessage(e)}>Send Message</Button> */}
							<Flex className={"relative mb-16"}>
								<div className="relative">
									<Flex className={"absolute -left-[-5px] top-1/2 translate-y-[-50%]  z-10"}>
										<TailSpin
											visible={loading}
											height='18'
											width='18'
											color={"#EAF3FF"}
											ariaLabel='tail-spin-loading'
											radius='1'
										/>
									</Flex>

									<input
										type='submit'
										value={"Send Message"}
										className='py-2 px-8 overflow-hidden rounded-lg inline-block lg:text-[17px] text-[16px] border-2 bg-light-blue text-white border-light-blue hover:cursor-pointer'
									></input>
								</div>
							</Flex>
						</Flex>
					</form>
				</div>
			</Flex>
		</Container>
	)
}

export default ContactCard
