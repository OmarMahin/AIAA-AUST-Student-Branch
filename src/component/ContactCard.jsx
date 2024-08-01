import axios from "axios"
import React from "react"
import { useState } from "react"
import { FaPhoneAlt } from "react-icons/fa"
import { toast } from "react-toastify"
import validateEmail from "../helperFunctions/ValidateEmail"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"
import SocialMediaIcons from "./SocialMediaIcons"

const ContactCard = () => {

	let [name, setName] = useState('')
	let [email, setEmail] = useState('')
	let [message, setMessage] = useState('')

	let [loading, setLoading] = useState(false)

	function emptyValues(){
		setName('')
		setEmail('')
		setMessage('')
	}

	let sendMessage = (e)=>{
		e.preventDefault()


		if (!name){
			toast.error("Please input your name")
			return
		}

		if (!email){
			toast.error("Please input an email")
			return
		}

		if (!validateEmail(email)){
			toast.error("Invalid email")
			return
		}

		if (!message){
			toast.error("Please input your message")
			return
		}

		setLoading(true)

		axios.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/email/sendMessage`, {
			name,
			email,
			message
		}).then((response)=>{
			if (response.status == '200'){
				const data = response.data
				setLoading(false)
				emptyValues()
				if (data.success){
					
					toast.success(data.message)
				}
				else{
					toast.error(data.message)
					console.log(data.data.error)
				}
			}
		}).catch((error)=>{
			setLoading(false)
			emptyValues()
			toast.error("An error occured")
			console.log(error)
		})
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
							Have a query? Or want to give us feedback? Then, please feel free to contact
							us using the form or the social media and phone number given below.
						</p>
						<SocialMediaIcons className={"text-light-blue mt-6"}></SocialMediaIcons>
					</div>
                    <Image src={'/images/ContactDesign.png'} className = {'absolute lg:bottom-12 bottom-4 left-2/3 -translate-x-1/2 lg:w-[55%] w-[45%]'}></Image>
				</Flex>
				<div className='lg:w-[2px] w-[80%] lg:h-auto h-[2px] bg-light-blue/40 lg:my-10 my-5 mx-auto'></div>
				<div className='lg:w-[49%] lg:mt-11 mt-6'>
					<form>
						<Flex className={"flex flex-col items-center px-9 gap-8 font-poppins font-medium text-font-color"}>
							<input
								type={"text"}
								className='w-[100%] bg-white lg:py-4 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500'
								placeholder={"Name"}
								value = {name}
								onChange = {(e)=>{setName(e.target.value)}}
							></input>
							<input
								type={"email"}
								className='w-[100%] bg-white lg:py-4 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500'
								placeholder={"Email"}
								value = {email}
								onChange = {(e)=>{setEmail(e.target.value)}}
							></input>
       
							<textarea
								type={"textarea"}
								className='w-[100%] lg:h-[200px] h-[150px] bg-white lg:py-4 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 resize-none'
								placeholder={"Message"}
								value = {message}
								onChange = {(e)=>{setMessage(e.target.value)}}
							></textarea>

                            <Button className={'mb-16'} loading = {loading} onClick = {(e) => sendMessage(e)}>Send Message</Button>
						</Flex>
					</form>
				</div>
			</Flex>
		</Container>
	)
}

export default ContactCard
