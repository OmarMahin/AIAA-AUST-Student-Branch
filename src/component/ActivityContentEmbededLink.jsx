import React from "react"
import Flex from "./Flex"
import { Link } from "react-router-dom"

const ActivityContentEmbededLink = ({ link }) => {
	console.log(link)
	console.log(link.length)
	return (
		<Flex className={"mt-2 flex flex-col gap-4 font-poppins font-medium text-font-color text-lg break-words"}>
			{link.length > 1
				? link.map((value, index) => (
						<span>
							Source Link {index + 1}: {""}
							<Link to={value} target='_blank' className='text-darker_blue'>
								{value}
							</Link>
						</span>
        ))
				: ""}
		</Flex>
	)
}

export default ActivityContentEmbededLink
