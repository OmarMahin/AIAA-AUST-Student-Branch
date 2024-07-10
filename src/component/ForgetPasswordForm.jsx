import React from "react"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import validateEmail from "../helperFunctions/ValidateEmail"
import { TiInfoOutline } from "react-icons/ti"
import { MdCancel } from "react-icons/md"

const ForgetPasswordForm = () => {
	axios.defaults.withCredentials = true

	const navigator = useNavigate()

	let [email, setEmail] = useState("")
	let [otp, setOtp] = useState("")
	let [otpSend, setOtpSend] = useState(false)

	let [emailError, setEmailError] = useState(false)
	let [otpError, setOtpError] = useState(false)
	let [accountExist, setAccountExist] = useState(false)

	let sendOTP = (e) => {
		if (!email) {
			setEmailError("Please input your email address.")
			return
		}

		if (!validateEmail(email)) {
			setEmailError("Please input a valid email address.")
			return
		}

		if (!otpSend) {
			console.log("otp Sent")
			axios
				.post("http://localhost:3000/api/v1/auth/sendOTP", {
					email,
				})
				.then((data) => {
					setEmailError("")
					if (data.data.error) {
						setEmail("")
						setEmailError(data.data.error)
					} else {
						setOtpSend(true)
					}
				})
				.catch((err) => {
					console.log(err)
				})
		} else if (otpSend) {
			axios
				.post("http://localhost:3000/api/v1/auth/verifyOTP", {
					email,
					otp,
				})
				.then((data) => {
					setEmailError("")
					setOtpError("")
					console.log(data)
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
	}

	let emailInput = (e) => {
		setEmail(e.target.value)
	}

	let otpInput = (e) => {
		setOtp(e.target.value)
	}

	return (
		<Container>
			<Flex
				className={`fixed z-20 ${
					accountExist ? "lg:top-3 top-24 opacity-1" : "top-[-120%] opacity-0"
				} left-1/2 -translate-x-1/2 items-center bg-red-200 lg:p-4 p-2 lg:w-[43%] w-[90%] rounded-lg justify-between ease-in-out duration-700 flex`}
			>
				<Flex className={"flex items-center gap-3 text-red-700"}>
					<TiInfoOutline className={"w-5 h-5"} />
					<span className=' font-poppins font-medium lg:text-[14px] text-[12px]'>
						Invalid Credentials! Please check your email address and password.
					</span>
				</Flex>
				<MdCancel
					className={"text-red-700 w-5 h-5 cursor-pointer"}
					onClick={() => {
						setAccountExist(false)
					}}
				/>
			</Flex>

			<div className='lg:mt-11 lg:w-[40%] mt-40 bg-[#E7ECF1] rounded-2xl mx-auto shadow-around shadow-black/60 relative overflow-hidden'>
				<form className='relative z-10'>
					<Flex className={"flex flex-col items-center px-6 gap-6"}>
						<p className='mx-auto mt-7 font-poppins font-bold text-darknest_blue text-lg'>
							Please input your email to rececive an otp
						</p>
						<div className='relative w-full'>
							<input
								type={"email"}
								className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 font-poppins font-regular text-sm'
								placeholder={"Email"}
								value={email}
								onChange={emailInput}
							></input>
							<span className='absolute bottom-[-18px] left-3 text-red-500 font-poppins font-semibold text-[12px]'>
								{emailError}
							</span>
						</div>

						<div
							className={`${
								!otpSend
									? "after:absolute after:w-full after:h-full after:bg-black after:z-10 after:left-0 after:rounded-xl after:opacity-10 hover:cursor-no-drop"
									: "cursor-auto"
							} relative w-full`}
						>
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
							{!otpSend ? "Send OTP" : "Confirm OTP"}
						</Button>
					</Flex>
				</form>
				<Image
					src={"/images/ContactDesign.png"}
					alt={"Place Image"}
					className={"absolute bottom-[-20px] right-14 w-[30%]"}
				></Image>
			</div>
			<Flex className={"items-center flex flex-col mb-20 gap-5"}>
				<Flex className={"justify-between mx-auto w-[230px] mt-10 items-center"}>
					<span className='font-poppins font-semibold text-[14px] text-light-blue'>
						Don't have an account?{" "}
					</span>
					<Link
						to={"/signup"}
						className='font-poppins font-bold text-[14px] text-darknest_blue'
					>
						Sign Up
					</Link>
				</Flex>
			</Flex>
		</Container>
	)
}

export default ForgetPasswordForm
