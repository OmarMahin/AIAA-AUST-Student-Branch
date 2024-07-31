import React from "react"
import Button from "../component/Button"
import Container from "../component/Container"
import Flex from "../component/Flex"
import Image from "../component/Image"

const PageNotFound = () => {
	return (
		<Container>
			<Flex className={"flex items-center justify-center flex-col  lg:mt-14 mt-32 mb-20"}>
				<Image src={"./images/404Error.png"} alt={"404"} className={"lg:w-[40%] w-[90%]"}></Image>
        <Flex className={'flex flex-col mt-5'}>
          <p className={'font-poppins font-semibold text-xl lg:text-2xl text-font-color'}>Oops! Page not found :(</p>
          <p className={'font-poppins font-medium text-lg lg:text-xl text-font-color mt-3'}>Looks like this page does not exist or was removed!</p>
          <Button className={'w-fit mt-8'} link = {'/'}>Return Home</Button>
        </Flex>
			</Flex>
		</Container>
	)
}

export default PageNotFound
