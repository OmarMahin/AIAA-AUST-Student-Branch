import React from "react"
import { useState } from "react"
import axios from "axios"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import Title from "./Title"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import AccountProfilePicture from "./AccountProfilePicture"
import Information from "./Information"
import ChangeAccountPassword from "./ChangeAccountPassword"
import moment from "moment"

const UserAccount = ({ user_id }) => {

	const [user_data, setUser_data] = useState({})

	const [updated_student_id, setUpdated_Student_Id] = useState("")
	const [updated_department, setUpdated_Department] = useState("")
	const [updated_ys, setUpdated_YS] = useState("")
	const [updated_contact, setUpdated_Contact] = useState("")

	const [editInformation, setEditInformation] = useState(false)

	let [dataUpdating, setDataUpdating] = useState(false)

	const [refresh, setRefresh] = useState(false)

	const resetAllUpdatedValue = () => {
		setUpdated_Contact("")
		setUpdated_Department("")
		setUpdated_Student_Id("")
		setUpdated_YS("")
	}

	let handleUpdate = (e) => {
		e.preventDefault()
		const data = {
			StudentId: updated_student_id ? updated_student_id : user_data.StudentId,
			department: updated_department ? updated_department : user_data.department,
			yearAndSemester: updated_ys ? updated_ys : user_data.yearAndSemester,
			contact: updated_contact ? updated_contact : user_data.contact,
		}

		setDataUpdating(true)

		axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/user/updateUser`, {
				id: user_id,
				data,
			})
			.then((response) => {
				if (response.status == "200") {
					const data = response.data

					if (data.success) {
						toast.success(data.message)
						setEditInformation(false)
						setRefresh(!refresh)
					} else {
						toast.error(data.message)
						console.log(data.data.error)
					}

					setDataUpdating(false)
					resetAllUpdatedValue()
				}
			})
			.catch((error) => {
				setDataUpdating(false)
				resetAllUpdatedValue()
				console.log(error)
			})
	}

	useEffect(() => {
		// Set user data
		axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/user/findMemberByUserId`, {
				_id: user_id,
			})
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (data.success) {
						const user = data.data.user
						setUser_data(user)
					}
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}, [refresh])

	return (
		<Container>
			<Title>My Account</Title>

			<Flex
				className={
					"flex md:flex-row flex-col gap-5 w-full mt-20 mb-40 items-center md:items-start"
				}
			>
				{/* User Profile Picture */}
				<Flex className={"flex flex-col md:w-[30%] w-full items-center"}>
					<AccountProfilePicture user_id={user_id}></AccountProfilePicture>
					<Flex className={"flex flex-col gap-3 md:w-[70%] mt-20 mb-10 items-center"}>
						<ChangeAccountPassword
							className={"md:w-full w-fit"}
							user_email={user_data.email}
							user_id={user_id}
						></ChangeAccountPassword>
						{editInformation ? (
							<Flex className={"flex gap-2"}>
								<Button
									className={"w-full"}
									onClick={(e) => {
										handleUpdate(e)
									}}
									loading={dataUpdating}
								>
									Save
								</Button>
								<Button
									className={"w-full"}
									onClick={() => {
										setEditInformation(false)
										resetAllUpdatedValue()
									}}
								>
									Cancel
								</Button>
							</Flex>
						) : (
							<Button
								className={"w-full"}
								onClick={() => {
									setEditInformation(true)
								}}
							>
								Update Profile
							</Button>
						)}
					</Flex>
				</Flex>

				{/* User Information */}

				<Flex className={"flex flex-col md:w-[70%] w-full"}>
					<Flex className={"flex flex-col w-full gap-16"}>
						<Flex className={"flex w-full md:gap-20 justify-between"}>
							<Information
								label={"Full Name"}
								value={user_data.name}
								id={"Full_Name"}
							></Information>
							<Information
								label={"Email"}
								value={user_data.email}
								id={"Email"}
							></Information>
						</Flex>
						<Flex className={"flex w-full md:gap-20 justify-between"}>
							<Information
								label={"AIAA ID"}
								value={user_data.AIAAmembershipId}
								id={"AIAA_ID"}
							></Information>
							<Information
								label={"AASB ID"}
								value={user_data.AASBmembershipId}
								id={"AASB_ID"}
							></Information>
						</Flex>
						<Flex className={"flex w-full md:gap-20 justify-between"}>
							<Information
								label={"Student ID"}
								value={!editInformation ? user_data.StudentId : updated_student_id}
								edit={editInformation}
								placeholder={user_data.StudentId}
								onChange={(e) => setUpdated_Student_Id(e.target.value)}
								id={"Student_ID"}
							></Information>
							<Information
								label={"Department"}
								value={!editInformation ? user_data.department : updated_department}
								edit={editInformation}
								selectMenu={["ME", "CSE", "EEE", "CE", "IPE", "TE", "Arch", "BBA"]}
								placeholder={user_data.department}
								onChange={(e) => setUpdated_Department(e.target.value)}
								id={"Department"}
							></Information>
						</Flex>
						<Flex className={"flex w-full md:gap-20 justify-between"}>
							<Information
								label={"Year/Semester"}
								value={!editInformation ? user_data.yearAndSemester : updated_ys}
								edit={editInformation}
								placeholder={user_data.yearAndSemester}
								onChange={(e) => setUpdated_YS(e.target.value)}
								selectMenu={["1/1", "1/2", "2/1", "2/2", "3/1", "3/2", "4/1", "4/2"]}
								id={"Year/Semester"}
							></Information>
							<Information
								label={"Contact No"}
								value={!editInformation ? user_data.contact : updated_contact}
								edit={editInformation}
								placeholder={user_data.contact}
								onChange={(e) => setUpdated_Contact(e.target.value)}
								id={"Contact_No"}
								type={"tel"}
							></Information>
						</Flex>
						<Flex className={"flex w-full md:gap-20 justify-between"}>
							<Information
								label={"Account Created"}
								value={moment(user_data.createdAt).format("MMMM Do YYYY")}
								id={"Account_Created"}
							></Information>
							<Information
								label={"Current Member Session"}
								value={user_data.memberSession}
								id={"Current_Member_Session"}
							></Information>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Container>
	)
}

export default UserAccount
