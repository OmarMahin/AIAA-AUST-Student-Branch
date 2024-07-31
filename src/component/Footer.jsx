import React from "react"
import { Link } from "react-router-dom"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"
import List from "./List"
import ListItem from "./ListItem"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { FaPhoneAlt } from "react-icons/fa"
import SocialMediaIcons from "./SocialMediaIcons"

const Footer = () => {
	return (
		<>
			<div className='w-full bg-darker_blue md:px-6 lg:px-0'>
				<Container>
					<Flex
						className={
							"gap-4 pt-24 pb-20 flex flex-wrap lg:flex-nowrap lg:items-start justify-evenly"
						}
					>
						<div className='lg:w-[25%] md:w-[80%] w-[60%]'>
							<Link to={"/"}>
								<Image
									src={"/images/Footer_Logo.png"}
									className='lg:w-[70%] md:w-[40%] w-[70%]  mx-auto lg:mx-0 lg:mb-0 mb-6'
								></Image>
							</Link>
						</div>
						<div className='lg:w-[25%] md:w-[30%] w-[45%]'>
							<List className={"flex-col lg:gap-6 gap-4 flex"}>
								<ListItem className={"font-poppins font-medium text-lg text-white"}>
									<Link to={"/"}>Home</Link>
								</ListItem>
								<ListItem className={"font-poppins font-medium text-lg text-white"}>
									<Link to={"/about"}>About Us</Link>
								</ListItem>
								<ListItem className={"font-poppins font-medium text-lg text-white"}>
									<Link to={"https://www.aiaa.org/"} target={"_blank"}>
										About AIAA
									</Link>
								</ListItem>
								<ListItem className={"font-poppins font-medium text-lg text-white"}>
									<Link to={"https://aust.edu/"} target={"_blank"}>
										About AUST
									</Link>
								</ListItem>
							</List>
						</div>
						<div className='lg:w-[25%] md:w-[30%] w-[30%]'>
							<List className={"flex-col lg:gap-6 gap-4 flex"}>
								<ListItem className={"font-poppins font-medium text-lg text-white"}>
									<Link to={"/committee"}>Committee</Link>
								</ListItem>
								<ListItem className={"font-poppins font-medium text-lg text-white"}>
									<Link to={"/activites"}>Activities</Link>
								</ListItem>
								<ListItem className={"font-poppins font-medium text-lg text-white"}>
									<Link to={"/blog"}>Blog</Link>
								</ListItem>
							</List>
						</div>
						<div className='lg:w-[25%] md:w-[30%] w-[60%] md:mt-0 mt-6 '>
							<List className={"flex-col lg:gap-6 gap-4 flex"}>
								<ListItem className={"font-poppins font-medium text-xl text-white"}>
									Get In Touch
								</ListItem>
								<ListItem>
									<SocialMediaIcons className={"text-white"}></SocialMediaIcons>
								</ListItem>
								<ListItem className={"font-poppins font-medium text-lg text-white"}>
									<Flex className={"gap-3 items-center flex"}>
										<a href='mailto: info.aasb@aust.edu' target={"_blank"}>
											<IoMdMail className={" h-6 w-6"} />
										</a>
										<span>info.aasb@aust.edu</span>
									</Flex>
								</ListItem>
								<ListItem className={"font-poppins font-medium text-lg text-white"}>
									<Flex className={"gap-3 items-center flex"}>
										<FaPhoneAlt className={"text-white h-5 w-6"} />
										<span>01860-718012</span>
									</Flex>
								</ListItem>
								<ListItem className={"font-poppins font-medium text-[16px] text-white"}>
									<p>
										141 & 142, Love Road, Tejgaon Industrial Area 1208 Dhaka, Dhaka
										Division, Bangladesh
									</p>
								</ListItem>
							</List>
						</div>
					</Flex>
				</Container>
			</div>
			<div className=' bg-darknest_blue py-6 w-full'>
				<Flex className={'flex items-center justify-center text-white font-poppins text-center'}><h3>&copy; 2024 AIAA AUST Student Branch. All Rights Reserved</h3></Flex>
			</div>
		</>
	)
}

export default Footer
