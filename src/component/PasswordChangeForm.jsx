import React from "react"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"
import axios from "axios"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordChangeForm = ({user_id}) => {
	axios.defaults.withCredentials = true

	let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")
	let [showPassword, setShowPassword] = useState(false)
	let [showConfirmPassword, setShowConfirmPassword] = useState(false)
	let [passwordError, setPasswordError] = useState(false)
	let [confirmPasswordError, setConfirmPasswordError] = useState(false)

	let [loading, setLoading] = useState(false)

	let navigation = useNavigate()

	function setErrorsToFalse(){
		setPasswordError(false)
		setConfirmPasswordError(false)
	}

	let sendUserData = (e) => {

		e.preventDefault()

		if (!password) {
			
			setErrorsToFalse()
			setPasswordError("Please provide your password.")
			return
		}
		if (!confirmPassword) {

			setErrorsToFalse()
			setConfirmPasswordError("Please confirm your password.")
			return
		}
		if (confirmPassword != password) {

			setErrorsToFalse()
			setConfirmPasswordError("Password does not match.")
			return
		}

		setErrorsToFalse()
		setLoading(true)

		axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/auth/changePassword`, {
				id: user_id,
				password,
			})
			.then((response) => {

				if (response.status == '200'){
					const data = response.data
					if (data.success){
						toast.success(data.message)
						navigation('/myaccount')
					}
					else{
						toast.error(data.message)
						console.log(data.data.error)
					}
				}
				setLoading(false)
			})
			.catch((err) => {
				console.log(err)
				setLoading(false)
			})
	}

	let passwordInput = (e) => {
		setPassword(e.target.value)
	}
    let conformPasswordInput = (e) => {
		setConfirmPassword(e.target.value)
	}


	return (
		<Container>

			<div className='lg:mt-11 lg:w-[40%] my-40 bg-[#E7ECF1] rounded-2xl mx-auto shadow-around shadow-black/60 relative overflow-hidden'>
				<form className="relative z-10">
					<Flex className={"flex flex-col items-center px-6 gap-6"}>
						<h3 className='mx-auto mt-7 font-poppins font-bold text-darknest_blue text-3xl'>
							Password Change
						</h3>
						<div className='relative w-full'>
							<input
								type={showPassword ? "text" : "password"}
								className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-lg border-2 border-slate-500 font-poppins font-regular text-sm'
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
								className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-lg border-2 border-slate-500 font-poppins font-regular text-sm'
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

						<Button className={"mb-10"} onClick={sendUserData} loading = {loading}>
							Change Password
						</Button>
					</Flex>
				</form>
				<Image
					src={"/images/ContactDesign.png"}
					alt={"Place Image"}
					className={"absolute bottom-[-20px] right-4 w-[30%]"}
				></Image>
			</div>
			
		</Container>
	)
}

export default PasswordChangeForm
