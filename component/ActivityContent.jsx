import React from "react"
import ActivityPageCover from "./ActivityPageCover"
import Flex from "./Flex"

const ActivityContent = ({ image, heading, date, content, videoHeading, video, videoType }) => {
	let paras = content.split(/\r?\n|\r|\n/g)
	return (
		<div className=" mb-28">
			<ActivityPageCover image={image}></ActivityPageCover>
			<Flex className={"lg:justify-between mt-11 lg:items-center items-start flex lg:flex-row flex-col lg:gap-0 gap-5"}>
				<h3 className=' font-poppins font-bold text-darker_blue md:text-[26px] text-xl'>{heading}</h3>
				<div className=' bg-darker_blue lg:px-7 py-2 px-4 rounded-3xl'>
					<h4 className=' font-poppins font-medium text-white lg:text-lg text-sm block'>{date}</h4>
				</div>
			</Flex>
			<div className=" lg:mt-24 mt-10 font-poppins font-medium text-lg leading-8 text-justify">
        {paras.map((para) => (para ? <p>{para}</p> : <br></br>))}
      </div>
      {videoHeading && video ?
      <div>
        <h3 className=' mt-11 font-poppins font-bold text-light-blue lg:text-[26px] text-xl mb-11'>{videoHeading}</h3>
        <video className = 'md:w-[80%] w-full mx-auto' controls>
          <source src={`/videos/${video}`} type = {`video/${videoType}`} />
        </video>
      </div>
      :
      ""
      }
		</div>
	)
}

export default ActivityContent
