import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AnimatePage from "../component/AnimatePage"
import UserAccount from "../component/UserAccount"
import { useLayoutEffect } from "react"

const MyAccount = () => {
	axios.defaults.withCredentials = true

	let navigation = useNavigate()

	let [user_name, setUser_name] = useState('')
	let [user_aasbId, setUser_AasbId] = useState('')
	let [user_aiaaId, setUser_AiaaId] = useState('')
	let [user_email, setUser_Email] = useState('')
	let [user_department, setUser_Department] = useState('')
	let [user_year_semester, setUser_Year_Semester] = useState('')
	let [user_profileImage, setUser_ProfileImage] = useState('')


	let [refresh, setRefresh] = useState(false)
	let [loaded, setLoaded] = useState(false)

	useLayoutEffect(() => {
		setLoaded(false)
		axios
			.get(`${import.meta.env.VITE_DATABASE_URL}/api/v1/auth/authorized`)
			.then((data) => {
				
				if (data.data.authorized == false) {
					navigation('/login')
				} else {
					const user_Id = data.data.userId
					axios
						.post("http://localhost:3000/api/v1/auth/findMemberByUserId", {
							user_Id,
						})
						.then((user_data) => {
							const data = user_data.data.user
							console.log(data)
							setUser_name(data.name)
							setUser_Email(data.email)
							setUser_AasbId(data.AASBmembershipId)
							setUser_AiaaId(data.AIAAmembershipId)
							setUser_Department(data.department)
							setUser_Year_Semester(data.yearAndSemester)
							setUser_ProfileImage(data.profileImage)
							setLoaded(true)
						})
						.catch((error) => {
							console.log(error)
						})

					setTimeout(() => {
						setRefresh(!refresh)
					}, 300000)
				}

				
			})
			.catch((error) => {
				console.log("error")
				console.log(error)
			})
	}, [refresh])

	return (
		<AnimatePage>
			{loaded ? (
				<UserAccount
					data={{
						"name": user_name,
						"email": user_email,
						"AASB_ID": user_aasbId,
						"AIAA_ID": user_aiaaId,
						"Department": user_department,
						"Year/Semester": user_year_semester,
						profileImage: user_profileImage
					}}
				></UserAccount>
			) : (
				"Loading"
			)}
		</AnimatePage>
	)
}

export default MyAccount
