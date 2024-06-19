import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"
import List from "./List"
import ListItem from "./ListItem"
import { IoMdCloseCircleOutline } from "react-icons/io"
import { FaBars } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"
import { useRef } from "react"
import ScrollToTopButton from "./ScrollToTopButton"

const Navbar = () => {
	let [state, setState] = useState(false)
	let [accountList, setAccountList] = useState(false)
	let [navShadow, setNavShadow] = useState(false)
	let navref = useRef()
	let accountref = useRef()

	let changeState = () => {
		setState(!state)
		setNavShadow(false)
	}

	let linkChangeState = () => {
		if (window.innerWidth < 1024) {
			setState(!state)
			setNavShadow(false)
		}
	}

	let changeAccountList = () => {
		setAccountList(!accountList)
	}

	useEffect(() => {
		function checkWindowSize() {
			if (window.innerWidth < 1024) {
				setState(false)
			} else {
				setState(false)
			}
		}
		checkWindowSize()
		window.addEventListener("resize", checkWindowSize)
		document.addEventListener("touchstart", (e) => {
			if (navref) {
				if (!navref.current.contains(e.target)) {
					setState(false)
					if (window.scrollY != 0) {
						setNavShadow(true)
					}
				}
			}
		})

		document.addEventListener("click", (e) => {
			if (navref != null) {
				if (!navref.current.contains(e.target)) {
					setState(false)
					if (window.scrollY != 0) {
						setNavShadow(true)
					}
				}
			}
			if (accountref != null) {
				if (!accountref.current.contains(e.target)) {
					setAccountList(false)
				}
			}
		})
	}, [])

	window.addEventListener("scroll", () => {
		if (window.scrollY == 0 || state) {
			setNavShadow(false)
		} else {
			setNavShadow(true)
		}
	})

	return (
		<>
			<div
				className={`lg:hidden w-[100vw] h-[100vh] top-0 left-0  ${
					state ? "bg-black/50 z-40 fixed" : "bg-transparent z-[-1] absolute"
				} duration-300`}
			></div>
			<nav ref={navref}>
				<div
					className={`w-full lg:bg-darker_blue ${
						state ? "bg-transparent" : "bg-darker_blue"
					} top-[0%] z-50 lg:static lg:shadow-none ${
						navShadow ? "shadow-xl" : "shadow-none"
					} fixed duration-300`}
				>
					<ScrollToTopButton navmenu={state}></ScrollToTopButton>
					<Container>
						<Flex className='lg:py-6 py-5 justify-between items-center flex'>
							<Link to={"/"}>
								<Image src={"images/Logo.png"} className={"lg:w-24 md:w-20 w-16"}></Image>
							</Link>
							<FaBars
								className={`lg:hidden absolute top-[50%] translate-y-[-50%] right-5  hover:cursor-pointer z-20 ${
									state ? "text-transparent" : "text-white"
								} duration-150 md:w-6 md:h-6 w-5 h-5`}
								onClick={changeState}
							/>
							<List
								className={`lg:flex-row flex-col flex gap-7 lg:relative absolute lg:bg-darker_blue bg-darker_blue lg:w-full lg:h-full h-[100vh] top-0 lg:left-0 lg:items-center ${
									state ? "left-[0%]" : "left-[-100%]"
								} lg:duration-0 duration-500 w-[70%] max-w-[300px] lg:max-w-[1000px] lg:shadow-none shadow-2xl shadow-black/70 lg:pt-0 lg:pl-0 pt-12 px-5`}
							>
								<IoMdCloseCircleOutline
									className='lg:hidden absolute top-4 right-4 text-white w-6 h-6 hover:cursor-pointer z-50'
									onClick={changeState}
								/>
								<ListItem
									className=' text-white font-poppins font-medium text-[15px] relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-white after:bg-[#92A2B8] lg:after:bottom-[-5px]
                         after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2'
								>
									<Link
										to='/'
										className='hover:font-semibold lg:hover:font-medium'
										onClick={linkChangeState}
									>
										Home
									</Link>
								</ListItem>
								<ListItem
									className=' text-white font-poppins font-medium text-[15px] relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-white after:bg-[#92A2B8] lg:after:bottom-[-5px]
									after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2'
								>
									<Link
										to='/about'
										className='hover:font-semibold lg:hover:font-medium'
										onClick={linkChangeState}
									>
										About Us
									</Link>
								</ListItem>
								<ListItem
									className=' text-white font-poppins font-medium text-[15px] relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-white after:bg-[#92A2B8] lg:after:bottom-[-5px]
									after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2'
								>
									<Link
										to='/team'
										className='hover:font-semibold lg:hover:font-medium'
										onClick={linkChangeState}
									>
										Team
									</Link>
								</ListItem>
								<ListItem
									className=' text-white font-poppins font-medium text-[15px] relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-white after:bg-[#92A2B8] lg:after:bottom-[-5px]
									after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2'
								>
									<Link
										to='/activites'
										className='hover:font-semibold lg:hover:font-medium'
										onClick={linkChangeState}
									>
										Activites
									</Link>
								</ListItem>
								<ListItem
									className=' text-white font-poppins font-medium text-[15px] relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-white after:bg-[#92A2B8] lg:after:bottom-[-5px]
									after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2'
								>
									<Link
										to='/contact'
										className='hover:font-semibold lg:hover:font-medium'
										onClick={linkChangeState}
									>
										Contact Us
									</Link>
								</ListItem>
								<div ref={accountref}>
									<ListItem
										className={`flex flex-col lg:flex-row font-poppins font-medium text-[15px] hover:cursor-pointer relative`}
									>
										<Flex
											className={`lg:border-2 lg:border-white lg:py-1 py-2 lg:px-3 lg:rounded-3xl text-white ${
												accountList ? "lg:text-light-blue lg:bg-white" : "lg:text-white lg:bg-none"
											} duration-300 flex items-center w-full justify-between relative lg:after:content-none after:absolute after:w-full after:bottom-[-13px] after:h-[1px] lg:after:bg-white after:bg-[#92A2B8]`}
											onClick={changeAccountList}
										>
											<h3>Account</h3>
											<FaPlus className='mr-4 lg:hidden' />
										</Flex>
										<List
											className={`flex flex-col mt-[13px] lg:mt-0 absolute right-0 translate-y-[100%] lg:w-[180px] w-full lg:bg-[#d9e3ec] lg:rounded-md lg:shadow-xl lg:shadow-black/10 pl-6 lg:z-20 lg:border-[1px] lg:border-[#aeb1b563]
											${accountList ? "fixed bottom-[-20px] opacity-1" : "bottom-[0px] opacity-0"} duration-300 cursor-default`}
										>
											<ListItem
												className={
													"font-poppins lg:font-semibold font-medium lg:text-light-blue py-4 text-[15px] border-b-[1px] border-[#92A2B8] text-white"
												}
												onClick = {linkChangeState}
											>
												<Link to={"/signup"} onClick={changeAccountList}>
													Sign Up
												</Link>
											</ListItem>
											<ListItem
												className={
													"font-poppins lg:font-semibold font-medium lg:text-light-blue py-4 text-[15px] border-b-[1px] border-[#92A2B8] text-white"}
												onClick = {linkChangeState}
											>
												<Link to={"/login"} onClick={changeAccountList}>
													Login
												</Link>
											</ListItem>
										</List>
									</ListItem>
								</div>
								
							</List>
						</Flex>
					</Container>
				</div>
			</nav>
		</>
	)
}

export default Navbar
