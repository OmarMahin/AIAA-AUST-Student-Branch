import React, { useState } from "react"
import Flex from "./Flex"
import ConfirmModal from "./ConfirmModal"
import Button from "./Button"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const ChangeAccountPassword = ({ className, user_email, user_id }) => {
	const navigation = useNavigate()

	const [showModal, setShowModal] = useState(false)
	const [loading, setLoading] = useState(false)

	const sendOTP = (e) => {
		e.preventDefault()
		setLoading(true)
		axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/email/sendOTP`, {
				email: user_email,
				id: user_id,
			})
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (data.success) {
						toast.success(data.message)
						navigation(`/user-otp/${data.data.pageLink}`)
					} else {
						toast.error(toast.message)
						console.log(data.data.error)
					}
					setLoading(false)
				}
			})
			.catch((err) => {
				setLoading(false)
				console.log(err)
			})
	}

	return (
		<Flex>
			<Button
				className={className}
				onClick={() => {
					setShowModal(true)
				}}
			>
				Change Password
			</Button>
			<ConfirmModal
				showModal={showModal}
				message={"Are you sure you want to change your password?"}
				closeModal={() => setShowModal(false)}
				confirm={(e) => sendOTP(e)}
				loading={loading}
			></ConfirmModal>
		</Flex>
	)
}

export default ChangeAccountPassword
