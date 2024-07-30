import axios from "axios"
import React from "react"
import { useLayoutEffect } from "react"
import { useState } from "react"
import { TailSpin } from "react-loader-spinner"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import AnimatePage from "../component/AnimatePage"
import Container from "../component/Container"
import Flex from "../component/Flex"
import PasswordChangeForm from "../component/PasswordChangeForm"

const PasswordChange = () => {
	axios.defaults.withCredentials = true

    const navigation = useNavigate()
	
	let [_id, setId] = useState("")
	let [loading, setLoading] = useState(true)

	const { id } = useParams()

	useLayoutEffect(() => {
		axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/auth/verifyPage`, {
				link: id,
			})
			.then((response) => {
                if (response.status == '200'){
                    const data = response.data

                    if (data.valid){
                        setId(data.data.user_id)
                        setLoading(false)
                    }
                    else{
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
                <Container>

				<Flex className={"flex flex-col justify-center items-center py-40"}>
					<TailSpin
						visible={loading}
						height='80'
						width='80'
						color={"#183D6E"}
						ariaLabel='tail-spin-loading'
						radius='3'
					/>
				</Flex>
                </Container>
                
			)}
		</AnimatePage>
	)
}

export default PasswordChange
