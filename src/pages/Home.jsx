import React from "react"
import AboutUs from "../component/AboutUs"
import AnimatePage from "../component/AnimatePage"
import Banner from "../component/Banner"
import LatestActivites from "../component/LatestActivites"

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<AnimatePage>
				<AboutUs></AboutUs>
				<LatestActivites></LatestActivites>
			</AnimatePage>
		</div>
	)
}

export default Home
