import React from "react"
import Flex from "./Flex"
import LogoPlaneOutline from "./svgComponents/LogoPlaneOutline"
import ConnectingLine from "./svgComponents/ConnectingLine"
import Image from "./Image"

const InitialLoadingAnimation = () => {
	const planeOutlineRef = (e) => {
		const screen = document.querySelector("#loading-screen")
		const plane = document.querySelector("#logo-plane-outline")
		const connectingLine = document.querySelector("#connecting-line")
		const bd = document.querySelector(".animate-bangladesh")

		bd.addEventListener("animationend", () => {
			connectingLine.classList.add("animate-connecting-line")
		})

		connectingLine.addEventListener("animationend", () => {
			plane.classList.add("animate-plane")
		})

		// plane.addEventListener("animationend", () => {
		// 	screen.classList.add("loading-screen-animation")
		// })
	}

	return (
		<Flex
			className={
				"w-full h-full fixed top-0 left-0 bg-darker_blue items-center justify-center z-50"
			}
			id={"loading-screen"}
		>
			<Flex
				className={
					"flex items-center justify-center lg:w-40 lg:h-40 w-32 h-32 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 animate-bangladesh"
				}
				id={"loading-content"}
			>
				<Image src={"/images/Bangladesh.png"} className={"h-full "} id={"bangladesh"}></Image>
				<ConnectingLine
					className={"absolute lg:top-3 top-2 left-1/2 -translate-y-1/2 -translate-x-1/2"}
				>
					<LogoPlaneOutline
						className={
							"absolute lg:top-0 lg:-left-10 -left-6 top-7 -translate-x-1/2 -translate-y-1/2"
						}
						getRef={(e) => planeOutlineRef(e)}
					/>
				</ConnectingLine>
			</Flex>
		</Flex>
	)
}

export default InitialLoadingAnimation
