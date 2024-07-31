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

	let [user_name, setUser_name] = useState("")
	let [user_aasbId, setUser_AasbId] = useState("")
	let [user_aiaaId, setUser_AiaaId] = useState("")
	let [user_email, setUser_Email] = useState("")
	let [user_department, setUser_Department] = useState("")
	let [user_studentId, setUser_StudentId] = useState("")
	let [user_year_semester, setUser_Year_Semester] = useState("")
	let [user_profileImage, setUser_ProfileImage] = useState("")
	let [user_contact, setUser_Contact] = useState("")
	let [user_id, setUser_id] = useState("")

	let [refresh, setRefresh] = useState(false)
	let [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setLoaded(false)
		axios
			.get(`${import.meta.env.VITE_DATABASE_URL}/api/v1/auth/authorized`)
			.then((response) => {
				if (response.status == "200") {
					const data = response.data

					if (!data.authorized) {
						navigation('/login')
						return
					}

					const user_Id = data.data.user_id

					axios
						.post("http://localhost:3000/api/v1/user/findMemberByUserId", {
							user_Id,
						})
						.then((response) => {
							if (response.status == "200") {
								const data = response.data

								if (data.success) {
									const user = data.data.user
									setUser_name(user.name)
									setUser_Email(user.email)
									setUser_AasbId(user.AASBmembershipId)
									setUser_AiaaId(user.AIAAmembershipId)
									setUser_Department(user.department)
									setUser_StudentId(user.StudentId)
									setUser_Year_Semester(user.yearAndSemester)
									setUser_ProfileImage(user.profileImage)
									setUser_Contact(user.contact)
									setUser_id(user._id)
								} else {
									toast.error(data.message)
									console.log(data.data.error)
								}
							}
							setLoaded(true)
						})
						.catch((error) => {
							console.log(error)
							setLoaded(true)
						})
				}
			})
			.catch((error) => {
				console.log("error")
				console.log(error)
			})

		setTimeout(() => {
			setRefresh(!refresh)
		}, import.meta.env.VITE_REFRESH_TIME)
	}, [refresh])

	return (
		<AnimatePage>
			{loaded ? (
				<UserAccount
					data={{
						name: user_name,
						email: user_email,
						AASB_ID: user_aasbId,
						AIAA_ID: user_aiaaId,
						Student_ID: !user_studentId ? "N/A" : user_studentId,
						Department: user_department,
						YS: user_year_semester,
						Contact_No: !user_contact ? "N/A" : user_contact,
						profileImage: user_profileImage,
						id: user_id,
					}}
				></UserAccount>
			) : (
				<PageDataLoading></PageDataLoading>
			)}
		</AnimatePage>
	)
}

export default MyAccount
