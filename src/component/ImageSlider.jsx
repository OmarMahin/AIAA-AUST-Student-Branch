import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ActivityPageCover from "./ActivityPageCover"

const ImageSlider = ( {images, event}) => {
	console.log(images.map((data)=>{console.log(data)}))
	let settings = {
		dots: true,
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
	}
	return (
		<Slider {...settings}>
			{images.map((image, index) => (
				<ActivityPageCover image={images[index]} event = {event}></ActivityPageCover>
			))}
		</Slider>
	)
}

export default ImageSlider
