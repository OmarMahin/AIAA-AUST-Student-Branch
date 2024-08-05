import React from "react"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const OTP_Form = ({ user_id }) => {
	axios.defaults.withCredentials = true

	const navigator = useNavigate()

	const [otp, setOtp] = useState("")
	const [otpError, setOtpError] = useState(false)
	const [loading, setLoading] = useState(false)

	let sendOTP = (e) => {

		e.preventDefault()

		if (!otp) {
			setOtpError("Please input your otp.")
			return
		}

		setOtpError("")
		setLoading(true)

		axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/verification/verifyOTP`, {
				id: user_id,
				otp,
			})
			.then((response) => {

				if (response.status == '200'){
					const data = response.data

					if (data.success) {
						navigator(`/password-change/${data.data.pageLink}`)
					}
					else{
						toast.error(data.message)
					}

					setLoading(false)
				}
				
			})
			.catch((err) => {
				setLoading(false)
				console.log(err)
			})
	}

	return (
		<Container>
			<div className='lg:mt-11 lg:w-[40%] my-40 bg-[#E7ECF1] rounded-2xl mx-auto shadow-around shadow-black/60 relative overflow-hidden'>
				<form className='relative z-10' key={'direct-otp-form'}>
					<Flex className={"flex flex-col items-center px-6 gap-6"}>
						<p className='mx-auto mt-7 font-poppins font-bold text-darknest_blue text-lg'>
							Your OTP
						</p>
						<div className='relative w-full'>
							<input
								type={"text"}
								className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 font-poppins font-regular text-sm'
								placeholder={"OTP"}
								value={otp}
								onChange={(e)=>setOtp(e.target.value)}
							></input>
							<span className='absolute bottom-[-18px] left-3 text-red-500 font-poppins font-semibold text-[12px]'>
								{otpError}
							</span>
						</div>

						<Button className={"mb-10"} onClick={sendOTP} loading={loading}>
							{"Confirm OTP"}
						</Button>
					</Flex>
				</form>
				<Image
					src={"/images/ContactDesign.png"}
					alt={"Place Image"}
					className={"absolute bottom-[-20px] right-14 w-[30%]"}
				></Image>
			</div>
			
		</Container>
	)
}

export default OTP_Form
