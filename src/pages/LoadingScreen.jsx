import React, { useCallback } from "react"
import Flex from "../component/Flex"
import Image from "../component/Image"
import LogoPlaneOutline from "../component/svgComponents/LogoPlaneOutline"
import ConnectingLine from "../component/svgComponents/ConnectingLine"

const LoadingScreen = () => {
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

		plane.addEventListener("animationend", () => {
			screen.classList.add("loading-screen-animation")
		})
	}

	return (
		<Flex
			className={"w-full h-full fixed top-0 left-0 bg-darker_blue items-center justify-center "}
			id = {"loading-screen"}
			
		>
			<Flex
				className={
					"flex items-center justify-center w-40 h-40 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 animate-bangladesh"
				}
				id = {"loading-content"}
				
			>
				<Image src={"/images/Bangladesh.png"} className={"h-full "} id={"bangladesh"}></Image>
				<ConnectingLine className={"absolute top-3 left-1/2 -translate-y-1/2 -translate-x-1/2"}>
					<LogoPlaneOutline
						className={"absolute top-0 -left-10 -translate-x-1/2 -translate-y-1/2"}
						getRef={(e) => planeOutlineRef(e)}
					/>
				</ConnectingLine>
			</Flex>
		</Flex>
	)
}

export default LoadingScreen
