import React from "react"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { TiInfoOutline } from "react-icons/ti";
import { MdCancel } from "react-icons/md";

const SignUpForm = () => {
	const navigation = useNavigate()

	axios.defaults.withCredentials = true

	let [name, setName] = useState("")
	let [email, setEmail] = useState("")
	let [aasbId, setAasbId] = useState("")
	let [password, setPassword] = useState("")
	let [confirmPassword, setConfirmPassword] = useState("")

	let [idError, setIdError] = useState(false)
	let [accountExist, setAccountExist] = useState(false)

	let sendUserData = (e) => {
		// e.preventDefault()

		axios
			.post("http://localhost:3000/api/v1/auth/findMemberByAASBId", {
				AASBmembershipId: aasbId,
			})
			.then((data) => {
				console.log(data.data.found)
				if (data.data.found == "true" && data.data.accountState == "False") {
					axios
						.post("http://localhost:3000/api/v1/auth/signup", {
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
							navigation("/login", { replace: false })
						})
						.catch((err) => {
							console.log(err)
						})
				} else {
					setName("")
					setEmail("")
					setAasbId("")
					setPassword("")
					setConfirmPassword("")
					if (data.data.accountState == "True") {
						setAccountExist(true)
						setIdError(false)
					} else if (data.data.found == "false") {
						setIdError("Id does not exist.")
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
			<Flex className={`fixed z-20 ${accountExist ? 'top-3 opacity-1' : 'top-[-120%] opacity-0'} left-1/2 -translate-x-1/2 items-center bg-red-200 p-4 w-[40%] rounded-lg justify-between duration-500`}>
				<Flex className={'flex items-center gap-3 text-red-700'}>

				<TiInfoOutline className={'w-5 h-5'}/>
				<span className=" font-poppins font-medium">Error! An account already exists with this Id</span>
				</Flex>
				<MdCancel className={'text-red-700 w-5 h-5 cursor-pointer'} onClick = {()=>{setAccountExist(false)
				}}/>
			</Flex>
			

			<div className='lg:mt-11 lg:w-[40%] max-w-[400px] mt-40 bg-[#E7ECF1] lg:my-20 my-40 rounded-2xl mx-auto shadow-around shadow-black/60 relative overflow-haasbIdden'>
				<form>
					<Flex className={"flex flex-col items-center px-6 gap-7"}>
						<h3 className='mx-auto mt-7 font-poppins font-bold text-darknest_blue text-3xl'>
							Sign Up
						</h3>
						<input
							type={"text"}
							className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 font-poppins font-regular text-sm'
							placeholder={"Username"}
							value={name}
							onChange={nameInput}
						></input>
						<input
							type={"email"}
							className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 font-poppins font-regular text-sm'
							placeholder={"Email"}
							value={email}
							onChange={emailInput}
						></input>
						<div className='relative w-full'>
							<input
								type={"text"}
								className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 font-poppins font-regular text-sm'
								placeholder={"AASB membership aasbId"}
								value={aasbId}
								onChange={aasbIdInput}
							></input>
							<span className='absolute bottom-[-18px] left-3 text-red-500 font-poppins font-semibold text-[12px]'>
								{idError}
							</span>
						</div>
						<input
							type={"password"}
							className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 font-poppins font-regular text-sm'
							placeholder={"Password"}
							value={password}
							onChange={passwordInput}
						></input>
						<input
							type={"password"}
							className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 font-poppins font-regular text-sm'
							placeholder={"Confirm Password"}
							value={confirmPassword}
							onChange={conformPasswordInput}
						></input>

						<Button className={"mb-10"} onClick={sendUserData}>
							Sign Up
						</Button>
					</Flex>
				</form>
				<Image
					src={"images/ContactDesign.png"}
					alt={"Place Image"}
					className={"absolute bottom-[-20px] right-14 w-[30%]"}
				></Image>
			</div>
		</Container>
	)
}

export default SignUpForm
