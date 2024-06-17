import React from 'react'
import Button from './Button'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'

const SignUpForm = () => {
  return (
    <Container>
			<div className='lg:mt-11 lg:w-[40%] mt-6 bg-[#E7ECF1] lg:my-20 my-40 rounded-2xl mx-auto shadow-around shadow-black/60 relative overflow-hidden'>
				<form>
					<Flex className={"flex flex-col items-center px-6 gap-8"}>
						<h3 className='mx-auto mt-7 font-poppins font-bold text-darknest_blue text-3xl'>
							Sign Up
						</h3>
						<input
							type={"text"}
							className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500'
							placeholder={"Username"}
						></input>
						<input
							type={"text"}
							className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500'
							placeholder={"Email"}
						></input>
						<input
							type={"text"}
							className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500'
							placeholder={"AIAA membership ID"}
						></input>
						<input
							type={"password"}
							className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500'
							placeholder={"Password"}
						></input>
						<input
							type={"password"}
							className='w-[100%] bg-white lg:py-3 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500'
							placeholder={"Confirm Password"}
						></input>

						<Button className={"mb-10"}>Sign Up</Button>
					</Flex>
				</form>
                <Image src={'images/ContactDesign.png'} alt = {'Place Image'} className = {"absolute bottom-[-20px] right-14 w-[30%]"}></Image>
			</div>
		</Container>
        
  )
}

export default SignUpForm