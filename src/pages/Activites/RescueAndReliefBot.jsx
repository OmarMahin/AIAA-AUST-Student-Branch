import React from "react"
import AnimatePage from "../../component/AnimatePage"
import Container from "../../component/Container"
import ActivityContent from "../../component/ActivityContent"

const RescueAndReliefBot = () => {
	return (
		<AnimatePage>
			<Container>
				<ActivityContent
					images={["cover1.png", "cover2.png", "cover3.png"]}
					event={"Relief_And_Rescue_Bot"}
					heading={"Rescue and Relief Bot For Flood Effected Area"}
					date={"12 September 2024"}
					content={`"And whoever saves one [life] - it is as if he had save mankind entirely." (Surah Al-Ma'idah, 5:32)

                        Together, we're making a difference in the lives of those hit hardest by the recent floods in Bangladesh. Our project focuses on providing immediate relief, rebuilding infrastructure, and supporting long-term recovery to restore hope and stability in these communities.

Initiated by AIAA AUST Student Branch Chair Anas Al Rafin, and with contributions from a dedicated team of 17 students, this project exemplifies the power of engineering applied to real-world problems. We have created a remote-controlled waterborne bot capable of navigating floodwaters to rescue individuals weighing up to 50 kg and deliver essential supplies such as food, medicine, drinkable water, and relief materials to regions otherwise unreachable by conventional methods. Designed to operate in severely impacted areas, the bot provides both immediate humanitarian aid and life-saving assistance.

We extend our gratitude to Prof. Dr. A N Mustafizul Karim (HoD, MPE), Prof. Dr. Mazharul Islam (AIAA AUST Faculty Advisor), Prof. Dr. Bobby Barua (HoD, EEE), and Prof. Dr. Omar Farrok (EEE) for their invaluable support. Our team is committed to further developing and enhancing the design for greater efficiency and scalability in future flood relief operations.

        `}
					listContent={true}
					ImageHeading={"Moments of the events"}
					imageContent={["image1.png", "image2.png", "image3.png", "image4.png", "image5.png"]}
				></ActivityContent>
			</Container>
		</AnimatePage>
	)
}

export default RescueAndReliefBot
