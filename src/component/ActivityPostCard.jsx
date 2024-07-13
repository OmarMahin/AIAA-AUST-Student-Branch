import React from "react"
import Flex from "./Flex"
import Image from "./Image"
import { FaBookOpen } from "react-icons/fa"
import { Link } from "react-router-dom"

const ActivityPostCard = ({
	latest = false,
	cardImage,
	heading,
	pageLink,
	shortDis,
	date,
	tags,
}) => {
	return (
		<Flex
			className={
				"flex flex-col w-[450px] relative after:absolute after:h-[3px] after:w-[30%] after:bg-light-blue after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full hover:after:w-[60%] after:duration-300 group rounded-xl overflow-hidden shadow-around-small"
			}
		>
			<Link to={pageLink}>
				<div
					className={
						"relative h-[200px] lg:h-[270px] after:bg-black/5 after:absolute after:w-full after:h-full overflow-hidden"
					}
				>
					<Image
						src={`/images/Activites/${cardImage}`}
						alt={"Card Image"}
						className={
							"absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 h-auto w-full lg:h-[100%] group-hover:scale-105 duration-500"
						}
					></Image>
				</div>

				<div
					className={
						"pt-4 pb-10 px-4 border-[1px] border-gray-300 border-t-0 rounded-xl rounded-t-none h-full"
					}
				>
					<Flex className={" flex h-12 justify-between items-center text-[13px]"}>
						<Flex className={"flex gap-2 "}>
							{latest && (
								<span className='py-1 px-4 bg-darker_blue rounded-full font-poppins font-semibold text-white shadow-around'>
									Latest Event
								</span>
							)}
							{tags &&
								tags.map((value) => (
									<span className='py-1 px-4 bg-darker_blue rounded-full font-poppins font-semibold text-white shadow-around'>
										{value}
									</span>
								))}
						</Flex>
					</Flex>
					<h2 className={"font-poppins font-bold text-lg text-darknest_blue lg:h-14"}>
						{heading}
					</h2>

					<p
						className={
							"font-poppins font-semibold text-[15px] text-font-color mt-10 lg:mt-4 h-[70px] truncate text-wrap"
						}
					>
						{shortDis}
					</p>
					<Flex className={"flex items-center gap-4 mt-10 justify-between"}>
						<span className='font-poppins font-bold text-darker_blue '>{date}</span>
					</Flex>
				</div>
			</Link>
		</Flex>
	)
}

export default ActivityPostCard
