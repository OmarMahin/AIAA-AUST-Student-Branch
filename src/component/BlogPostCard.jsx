import React from "react"
import Flex from "./Flex"
import Image from "./Image"
import { FaBookOpen } from "react-icons/fa"
import { Link } from "react-router-dom"

const BlogPostCard = ({
	latest = false,
	cardImage,
	heading,
	blogLink,
	shortDis,
	by,
	date,
	readTime,
	tags,
}) => {
	return (
		<Flex
			className={
				"flex flex-col w-[450px] relative after:absolute after:h-[3px] after:w-[30%] after:bg-light-blue after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full hover:after:w-[60%] after:duration-300 group rounded-xl overflow-hidden shadow-around-small"
			}
		>
			<Link to={blogLink}>
				<div
					className={
						"relative h-[270px] after:bg-black/5 after:absolute after:w-full after:h-full overflow-hidden"
					}
				>
					<Image
						src={`/images/blog/${cardImage}`}
						alt={"Banner"}
						className={
							"absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 h-[100%] group-hover:scale-105 duration-500"
						}
					></Image>
				</div>
			</Link>
			<div
				className={
					"pt-5 pb-10 px-4 border-[1px] border-gray-300 border-t-0 rounded-xl rounded-t-none h-full"
				}
			>
				<Flex className={"mb-5 justify-between items-center text-[13px]"}>
					<Flex className={"gap-2 "}>
						{latest && (
							<span className='py-1 px-4 bg-darker_blue rounded-full font-poppins font-semibold text-white shadow-around'>
								Latest
							</span>
						)}
						{tags && tags.map((value) => (
							<span className='py-1 px-4 bg-darker_blue rounded-full font-poppins font-semibold text-white shadow-around'>
								{value}
							</span>
						))}
					</Flex>
					<span className='font-poppins font-bold text-darker_blue '>{date}</span>
				</Flex>
				<Link to={blogLink}>
					<h2 className={"font-poppins font-bold text-lg text-darknest_blue h-16"}>{heading}</h2>
				</Link>

				<p
					className={
						"font-poppins font-semibold text-[15px] text-font-color mt-4 h-[70px] truncate text-wrap"
					}
				>
					{shortDis}
				</p>
				<Flex className={"items-center gap-4 mt-10 justify-between"}>
					<Flex className={"gap-[5px] items-end"}>
						<span className='font-poppins font-medium text-light-blue'>By</span>
						<span className='font-poppins font-bold text-darker_blue'>{by}</span>
					</Flex>
					<Flex className={"flex flex-row gap-2 items-center"}>
						<FaBookOpen className={"text-darker_blue"} />
						<span className='font-poppins font-bold text-darker_blue'>
							{readTime} min read
						</span>
					</Flex>
				</Flex>
			</div>
		</Flex>
	)
}

export default BlogPostCard
