import React from "react"
import { useLayoutEffect } from "react"
import AnimatePage from "../component/AnimatePage"
import BlogContent from "../component/BlogContent"
import Container from "../component/Container"
import axios from "axios"

const Blog = () => {

    axios.defaults.withCredentials = true

    useLayoutEffect(()=>{
        axios
			.get("http://localhost:3000/api/v1/auth/authorized")
			.then((data) => {
				
				if (data.data.authorized == false) {
					window.location.pathname = "/login"
				}
            }).catch((error)=>{
                console.log(error)
            })
    },[])

	return (
		<AnimatePage>
			<Container>
				<BlogContent></BlogContent>
			</Container>
		</AnimatePage>
	)
}

export default Blog
