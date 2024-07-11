import React from "react"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { TiInfoOutline } from "react-icons/ti"
import { MdCancel } from "react-icons/md"
import validateEmail from "../helperFunctions/ValidateEmail"
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"
import { toast } from "react-toastify"



const SignUpForm = () => {
	const navigation = useNavigate()

	axios.defaults.withCredentials = true

	let [name, setName] = useState("")
	let [email, setEmail] = useState("")
	let [aasbId, setAasbId] = useState("")
	let [password, setPassword] = useState("")
	let [confirmPassword, setConfirmPassword] = useState("")

	let [showPassword, setShowPassword] = useState(false)
	let [showConfirmPassword, setShowConfirmPassword] = useState(false)

	let [idError, setIdError] = useState(false)
	let [nameError, setNameError] = useState(false)
	let [emailError, setEmailError] = useState(false)
	let [passwordError, setPasswordError] = useState(false)
	let [confirmPasswordError, setConfirmPasswordError] = useState(false)
	let [accountExist, setAccountExist] = useState(false)

	let sendUserData = (e) => {
		if (!name) {
			setIdError(false)
			setEmailError(false)
			setPasswordError(false)
			setNameError("Please provide a username.")
			setConfirmPasswordError(false)
			return
		}
		if (!email) {
			setIdError(false)
			setNameError(false)
			setPasswordError(false)
			setEmailError("Please provide a email.")
			setConfirmPasswordError(false)
			return
		}
		if (!validateEmail(email)) {
			setIdError(false)
			setNameError(false)
			setPasswordError(false)
			setEmailError("Email address not valid.")
			setConfirmPasswordError(false)
			return
		}
		if (!aasbId) {
			setIdError("Please provide AASB id.")
			setNameError(false)
			setPasswordError(false)
			setEmailError(false)
			setConfirmPasswordError(false)
			return
		}
		if (!password) {
			setIdError(false)
			setNameError(false)
			setPasswordError("Please provide your password.")
			setEmailError(false)
			setConfirmPasswordError(false)
			return
		}
		if (!confirmPassword) {
			setIdError(false)
			setNameError(false)
			setConfirmPasswordError("Please confirm your password.")
			setPasswordError(false)
			setEmailError(false)
			return
		}
		if (confirmPassword != password) {
			setIdError(false)
			setNameError(false)
			setPasswordError(false)
			setConfirmPasswordError("Password does not match.")
			setConfirmPassword("")
			setEmailError(false)
			return
		}

		axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/auth/findMemberByAASBId`, {
				AASBmembershipId: aasbId,
			})
			.then((data) => {
				if (data.data.found == "true" && data.data.accountState == "False") {	
					axios
						.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/auth/signup`, {
							name,
							email,
							AASBmembershipId: aasbId,
							password,
						})
						.then((data) => {
							setName("")
							setEmail("")
							setAasbId("")
							setPassword("")
							setConfirmPassword("")
							setAccountExist(false)
							setIdError("")
							toast.success("Account created successfully.")
							navigation("/login", { replace: false })
						})
						.catch((err) => {
							console.log(err)
						})
				} else {
					if (data.data.accountState == "True") {
						setEmailError(false)
						setNameError(false)
						setPasswordError(false)
						setConfirmPasswordError(false)
						setIdError(false)
						setName("")
						setEmail("")
						setAasbId("")
						setPassword("")
						setConfirmPassword("")
						toast.error("Error! An account already exists with these credentials.")
					} else if (data.data.found == "false") {
						setIdError("Invalid Id.")
						setEmailError(false)
						setNameError(false)
						setPasswordError(false)
						setAccountExist(false)
					}
				}
			})
	}

	let nameInput = (e) => {
		setName(e.target.value)
	}
	let emailInput = (e) => {
		setEmail(e.target.value)
	}
	let aasbIdInput = (e) => {
		setAasbId(e.target.value)
	}
	let passwordInput = (e) => {
		setPassword(e.target.value)
	}
	let conformPasswordInput = (e) => {
		setConfirmPassword(e.target.value)
	}

	return (
		<Container>

			<div className='lg:mt-11 lg:w-[40%] max-w-[400px] mt-40 bg-[#E7ECF1] rounded-2xl mx-auto shadow-around shadow-black/60 relative overflow-haasbIdden'>
				<form>
					<Flex className={"flex flex-col items-center px-6 gap-7"}>
						<h3 className='mx-auto mt-7 font-poppins font-bold text-darknest_blue text-3xl'>
							Sign Up
						</h3>
						<div className='relative w-full'>
							<input
								type={"text"}
								className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 font-poppins font-regular text-sm'
								placeholder={"Username"}
								value={name}
								onChange={nameInput}
							></input>
							<span className='absolute bottom-[-18px] left-3 text-red-500 font-poppins font-semibold text-[12px]'>
								{nameError}
							</span>
						</div>
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
						<div className='relative w-full'>
							<input
								type={"text"}
								className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 font-poppins font-regular text-sm'
								placeholder={"AASB membership Id"}
								value={aasbId}
								onChange={aasbIdInput}
							></input>
							<span className='absolute bottom-[-18px] left-3 text-red-500 font-poppins font-semibold text-[12px]'>
								{idError}
							</span>
						</div>
						<div className='relative w-full'>
							<input
								type={showPassword ? "text" : "password"}
								className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 font-poppins font-regular text-sm'
								placeholder={"Password"}
								value={password}
								onChange={passwordInput}
							></input>
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
							<span className='absolute bottom-[-18px] left-3 text-red-500 font-poppins font-semibold text-[12px]'>
								{passwordError}
							</span>
						</div>
						<div className='relative w-full'>
							<input
								type={showConfirmPassword ? "text" : "password"}
								className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 font-poppins font-regular text-sm'
								placeholder={"Confirm Password"}
								value={confirmPassword}
								onChange={conformPasswordInput}
							></input>
							{confirmPassword && (
								<div
									className='absolute top-1/2 right-5 -translate-y-1/2 text-gray-500 hover:cursor-pointer'
									onClick={() => {
										setShowConfirmPassword(!showConfirmPassword)
									}}
								>
									{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
								</div>
							)}
							<span className='absolute bottom-[-18px] left-3 text-red-500 font-poppins font-semibold text-[12px]'>
								{confirmPasswordError}
							</span>
						</div>

						<Button className={"mb-10 relative z-10"} onClick={sendUserData}>
							Sign Up
						</Button>
					</Flex>
				</form>

				<Image
					src={"/images/ContactDesign.png"}
					alt={"Place Image"}
					className={"absolute bottom-[-20px] right-14 w-[30%] z-[0]"}
				></Image>
			</div>
			<Flex className={"gap-1 mb-40 mx-auto w-[250px] mt-10 items-center"}>
				<span className='font-poppins font-semibold text-[14px] text-light-blue'>
					Already have an account?{" "}
				</span>
				<Link to={"/login"} className='font-poppins font-bold text-[14px] text-darknest_blue'>
					Login
				</Link>
			</Flex>
		</Container>
	)
}

export default SignUpForm
