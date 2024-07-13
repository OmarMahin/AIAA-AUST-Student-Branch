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
			<div className={`absolute top-1/2 z-10 -left-3 hover:cursor-pointer `} onClick={onClick}>
				<div className='px-3 py-3 lg:p-4 bg-darker_blue rounded-full shadow-around'>
					<HiArrowNarrowLeft className='text-white w-6 h-6' />
				</div>
			</div>
		)
	}

	function NextArrowIcon(props) {
		const { className, style, onClick } = props
		return (
			<div className={`absolute top-1/2 z-10 -right-3 hover:cursor-pointer `} onClick={onClick}>
				<div className='px-3 py-3 lg:p-4 bg-darker_blue rounded-full shadow-around'>
					<HiArrowNarrowRight className='text-white w-6 h-6' />
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
        <Flex className={'justify-center'}>

		<Slider {...settings} className = {'w-[80%]'}>
			{images.map((image, index) => (
				<div className='w-full lg:h-[600px] md:h-[300px] h-[200px] rounded-2xl overflow-hidden relative lg:mt-14 mt-10'>
					<Image
						src={`/images/Activites/${event}/${image}`}
						className='absolute left-[50%] -translate-x-1/2 w-full'
						alt={"Activity Image"}
					></Image>
				</div>
			))}
		</Slider>
        </Flex>
	)
}

export default GalleryImageSlider
