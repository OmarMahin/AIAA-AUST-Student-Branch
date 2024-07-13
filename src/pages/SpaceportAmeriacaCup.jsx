import React from "react"
import AnimatePage from "../component/AnimatePage"
import Button from "../component/Button"
import Container from "../component/Container"
import Title from "../component/Title"

const SpaceportAmeriacaCup = () => {
  return (
    <Container>
			<AnimatePage>
				<Title>Spaceport America Cup</Title>
				<p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 text-font-color'>
				The Spaceport America Cup is designed in conjunction with IREC – the Intercollegiate Rocket Engineering Competition for student rocketry teams from all over the country and around the world. With over 150 teams from colleges and universities from over 20 countries, the competition continues to grow every year. Students launch solid, hybrid and Liquid propulsion rockets to target altitudes of 10,000 and 30,000 feet.


				</p>
				<p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 text-font-color mt-5'>
				In partnership with the Experimental Sounding Rocket Association and Spaceport America, AIAA is proud to support the world's largest intercollegiate rocketry competition.
				</p>

				<p className='font-poppins font-medium lg:text-lg text-base text-pretty lg:leading-9 leading-9 text-font-color mt-5'>
				For more information, visit the link below.
				</p>

				<Button
					link={"https://www.aiaa.org/events-learning/event/2024/06/17/default-calendar/spaceport-america-cup"}
					newPage={true}
					className={"mt-10 mb-20"}
				>
					Learn More
				</Button>
			</AnimatePage>
		</Container>
  )
}

export default SpaceportAmeriacaCup