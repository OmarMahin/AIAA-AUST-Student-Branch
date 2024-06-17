import React from "react"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"
import Flex from "./Flex"

const SocialMediaIcons = ({className}) => {
	return (
		<Flex className={`items-center gap-3 flex ${className}`}>
			<Link to={"https://www.facebook.com/info.aasb"} target='_blank'>
				<FaFacebookSquare className={" h-7 w-7"} />
			</Link>
			<Link to={"https://www.instagram.com/aiaa_aust/"} target='_blank'>
				<FaInstagramSquare className={"h-7 w-7"} />
			</Link>
			<Link
				to={"https://www.linkedin.com/company/aiaa-aust-student-branch/mycompany/"}
				target='_blank'
			>
				<FaLinkedin className={"h-7 w-7"} />
			</Link>
		</Flex>
	)
}

export default SocialMediaIcons
