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
import { useRef } from "react"

const Navbar = () => {
	let [state, setState] = useState(false)
	let [navShadow, setNavShadow] = useState(false)
	let navref = useRef()

	let changeState = () => {
		setState(!state)
		setNavShadow(false)
	}

	useEffect(() => {
		function checkWindowSize() {
			if (window.innerWidth < 1024) {
				setState(false)
			} else {
				setState(true)
			}
		}
		checkWindowSize()
		window.addEventListener("resize", checkWindowSize)
		document.addEventListener("touchstart", (e) => {
			if (navref) {
				if (!navref.current.contains(e.target)) {
					setState(false)
					if (window.scrollY != 0){
						setNavShadow(true)
					}
				}
			}
		})

		document.addEventListener("click", (e) => {
			if (navref) {
				if (!navref.current.contains(e.target)) {
					setState(false)
					if (window.scrollY != 0){
						setNavShadow(true)
					}
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
					state ? "bg-black/50 z-40 fixed" : "bg-transparent z-0 absolute"
				} duration-300`}
			></div>
			<nav ref={navref}>
				<div
					className={`w-full lg:bg-darker_blue ${
						state ? "bg-transparent" : "bg-darker_blue"
					} top-[0%] z-50 lg:static lg:shadow-none ${navShadow ? 'shadow-xl' : 'shadow-none'} fixed duration-300`}
				>
					<Container>
						<Flex className='lg:py-6 py-5 justify-between items-center flex'>
							<Image src={"images/Logo.png"} className={"lg:w-24 md:w-20 w-16"}></Image>
							<FaBars
								className={`lg:hidden absolute top-[50%] translate-y-[-50%] right-5  hover:cursor-pointer z-20 ${
									state ? "text-transparent" : "text-white"
								} duration-150 md:w-6 md:h-6 w-5 h-5`}
								onClick={changeState}
							/>
							<List
								className={`lg:flex-row flex-col flex gap-7 lg:relative absolute lg:bg-darker_blue bg-darker_blue lg:w-full lg:h-full h-[100vh] top-0 lg:left-0 ${
									state ? "left-[0%]" : "left-[-100%]"
								} lg:duration-0 duration-300 w-[70%] max-w-[300px] lg:max-w-[1000px] lg:shadow-none shadow-2xl shadow-black/70 lg:pt-0 lg:pl-0 pt-12 px-4`}
							>
								<IoMdCloseCircleOutline
									className='lg:hidden absolute top-4 right-4 text-white w-6 h-6 hover:cursor-pointer z-50'
									onClick={changeState}
								/>
								<ListItem
									className=' text-white font-poppins font-medium text-[15px] relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-white after:bg-slate-300 lg:after:bottom-[-5px]
                         after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 '
								>
									<Link to='/'>Home</Link>
								</ListItem>
								<ListItem
									className=' text-white font-poppins font-medium text-[15px] relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-white after:bg-slate-300 lg:after:bottom-[-5px]
                         after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150'
								>
									<Link to='/about_us'>About Us</Link>
								</ListItem>
								<ListItem
									className=' text-white font-poppins font-medium text-[15px] relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-white after:bg-slate-300 lg:after:bottom-[-5px]
                         after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150'
								>
									<Link to='/'>Our Team</Link>
								</ListItem>
								<ListItem
									className=' text-white font-poppins font-medium text-[15px] relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-white after:bg-slate-300 lg:after:bottom-[-5px]
                         after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 '
								>
									<Link to='/'>Our Activites</Link>
								</ListItem>
								<ListItem
									className=' text-white font-poppins font-medium text-[15px] relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-white after:bg-slate-300 lg:after:bottom-[-5px]
                         after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 '
								>
									<Link to='/'>Contact Us</Link>
								</ListItem>
							</List>
						</Flex>
					</Container>
				</div>
			</nav>
		</>
	)
}

export default Navbar
