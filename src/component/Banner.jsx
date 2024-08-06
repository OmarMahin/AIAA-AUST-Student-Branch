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

	const mobile_img_set =
		"images/Banner/smaller_devices/Banner_For_Phone-200.png 200w, images/Banner/smaller_devices/Banner_For_Phone-400.png 400w, images/Banner/smaller_devices/Banner_For_Phone-600.png 600w, images/Banner/smaller_devices/Banner_For_Phone-768.png 768w"

	const desktop_img_set = "images/Banner/bigger_device/Banner-1000.png 1000w, images/Banner/bigger_device/Banner-1200.png 1200w"

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
						imrSrcSet={smallerDisplay ? mobile_img_set : desktop_img_set}
						src={smallerDisplay ? `images/Banner/smaller_devices/Banner_For_Phone-768.png` : `images/Banner/bigger_device/Banner-1200.png`}
						className='w-full'
						alt={"Banner Image"}
						sizes={'(max-width: 200px) 200px, ( max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 768px) 768px, ( max-width: 1000px) 1000px, (max-width: 1200px) 1200px'}
						fetchpriority={"high"}
					></Image>
				</Container>
			</AnimatePage>
			<div className=' bg-gradient-to-b from-darker_blue via-[#264A79] via-[35%] to-[#446A9C] h-10'></div>
			<div className=' bg-gradient-to-b from-[#446A9C] to-white h-20'></div>
		</div>
	)
}

export default Banner
