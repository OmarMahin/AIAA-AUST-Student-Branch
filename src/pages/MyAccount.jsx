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

	let [userLoggedIn, setUserLoggedIn] = useState(false)
	let [userProfileName, setUserProfileName] = useState("")
	let [name, setName] = useState("")
	let [email, setEmail] = useState("")
	let [imageURL, setImageURL] = useState("")
	let [membershipId, setMemberShipId] = useState("")
	let [contact, setContact] = useState("")
	let [refresh, setRefresh] = useState(false)

  
	useLayoutEffect(() => {
		axios
			.get("http://localhost:3000/api/v1/auth/authorized")
			.then((data) => {
				if (data.data.authorized == false) {
					setUserLoggedIn(false)
					window.location.pathname = '/login'
				} else {
					setUserLoggedIn(true)
					let userData = data.data
					let fullName = userData.name
					let nameParts = fullName.split(" ")
					let userName = nameParts[0][0] + nameParts.pop()[0]
					setUserProfileName(userName)
					setName(fullName)
					setMemberShipId(userData.membershipId)
					setEmail(userData.email)
					setImageURL(userData.profilePictureUrl)

					setTimeout(()=>{
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
			<UserAccount
				data={{ userProfileName, imageURL, name, email, membership_Id: membershipId, contact_No: contact}}
			></UserAccount>
		</AnimatePage>
	)
}

export default MyAccount
