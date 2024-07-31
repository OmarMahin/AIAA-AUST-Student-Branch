import axios from "axios"
import React from "react"
import { useLayoutEffect } from "react"
import { useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import AnimatePage from "../component/AnimatePage"
import PageDataLoading from "../component/PageDataLoading"
import PasswordChangeForm from "../component/PasswordChangeForm"

const PasswordChange = () => {
	axios.defaults.withCredentials = true

	const navigation = useNavigate()

	let [_id, setId] = useState("")
	let [loading, setLoading] = useState(true)

	const { id } = useParams()

	useLayoutEffect(() => {
		axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/verification/verifyPage`, {
				link: id,
			})
			.then((response) => {
				if (response.status == "200") {
					const data = response.data

					if (data.valid) {
						setId(data.data.user_id)
						setLoading(false)
					} else {
						navigation("*")
					}
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<AnimatePage>
			{!loading ? (
				<PasswordChangeForm user_id={_id}></PasswordChangeForm>
			) : (
				<PageDataLoading></PageDataLoading>
			)}
		</AnimatePage>
	)
}

export default PasswordChange
