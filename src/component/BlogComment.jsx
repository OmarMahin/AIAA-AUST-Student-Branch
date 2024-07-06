import React from "react"
import Button from "./Button"
import Flex from "./Flex"
import Image from "./Image"

const BlogComment = () => {
	return (
		<Flex className={"flex-col flex gap-4 mb-10"}>
			<div className='w-full border-t-[1px] py-5 border-b-[1px] border-gray-400'>
				<h3 className='font-poppins font-bold text-darker_blue text-2xl mb-10'>
					Leave a comment
				</h3>
				<Flex className={"flex justify-center items-start gap-3 lg:gap-7"}>
					<div className='lg:w-14 lg:h-14 w-10 h-10 rounded-full bg-[#D6DDE5] relative overflow-hidden'>
						<Image
							className={
								"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full"
							}
							src={"/images/members/Fall'23/Default_Image.png"}
						></Image>
					</div>
					<Flex className={"flex flex-col items-start lg:w-[60%] w-[80%] gap-7"}>
						<textarea
							type={"textarea"}
							className='w-full lg:h-[170px] h-[120px] bg-white lg:py-4 py-3 lg:pl-5 px-4 rounded-xl border-2 border-slate-500 resize-none'
							placeholder={"Your comment"}
						></textarea>
						<Button>Submit</Button>
					</Flex>
				</Flex>
			</div>

            <h3 className='font-poppins font-bold text-darker_blue text-2xl mb-10'>
					Comments
				</h3>
		</Flex>
	)
}

export default BlogComment
