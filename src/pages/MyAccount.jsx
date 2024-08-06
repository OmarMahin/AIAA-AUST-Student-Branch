import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AnimatePage from "../component/AnimatePage"
import UserAccount from "../component/UserAccount"
import { useLayoutEffect } from "react"
import PageDataLoading from "../component/PageDataLoading"
import { toast } from "react-toastify"

const MyAccount = () => {
	axios.defaults.withCredentials = true

	let navigation = useNavigate()

	let [user_id, setUser_id] = useState("")

	let [refresh, setRefresh] = useState(false)
	let [loaded, setLoaded] = useState(true)

	useEffect(() => {
		setLoaded(false)
		axios
			.get(`${import.meta.env.VITE_DATABASE_URL}/api/v1/auth/authorized`)
			.then((response) => {
				if (response.status == "200") {
					const data = response.data

					if (!data.authorized) {
						navigation("/login")
						return
					}
					setUser_id(data.data.user_id)
					setLoaded(true)

				}
			})
			.catch((error) => {
				navigation("/login")
				setLoaded(true)
				console.log("error")
				console.log(error)
			})

		setTimeout(() => {
			setRefresh(!refresh)
		}, import.meta.env.VITE_REFRESH_TIME || 300000)
	}, [refresh])

	return (
		<AnimatePage>
			{loaded ? (
				<UserAccount user_id={user_id}></UserAccount>
			) : (
				<PageDataLoading></PageDataLoading>
			)}
		</AnimatePage>
	)
}

export default MyAccount
