import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "./Image"
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"
import Flex from "./Flex"

const GalleryImageSlider = ({ images, event }) => {
	function PrevArrowIcon(props) {
		const { className, style, onClick } = props
		return (
			<div
				className={`absolute -translate-y-[50%] top-1/2 z-10 -left-4 hover:cursor-pointer `}
				onClick={onClick}
			>
				<div className='p-1 md:p-3 bg-darker_blue rounded-full shadow-around'>
					<HiArrowNarrowLeft className='text-white lg:w-6 lg:h-6 w-5 h-5' />
				</div>
			</div>
		)
	}

	function NextArrowIcon(props) {
		const { className, style, onClick } = props
		return (
			<div
				className={`absolute -translate-y-[50%] top-1/2 z-10 -right-4 hover:cursor-pointer `}
				onClick={onClick}
			>
				<div className='p-1 md:p-3 bg-darker_blue rounded-full shadow-around'>
					<HiArrowNarrowRight className='text-white lg:w-6 lg:h-6 w-5 h-5' />
				</div>
			</div>
		)
	}

	let settings = {
		arrows: true,
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <PrevArrowIcon />,
		nextArrow: <NextArrowIcon />,
		speed: 500,
	}
	return (
		<div className='lg:w-[70%] w-[300px] sm:w-[95%] rounded-xl mx-auto lg:mt-6 mt-8'>
			<Slider {...settings} className={`leading-[0px]`}>
				{images.map((image, index) => (
					<div className='w-full lg:h-[550px] h-[200px] sm:h-[400px] overflow-hidden relative'>
						<Image
							src={`/images/Activites/${event}/${image}`}
							className='absolute bottom-0 left-[50%] -translate-x-1/2 w-full'
							alt={"Activity Image"}
						></Image>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default GalleryImageSlider
