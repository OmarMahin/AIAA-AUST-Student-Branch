import React from "react"
import Flex from "./Flex"
import Image from "./Image"
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogPostCard = () => {
	return (
		<Flex className={"flex flex-col w-[450px] relative after:absolute after:h-[3px] after:w-[30%] after:bg-light-blue after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full hover:after:w-[60%] after:duration-300 group rounded-xl overflow-hidden shadow-around-small"}>
			<div className={"relative h-[270px] after:bg-black/10 after:absolute after:w-full after:h-full overflow-hidden"}>
				<Image
					src={"/images/blog/swashplate/cardBanner.jpg"}
					alt={"Banner"}
					className={"absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 h-[100%] group-hover:scale-105 duration-500"}
				></Image>
			</div>
			<div className={"pt-5 pb-10 px-4 border-[1px] border-gray-300 border-t-0 rounded-xl rounded-t-none"}>
                <Flex className={'mb-5 justify-between items-center'}>
                    <Flex className={'gap-2'}>

                    <span className="py-1 px-4 bg-darker_blue rounded-full font-poppins font-semibold text-white text-[13px] shadow-around">Latest</span>
                    <span className="py-1 px-4 bg-darker_blue rounded-full font-poppins font-semibold text-white text-[13px] shadow-around">Informational</span>
                    </Flex>
                    <span className="font-poppins font-bold text-darker_blue">28 June 2024</span>
                </Flex>
                <Link to = {'the_swashplate_of_a_helicopter'}>

				<h2 className={"font-poppins font-bold text-lg text-darknest_blue"}>
					The Swashplate of a Helicopter: Engineering Marvel in Rotary Wing Flight
				</h2>
                </Link>
                
				<p className={"font-poppins font-semibold text-[15px] text-darker_blue mt-4 h-[70px] truncate text-wrap"}>
                Helicopters are marvels of modern engineering, capable of taking off, landing vertically, and hovering in place. At the heart of this functionality. . .
				</p>
                <Flex className={'items-center gap-4 mt-10 justify-between'}>
                    <Flex className={'gap-[5px] items-end'}>
                    <span className="font-poppins font-medium text-light-blue">By</span>
                    <span className="font-poppins font-bold text-darker_blue">Ali Tahmid Niloy</span>
                    </Flex>
                    <Flex className={'flex flex-row gap-2 items-center'}>
                    <FaBookOpen className={'text-darker_blue'}/>
                    <span className="font-poppins font-bold text-darker_blue">5 min read</span>
                    </Flex>
                </Flex>
			</div>
		</Flex>
	)
}

export default BlogPostCard
