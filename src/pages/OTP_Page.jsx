import axios from "axios"
import React, { useEffect } from "react"
import { useLayoutEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import AnimatePage from "../component/AnimatePage"
import OTP_Form from "../component/OTP_Form"
import PageNotFound from "./PageNotFound"
import PageDataLoading from "../component/PageDataLoading"

const OTP_Page = () => {

	axios.defaults.withCredentials = true

	const [valid, setValid] = useState(false)
	const [user_id, setUser_id] = useState("")
    const [loading, setLoading] = useState(true)

	const { id } = useParams()

	useEffect(() => {
        setLoading(true)
		axios
			.post(`${import.meta.env.VITE_DATABASE_URL}/api/v1/verification/verifyPage`, {
				link: id,
			})
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
                    console.log(data)
					if (data.success) {
						setValid(data.valid)
                        setUser_id(data.data.user_id)
					}
				}
                setLoading(false)
			})
			.catch((err) => {
                setLoading(false)
				console.log(err)
			})
	}, [])

	return (
		<AnimatePage>
            {loading ?
            <PageDataLoading></PageDataLoading>
            :
            valid ?
            <OTP_Form user_id={user_id}></OTP_Form>
            :
            <PageNotFound></PageNotFound>
            }
		</AnimatePage>
	)
}

export default OTP_Page
