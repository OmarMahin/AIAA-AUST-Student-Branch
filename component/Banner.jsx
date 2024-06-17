import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import AnimatePage from "./AnimatePage"
import Container from "./Container"
import Image from "./Image"

const Banner = () => {
	let [smallerDisplay, setSmallerDisplay] = useState(false)

	let normal_banner = "Banner.png"
	let banner_for_phone = "Banner_For_Phone.png"

	useEffect(() => {
		function checkWindowSize() {
			if (window.innerWidth < 768) {
				setSmallerDisplay(true)
			} else {
				setSmallerDisplay(false)
			}
		}
		checkWindowSize()
		window.addEventListener("resize", checkWindowSize)
	}, [])
	return (
		<div className=' bg-darker_blue lg:pt-0 pt-24 w-full'>
			<AnimatePage>
				<Container>
					<Image
						src={`images/${smallerDisplay ? banner_for_phone : normal_banner}`}
						className='h-full'
						alt={"Banner Image"}
					></Image>
				</Container>
			</AnimatePage>
			<div className=' bg-gradient-to-b from-darker_blue via-[#264A79] via-[35%] to-[#446A9C] h-10'></div>
			<div className=' bg-gradient-to-b from-[#446A9C] to-white h-20'></div>
		</div>
	)
}

export default Banner
