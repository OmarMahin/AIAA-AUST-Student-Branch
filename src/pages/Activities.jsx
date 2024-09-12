import React from "react"
import ActivityPostCard from "../component/ActivityPostCard"
import AnimatePage from "../component/AnimatePage"
import Container from "../component/Container"
import Flex from "../component/Flex"
import Title from "../component/Title"

const Activities = () => {
	return (
		<AnimatePage>
			<Container>
				<Title>Activites</Title>

				<Flex className={"flex flex-wrap justify-evenly gap-20 mb-20"}>
					<ActivityPostCard
						latest={true}
						tags={["Rescue bot"]}
						cardImage={"Relief_And_Rescue_Bot/cardImage.png"}
						heading={"Rescue and Relief Bot For Flood Effected Area"}
						shortDis={
							`"And whoever saves one [life] - it is as if he had save mankind entirely." (Surah Al-Ma'idah, 5:32)
Together, we're making a difference in the lives of those hit. . . .`
						}
						date={"12 September 2024"}
						pageLink={"rescue_and_relief_bot"}
					></ActivityPostCard>
					<ActivityPostCard
						latest={false}
						tags={["Seminar "]}
						cardImage={"Seminar_F23/cardImage.png"}
						heading={"Advancement in Aerospace Engineering: Insights and Opportunities"}
						shortDis={
							"The AIAA AUST Student Branch proudly hosted its first seminar, featuring the esteemed Air Commodore (Retd) Md Abdus Salam. His expertise and . . ."
						}
						date={"07 July 2024"}
						pageLink={"aasb_seminar_fall23"}
					></ActivityPostCard>
					<ActivityPostCard
						cardImage={"GM_Recruitment_F23/cardImage.jpg"}
						heading={"General Member Recruitment Fall’23"}
						tags={["Member Recruitment"]}
						shortDis={
							"AIAA AUST Student Branch has started its journey with General Member Recruitment Fall’23, dated from 02 June 2024 to 04 June 2024. Over three . . ."
						}
						date={"02-04 June 2024"}
						pageLink={"gm_recruitment_fall23"}
					></ActivityPostCard>
				</Flex>
			</Container>
		</AnimatePage>
	)
}

export default Activities
