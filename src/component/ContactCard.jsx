import React from "react"
import { FaPhoneAlt } from "react-icons/fa"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"
import SocialMediaIcons from "./SocialMediaIcons"

const ContactCard = () => {
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
						<p className='font-poppins font-medium lg:text-lg text-base'>
							Have a query? Or want to give us a feedback? Then, please feel free to contact
							us using the form or the social media and phone number given below.
						</p>
						<SocialMediaIcons className={"text-light-blue mt-6"}></SocialMediaIcons>
						<Flex className={"gap-3 items-center flex mt-6"}>
							<FaPhoneAlt className={"text-light-blue h-5 w-6"} />
							<span className='font-poppins font-semibold text-lg text-slate-500'>
								01860-718012
							</span>
						</Flex>
					</div>
                    <Image src={'images/ContactDesign.png'} className = {'absolute lg:bottom-12 bottom-4 left-2/3 -translate-x-1/2 lg:w-[55%] w-[45%]'}></Image>
				</Flex>
				<div className='lg:w-[2px] w-[80%] lg:h-auto h-[2px] bg-light-blue/40 lg:my-10 mx-auto'></div>
				<div className='lg:w-[49%] lg:mt-11 mt-6'>
					<form>
						<Flex className={"flex flex-col items-center px-9 gap-8"}>
							<input
								type={"text"}
								className='w-[100%] bg-white lg:py-4 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500'
								placeholder={"Name"}
							></input>
							<input
								type={"email"}
								className='w-[100%] bg-white lg:py-4 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500'
								placeholder={"Email"}
							></input>
       
							<textarea
								type={"textarea"}
								className='w-[100%] lg:h-[200px] h-[150px] bg-white lg:py-4 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 resize-none'
								placeholder={"Message"}
							></textarea>

                            <Button className={'mb-16'}>Send Message</Button>
						</Flex>
					</form>
				</div>
			</Flex>
		</Container>
	)
}

export default ContactCard
