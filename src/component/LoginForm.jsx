import React from "react"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"
import axios from "axios"
import { useState } from "react"

const LoginForm = () => {
	axios.defaults.withCredentials = true

	let [email, setEmail] = useState("")
	let [password, setPassword] = useState("")

	let sendUserData = (e) => {
		// e.preventDefault()

		axios
			.post("http://localhost:3000/api/v1/auth/login", {
				email,
				password,
			})
			.then((data) => {
				setEmail("")
				setPassword("")
				// navigation("/login",{replace: false})
				console.log(data)
			})
			.catch((err) => {
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
			<div className='lg:mt-11 lg:w-[40%] mt-6 bg-[#E7ECF1] lg:my-20 my-40 rounded-2xl mx-auto shadow-around shadow-black/60 relative overflow-hidden'>
				<form>
					<Flex className={"flex flex-col items-center px-6 gap-6"}>
						<h3 className='mx-auto mt-7 font-poppins font-bold text-darknest_blue text-3xl'>
							Login
						</h3>

						<input
							type={"text"}
							className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 font-poppins font-regular text-sm'
							placeholder={"Email"}
							value={email}
							onChange={emailInput}
						></input>
						<input
							type={"password"}
							className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 font-poppins font-regular text-sm'
							placeholder={"Password"}
							value={password}
							onChange={passwordInput}
						></input>

						<Button className={"mb-10"} onClick={sendUserData}>
							Login
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

export default LoginForm
