import React from "react"
import Flex from "./Flex"

const CustomToolbar = () => {
	return (
		<Flex className='w-full items-center justify-center sticky top-0 z-20 py-5'>
			<div id='toolbar' className='w-fit h-10 bg-background-color rounded-full border-0'>
				<select className='ql-header focus:outline-none font-poppins font-medium text-font-color leading-[20px]' defaultValue='' type>
					<option value='2'>H2</option>
					<option value='3'>H3</option>
					<option value=''>Normal</option>
				</select>{" "}
			</div>
		</Flex>
	)
}

export default CustomToolbar
