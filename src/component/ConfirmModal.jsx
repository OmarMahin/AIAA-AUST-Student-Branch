import React from "react"
import Flex from "./Flex"
import Button from "./Button"
import { IoIosCloseCircle } from "react-icons/io"

const ConfirmModal = ({ message, showModal, closeModal, confirm, loading }) => {
	const handleClose = (e) => {
		e.preventDefault()
		console.log(e.target)
		if (e.target.id && e.target.id == "Background") {
			closeModal()
		}
	}

	return (
		<Flex
			className={`w-full h-full fixed top-0 left-0 bg-black/20 z-50 justify-center items-center ${
				showModal ? "scale-100" : "scale-0"
			}`}
			id={"Background"}
			onClick={(e) => handleClose(e)}
		>
			<Flex
				className={
					"bg-background-color rounded-lg px-6 py-5 flex flex-col gap-10 items-center relative"
				}
			>
				<div className='absolute right-3 top-3'>
					<Flex
						className={"w-6 h-6 rounded-full relative after:absolute after:w-full after:h-full after:z-10 overflow-hidden hover:cursor-pointer"}
						id={"Background"}
						onClick={(e) => handleClose(e)}
					>
						<IoIosCloseCircle className={" w-full h-full"} />
					</Flex>
				</div>
				<p
					className={
						"min-w-[300px] max-w-[500px] text-center font-poppins font-semibold text-lg text-font-color mt-5"
					}
				>
					{message}
				</p>
				<Flex className={"flex gap-3"}>
					<Button className={`lg:text-sm lg:px-3 lg:py-[5px] h-9 leading-[9px] w-20`} onClick={(e) => confirm(e)} loading={loading}>
						Yes
					</Button>
					<Button className={`lg:text-sm lg:px-3 lg:py-[5px] h-9 leading-[9px] w-20`}
						onClick={(e) => closeModal(e)}>
						No
					</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default ConfirmModal
