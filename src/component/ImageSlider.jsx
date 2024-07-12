import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ActivityPageCover from "./ActivityPageCover"

const ImageSlider = ( {images}) => {
	console.log(images.map((data)=>{console.log(data)}))
	let settings = {
		dots: true,
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 400,
	}
	return (
		<Slider {...settings}>
			{images.map((image, index) => (
				<ActivityPageCover image={images[index]}></ActivityPageCover>
			))}
		</Slider>
	)
}

export default ImageSlider
