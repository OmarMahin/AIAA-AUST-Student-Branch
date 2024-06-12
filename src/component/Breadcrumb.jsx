import React from "react"
import { Link } from "react-router-dom"
import Container from "./Container"
import Flex from "./Flex"

const Breadcrumb = () => {
	const stringArray = window.location.pathname.split('_')
	let PageHeader = ''

    stringArray.map((element)=>{
        if (element[0] == '/'){
            element = element.slice(1)
        }
        PageHeader = PageHeader + element.toUpperCase() + ' '
    })

	return (
		<Container>
			<Flex className={'flex lg:mt-20 mt-32 mb-11 items-end lg:gap-3 gap-2 relative after:absolute after:bottom-[-10px] lg:after:w-[200px] after:w-[120px] after:h-1 after:translate-x-[0%] after:left-0 after:bg-gradient-to-r after:from-darknest_blue after:to-transparent'}>
                <Link to={'/'}>

				<span className=" font-poppins font-semibold text-light-blue">Home</span>
                </Link>
				<span className=" font-poppins font-bold text-darker_blue text-xl leading-6">{">"}</span>
                <span className=" font-poppins font-extrabold text-darknest_blue lg:text-2xl text-xl">{PageHeader}</span>
			</Flex>
		</Container>
	)
}

export default Breadcrumb
