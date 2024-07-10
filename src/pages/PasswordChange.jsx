import axios from "axios"
import React from "react"
import { useLayoutEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import AnimatePage from "../component/AnimatePage"
import PasswordChangeForm from "../component/PasswordChangeForm"


const PasswordChange = () => {
	axios.defaults.withCredentials = true

    let [valid, setValid] = useState(false)
    let [email, setEmail] = useState('')


	const { id } = useParams()

    useLayoutEffect(()=>{

        axios
            .post("http://localhost:3000/api/v1/auth/verifyPage", {
                id,
            })
            .then((data) => {
                setValid(data.data.valid)
                setEmail(data.data.email)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

	return <AnimatePage>{valid ? <PasswordChangeForm user_email = {email}></PasswordChangeForm> : "404"}</AnimatePage>
}

export default PasswordChange
