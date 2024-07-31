import React from "react"
import { TailSpin } from "react-loader-spinner"
import Container from "./Container"
import Flex from "./Flex"

const PageDataLoading = () => {
	return (
		<Container>
			<Flex className={"flex flex-col justify-center items-center py-40"}>
				<TailSpin
					visible={true}
					height='80'
					width='80'
					color={"#183D6E"}
					ariaLabel='tail-spin-loading'
					radius='3'
				/>
			</Flex>
		</Container>
	)
}

export default PageDataLoading
