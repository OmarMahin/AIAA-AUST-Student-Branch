import React from "react"
import { useLayoutEffect } from "react"
import AnimatePage from "../component/AnimatePage"
import Container from "../component/Container"
import axios from "axios"
import BlogPosts from "../component/BlogPosts"
import Title from "../component/Title"

const Blog = () => {

    axios.defaults.withCredentials = true

    // useLayoutEffect(()=>{
    //     axios
	// 		.get("http://localhost:3000/api/v1/auth/authorized")
	// 		.then((data) => {
				
	// 			if (data.data.authorized == false) {
	// 				window.location.pathname = "/login"
	// 			}
    //         }).catch((error)=>{
    //             console.log(error)
    //         })
    // },[])

	return (
		<AnimatePage>
			<Container>
                <Title>Blog</Title>
				<BlogPosts></BlogPosts>
			</Container>
		</AnimatePage>
	)
}

export default Blog
