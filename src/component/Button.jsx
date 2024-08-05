import React from "react"
import { TailSpin } from "react-loader-spinner"
import { Link } from "react-router-dom"
import { MoonLoader } from "react-spinners"
import Flex from "./Flex"

const Button = ({
	children,
	className,
	invert,
	link,
	onClick,
	newPage,
	disabled,
	loading = false,
	
}) => {

	return disabled ? (
		<button
			className={` py-2 px-8 overflow-hidden ${
				invert
					? "bg-[#EAF3FF] text-font-color border-[#EAF3FF]"
					: "bg-light-blue text-white border-light-blue"
			} rounded-lg inline-block lg:text-[17px] text-[16px] border-2 ${
				!loading
					? invert
						? "hover:bg-darknest_blue hover:text-[#EAF3FF] duration-150 hover:cursor-pointer"
						: "hover:bg-[#EAF3FF] hover:text-font-color duration-150 hover:cursor-pointer"
					: "after:absolute after:w-full after:h-full after:bg-black/10 after:top-0 after:left-0 after:scale-110 cursor-default"
			} ${className}`}
			disabled
			
		>
			<Flex className={"flex relative w-full"}>
				<Flex className={"absolute -left-[26px] top-1/2 -translate-y-1/2 z-10"}>
					<TailSpin
						visible={loading}
						height='18'
						width='18'
						color={invert ? "#112C50" : "#EAF3FF"}
						ariaLabel='tail-spin-loading'
						radius='1'
					/>
				</Flex>
				{link ? (
					<Link
						to={link}
						target={newPage ? "_blank" : ""}
						className='font-poppins font-medium '
					>
						{children}
					</Link>
				) : (
					<span className='font-poppins font-medium '>{children}</span>
				)}
			</Flex>
		</button>
	) : (
		<button
			className={` py-2 px-8 overflow-hidden ${
				invert
					? "bg-[#EAF3FF] text-font-color border-[#EAF3FF]"
					: "bg-light-blue text-white border-light-blue"
			} rounded-full inline-block lg:text-[17px] text-[16px] border-2 ${
				!loading
					? invert
						? "hover:bg-darknest_blue hover:text-[#EAF3FF] duration-150 hover:cursor-pointer"
						: "hover:bg-[#EAF3FF] hover:text-font-color duration-150 hover:cursor-pointer"
					: " cursor-default"
			} ${className}`}
			onClick={
				!loading
					? onClick
					: (e) => {
							e.preventDefault()
					  }
			}
			
		>
			<Flex className={"flex relative w-full justify-center"}>
				<Flex className={"absolute -left-[26px] top-1/2 -translate-y-1/2 z-10"}>
					<TailSpin
						visible={loading}
						height='18'
						width='18'
						color={invert ? "#112C50" : "#EAF3FF"}
						ariaLabel='tail-spin-loading'
						radius='1'
					/>
				</Flex>
				{link ? (
					<Link
						to={link}
						target={newPage ? "_blank" : ""}
						className='font-poppins font-medium '
					>
						{children}
					</Link>
				) : (
					<span className='font-poppins font-medium'>{children}</span>
				)}
			</Flex>
		</button>
	)
}

export default Button
