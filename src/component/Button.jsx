import React from "react"
import { Link } from "react-router-dom"

const Button = ({ children, className, invert, link}) => {
	return invert ? (
		<Link to={link}>
			<div
				className={`${className} py-2 px-6 bg-[#EAF3FF] rounded-lg inline-block text-font-color lg:text-lg text-[16px] border-2 border-[#EAF3FF] hover:bg-darknest_blue hover:text-[#EAF3FF] duration-150`}
			>
				<span className='font-poppins font-medium '>{children}</span>
			</div>
		</Link>
	) : (
		<Link to={link}>
			<div
				className={`${className} py-2 px-6 bg-light-blue rounded-lg inline-block text-white lg:text-lg text-[16px] border-2 border-light-blue hover:bg-[#EAF3FF] hover:text-font-color duration-150`}
			>
				<span className='font-poppins font-medium '>{children}</span>
			</div>
		</Link>
	)
}

export default Button
