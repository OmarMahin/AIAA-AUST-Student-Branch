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
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { toast } from "react-toastify"

const LoginForm = () => {
	axios.defaults.withCredentials = true

	let [email, setEmail] = useState("")
	let [password, setPassword] = useState("")

	let [showPassword, setShowPassword] = useState(false)

	let [emailError, setEmailError] = useState(false)
	let [passwordError, setPasswordError] = useState(false)

	let [loading, setLoading] = useState(false)

	let navigation = useNavigate()

	function setErrorsToFalse(){
		setEmailError(false)
		setPasswordError(false)
	}

	let sendUserData = (e) => {

		e.preventDefault()

		if (!email) {
			setEmailError("Please input your email address.")
			setPasswordError("")
			return
		}

		if (!validateEmail(email)) {
			setEmailError("Please input a valid email address.")
			setPasswordError("")
			return
		}

		if (!password) {
			setEmailError("")
			setPasswordError("Please input your password")
			return
		}

		setErrorsToFalse()
		setLoading(true)

		axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/auth/login`, {
				email,
				password,
			})
			.then((response) => {
				setLoading(false)
				if (response.status == '200'){
					const data = response.data

					if (data.success){
						window.location.pathname = "/"
					}
					else{
						toast.error(data.message)
						console.log(data.data.error)
					}
				}
			})
			.catch((err) => {
				setLoading(false)
				console.log(err)
			})
	}

	let emailInput = (e) => {
		setEmail(e.target.value)
	}
	let passwordInput = (e) => {
		setPassword(e.target.value)
	}

	return (
		<Container>

			<div className='lg:mt-11 lg:w-[40%] mt-40 bg-[#E7ECF1] rounded-2xl mx-auto shadow-around shadow-black/60 relative overflow-hidden'>
				<form>
					<Flex className={"flex flex-col items-center px-6 gap-6"}>
						<h3 className='mx-auto mt-7 font-poppins font-bold text-darknest_blue text-3xl'>
							Login
						</h3>
						<div className='relative w-full font-poppins font-medium text-sm text-font-color'>
							<input
								type={"text"}
								className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-lg border-2 border-slate-500 '
								placeholder={"Email"}
								value={email}
								onChange={emailInput}
							></input>
							<span className='absolute bottom-[-18px] left-3 text-red-500 font-poppins font-semibold text-[12px]'>
								{emailError}
							</span>
						</div>

						<div className='relative w-full font-poppins font-medium text-sm text-font-color'>
							<input
								type={showPassword ? "text" : "password"}
								className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-lg border-2 border-slate-500 '
								placeholder={"Password"}
								value={password}
								onChange={passwordInput}
							></input>
							<span className='absolute bottom-[-18px] left-3 text-red-500 font-poppins font-semibold text-[12px]'>
								{passwordError}
							</span>

							{password && (
								<div
									className='absolute top-1/2 right-5 -translate-y-1/2 text-gray-500 hover:cursor-pointer'
									onClick={() => {
										setShowPassword(!showPassword)
									}}
								>
									{showPassword ? <FaEyeSlash /> : <FaEye />}
								</div>
							)}
						</div>

						<Button className={"mb-10"} onClick={sendUserData} loading = {loading}>
							Login
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
				<Link to={'/forget-password'} className='font-poppins font-bold text-[14px] text-darknest_blue'>
					Forget Password?
				</Link>
			</Flex>
		</Container>
	)
}

export default LoginForm
