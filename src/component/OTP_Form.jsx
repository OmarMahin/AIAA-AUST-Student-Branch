import React from "react"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const OTP_Form = ({ user_email }) => {
	axios.defaults.withCredentials = true

	const navigator = useNavigate()

	let [otp, setOtp] = useState("")
	let [otpError, setOtpError] = useState(false)

	let sendOTP = (e) => {
		if (!otp) {
			setOtpError("Please input your otp.")
			return
		}

		axios
			.post("http://localhost:3000/api/v1/auth/verifyOTP", {
				email: user_email,
				otp,
			})
			.then((data) => {
				setOtpError("")
				if (data.data.error && data.data.otp_valid == false) {
					setOtpError(data.data.error)
					return
				}
				navigator(`/password-change/${data.data.pageLink}`)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	let otpInput = (e) => {
		setOtp(e.target.value)
	}

	return (
		<Container>
			<div className='lg:mt-11 lg:w-[40%] my-40 bg-[#E7ECF1] rounded-2xl mx-auto shadow-around shadow-black/60 relative overflow-hidden'>
				<form className='relative z-10'>
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
								onChange={otpInput}
							></input>
							<span className='absolute bottom-[-18px] left-3 text-red-500 font-poppins font-semibold text-[12px]'>
								{otpError}
							</span>
						</div>

						<Button className={"mb-10"} onClick={sendOTP}>
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
