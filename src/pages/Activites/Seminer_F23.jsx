import React from "react"
import ActivityContent from "../../component/ActivityContent"
import AnimatePage from "../../component/AnimatePage"
import Container from "../../component/Container"
const Seminer_F23 = () => {
	return (
		<AnimatePage>
			<Container>
				<ActivityContent
					images={["cover1.png", "cover2.png", "cover3.png"]}
					event={"Seminar_F23"}
					heading={"Advancement in Aerospace Engineering: Insights and Opportunities"}
					date={"07 July 2024"}
					content={`The AIAA AUST Student Branch proudly hosted its first seminar, featuring the esteemed Air Commodore (Retd) Md Abdus Salam. His expertise and insights into the advancements in aerospace engineering were nothing short of inspiring. This event marks the beginning of our commitment to providing valuable learning and networking opportunities for our members. We're excited about the future and eager to continue fostering a community where knowledge and innovation thrive. Our heartfelt thanks to everyone who attended and contributed to the success of this event!
        `}
					ImageHeading = {"Moments of the events"}
                    imageContent = {['image1.png','image2.png','image3.png','image4.png','image5.png','image6.png','image7.png','image8.png','image9.png','image10.png',]}
				></ActivityContent>
			</Container>
		</AnimatePage>
	)
}

export default Seminer_F23
