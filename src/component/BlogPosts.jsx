import React from "react"
import BlogPostCard from "./BlogPostCard"
import Flex from "./Flex"

const BlogPosts = () => {

	return (
		<div className='mb-40 mt-20'>
			<Flex className={"flex flex-wrap justify-evenly gap-20"}>
			<BlogPostCard
					cardImage={"propeller/cardBanner.png"}
					heading={"  Propeller of Aircrafts"}
					blogLink={"propeller_of_an_aircraft"}
					shortDis={`A propeller is a mechanism that converts rotational motion into thrust in aircraft and other vehicles. It consists of blades mounted on a . . .`}
					by={"Tasfia Jaman"}
					date={`02 July 2024`}
					readTime={"6"}
					latest={true}
					tags={["Informational"]}
				></BlogPostCard>

				<BlogPostCard
					cardImage={"swashplate/cardBanner.png"}
					heading={"The Swashplate of a Helicopter: Engineering Marvel in Rotary Wing Flight"}
					blogLink={"the_swashplate_of_a_helicopter"}
					shortDis={`Helicopters are marvels of modern engineering, capable of taking off, landing vertically, and hovering in place. At the heart of this functionality. . .`}
					by={"Ali Tahmid Niloy"}
					date={`28 June 2024`}
					readTime={"5"}
					latest={false}
					tags={["Informational"]}
				></BlogPostCard>
				
			</Flex>
		</div>
	)
}

export default BlogPosts
