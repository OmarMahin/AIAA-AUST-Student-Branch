import React from "react"
import Flex from "./Flex"
import Image from "./Image"
import { FaBookOpen } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useState } from "react"

const BlogContent = () => {
  
  let [liked, setLiked] = useState(false)
  let [favourtie, setFavourtie] = useState(false)

	return (
		<Flex className={"flex flex-col mt-16"}>
			<div
				className={
					"relative w-full h-[400px] after:bg-black/10 after:absolute after:w-full after:h-full overflow-hidden rounded-xl"
				}
			>
				<Image
					src={"/images/blog/swashplate/cardBanner.jpg"}
					alt={"Banner"}
					className={"absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[100%]"}
				></Image>
			</div>

			<h1 className='mt-10 font-poppins text-center font-bold text-darknest_blue text-3xl'>
				The Swashplate of a Helicopter: Engineering Marvel in Rotary Wing Flight
			</h1>

			<Flex className={"items-center font-poppins font-bold text-darker_blue mt-7 text-[14px] gap-2"}>
				<Flex className='py-2 px-4 rounded-full bg-[#d2deeb] items-center gap-3'>
					<FaBookOpen className={"text-darker_blue"} />
					<span>5 min read</span>
				</Flex>
				<Flex className='h-8 max-w-8 hover:max-w-20 px-2 gap-2 duration-500 rounded-full bg-[#d2deeb] justify-start items-center group relative overflow-hidden hover:delay-300'>
          <span>
          {
            liked
            ?
            <FaHeart className={`w-4 h-4 text-red-400 block hover:cursor-pointer`} onClick={()=>{setLiked(!liked)}}></FaHeart>
            :
					<FaRegHeart className={`w-4 h-4 block hover:cursor-pointer`} onClick={()=>{setLiked(!liked)}}/>
          }
          </span>
          <span>Like</span>
				</Flex>
				<Flex className='h-8 max-w-8 hover:max-w-20 px-2 gap-2 duration-500 rounded-full bg-[#d2deeb] justify-start items-center group relative overflow-hidden hover:delay-300'>
          <span>
          {
            favourtie
            ?
            <FaStar className={`w-4 h-4 text-yellow-500 block hover:cursor-pointer`} onClick={()=>{setFavourtie(!favourtie)}}></FaStar>
            :
					<FaRegStar className={`w-4 h-4 block hover:cursor-pointer`} onClick={()=>{setFavourtie(!favourtie)}}/>
          }
          </span>
          <span>Favourite</span>
				</Flex>
			</Flex>

			<Flex
				className={
					"flex flex-col gap-7 mt-10 font-poppins font-medium text-lg leading-8 text-light-blue"
				}
			>
				<p className=' indent-10'>
					Helicopters are marvels of modern engineering, capable of taking off, landing
					vertically, and hovering in place. At the heart of this functionality lies a critical
					component known as the swashplate. Understanding the swashplate’s role in helicopter
					flight reveals much about the intricate mechanics of rotary-wing aircraft.
				</p>
				<p className=''>
					A Swashplate is a key component in controlling a Helicopter. It is a mechanical
					device that translates input via the helicopter flight controls into the motion of
					the main rotor blades. The swashplate consists of two main parts: a stationary
					swashplate and a rotating swashplate. The stationary swashplate is mounted on the
					main rotor mast and is connected to the cyclic and collective controls by a series of
					pushrods. The rotating swashplate is mounted to the stationary swashplate using a
					bearing and is allowed to rotate with the main rotor mast.
				</p>
			</Flex>
		</Flex>
	)
}

export default BlogContent
