import React from "react"
import Flex from "./Flex"

const Information = ({
	label,
	placeholder,
	value,
	onChange,
	edit = false,
	selectMenu = false,
	id,
	type
}) => {
	return (
		<Flex
			className={
				"flex flex-col font-poppins font-semibold text-font-color w-[48%] justify-between"
			}
			id={id}
		>
			<span
				className={`font-poppins font-semibold md:text-xl text-lg text-font-color h-10 w-fit ${
					id == "Current_Member_Session" ? "md:mb-3 mb-7" : "mb-3"
				}`}
			>
				{label}
			</span>
			<div
				className={`font-medium md:text-lg text-[15px] pb-4 w-full relative after:absolute after:h-[2px] ${
					edit ? "after:w-full" : "after:w-0"
				} after:duration-300 after:bottom-0 after:left-0 after:bg-light-blue before:absolute before:h-[2px] before:w-full before:bottom-0 before:left-0 before:bg-[#D9D9D9]`}
			>
				{edit ? (
					selectMenu ? (
						<select
							onChange={onChange}
							className={"focus:outline-none w-full"}
							value={value ? value : "N/A"}
							id={id + "-select"}
						>
							{selectMenu.map((value, index) => (
								<option key={index} value={value}>
									{value}
								</option>
							))}
						</select>
					) : (
						<input
							onChange={onChange}
							placeholder={placeholder ? placeholder : "N/A"}
							value={value}
							className={"focus:outline-none w-full"}
							id={id + "-input"}
							type={type ? type : 'text'}
						></input>
					)
				) : (
					<span className={`text-end w-full`}>{value ? value : "N/A"}</span>
				)}
			</div>
		</Flex>
	)
}

export default Information
