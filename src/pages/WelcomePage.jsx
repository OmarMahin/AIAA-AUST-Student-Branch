import axios from "axios"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AnimatePage from "../component/AnimatePage"
import Container from "../component/Container"

const WelcomePage = () => {

    axios.defaults.withCredentials = true

    let navigation = useNavigate()
	let [name, setName] = useState("")

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/v1/auth/welcome")
			.then((data) => {
                console.log(data)
                if (data.data.authorized == false){
                    navigation('/login',{replace: false})
                }
                else{

                    setName(data.data.name)
                }
			})
			.catch((error) => {
				console.log("error")
			})
	}, [])

	return (
		<AnimatePage>
			<Container className={'py-24'}>
				<h2 className='mx-auto text-center'>{`Welcome ${name}`}</h2>
			</Container>
		</AnimatePage>
	)
}

export default WelcomePage
