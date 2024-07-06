import React from "react"
import { useState } from "react"
import { FaBookOpen, FaRegHeart, FaRegStar } from "react-icons/fa"
import { HiArrowSmLeft } from "react-icons/hi"
import { Link } from "react-router-dom"
import AnimatePage from "../../component/AnimatePage"
import BlogComment from "../../component/BlogComment"
import BlogContent from "../../component/BlogContent"
import Container from "../../component/Container"
import Flex from "../../component/Flex"
import Image from "../../component/Image"

const Swashplate = () => {
	let [liked, setLiked] = useState(false)
	let [favourtie, setFavourtie] = useState(false)

	return (
		<AnimatePage>
			<Container>
				<Flex className={"flex flex-col mt-8"}>
					<Flex
						className={
							"flex mt-20 justify-center lg:mt-0 items-center font-poppins font-bold text-darker_blue mb-9 text-[14px] gap-1 lg:justify-between"
						}
					>
						<Link to={'/blog'}>
						<HiArrowSmLeft className="h-8 w-8 p-1 bg-[#d2deeb] rounded-full "/>
					</Link>
					<Flex className={'flex lg:justify-end justify-center gap-1'}>
						

						<Flex className='flex py-2 px-4 rounded-full bg-[#d2deeb] items-center gap-2'>
							<FaBookOpen className={"text-darker_blue"} />
							<span>5 min read</span>
						</Flex>
						<Flex className='flex h-8 max-w-8  px-2 gap-2 duration-500 rounded-full bg-[#d2deeb] justify-start items-center'>
							<span>
								{liked ? (
									<FaHeart
										className={`w-4 h-4 text-red-400 block hover:cursor-pointer`}
										onClick={() => {
											setLiked(!liked)
										}}
									></FaHeart>
								) : (
									<FaRegHeart
										className={`w-4 h-4 block hover:cursor-pointer`}
										onClick={() => {
											setLiked(!liked)
										}}
									/>
								)}
							</span>
						</Flex>
						<Flex className='flex h-8 max-w-8  px-2 gap-2 duration-500 rounded-full bg-[#d2deeb] justify-start items-center'>
							<span>
								{favourtie ? (
									<FaStar
										className={`w-4 h-4 text-orange-500 block hover:cursor-pointer duration-300`}
										onClick={() => {
											setFavourtie(!favourtie)
										}}
									></FaStar>
								) : (
									<FaRegStar
										className={`w-4 h-4 block hover:cursor-pointer`}
										onClick={() => {
											setFavourtie(!favourtie)
										}}
									/>
								)}
							</span>
						</Flex>
					</Flex>
					</Flex>
					<div
						className={
							"relative w-full h-[200px] lg:h-[400px] after:bg-black/5 after:absolute after:w-full after:h-full overflow-hidden rounded-xl"
						}
					>
						<Image
							src={"/images/blog/swashplate/blogBanner.png"}
							alt={"Banner"}
							className={
								"absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 h-full lg:w-[100%]"
							}
						></Image>
					</div>

					<h1 className='my-10 font-poppins text-center font-bold text-darknest_blue lg:text-3xl text-2xl'>
						The Swashplate of a Helicopter: Engineering Marvel in Rotary Wing Flight
					</h1>

					<Flex
						className={
							"flex flex-col gap-7 font-poppins font-medium lg:text-lg lg:leading-9 leading-8 text-font-color"
						}
					>
						<p className=' indent-10'>
							Helicopters are marvels of modern engineering, capable of taking off, landing
							vertically, and hovering in place. At the heart of this functionality lies a
							critical component known as the swashplate. Understanding the swashplate’s role
							in helicopter flight reveals much about the intricate mechanics of rotary-wing
							aircraft.
						</p>
						<p>
							A Swashplate is a key component in controlling a Helicopter. It is a mechanical
							device that translates input via the helicopter flight controls into the motion
							of the main rotor blades. The swashplate consists of two main parts: a
							stationary swashplate and a rotating swashplate. The stationary swashplate is
							mounted on the main rotor mast and is connected to the cyclic and collective
							controls by a series of pushrods. The rotating swashplate is mounted to the
							stationary swashplate using a bearing and is allowed to rotate with the main
							rotor mast.
						</p>
						<h3 className='mt-10 text-darker_blue text-xl font-bold'>
							How a Blade Creates Thrust:
						</h3>
						<p>
							To know about how swashplate works, let's first get an idea of how thrust is
							generated using propellers. Propeller blades or rotor blades are like wings:
							They move through the air, and when they have the right angle of attack, they
							bend the air backward (in the case of a propeller) or downwards (in the case of
							a helicopter). On a wing, this causes downwash; on a propeller, this causes a
							prop blast. Both are essentially the same. Air gets a kick in a direction
							orthogonal to the movement of the airfoil, whether it is on a wing, a
							propeller, or a rotor. To ensure the angle of attack is correct, a helicopter
							rotor uses a mechanism called collective pitch control to vary the angle of
							attack on all blades simultaneously. Additionally, the rotor airfoil is
							carefully trimmed to have no chordwise shift in the center of pressure over an
							angle of attack.
						</p>

						<Flex className={"flex flex-col items-center gap-3"}>
							<Image
								src={"/images/blog/swashplate/image1.png"}
								alt={"content image 1"}
								className={"w-[60%] rounded-2xl"}
							></Image>
							<span className=' text-darker_blue font-semibold'>
								Figure 1.1: The basic principle of generating thrust by the propeller.{" "}
							</span>
						</Flex>

						<h3 className='mt-10 text-darker_blue text-xl font-bold'>
							How do Helicopter Swashplates Work:
						</h3>
						<p>
							There are two parts to the swashplate. The upper part contains a spherical
							bearing that allows the whole assembly to rock on the main shaft, which goes
							through the middle. The four balls are connected to the blades by push rods,
							allowing the blades to rock on their shafts. The upper part fits into a large
							bearing in the lower part. This part stays stationary while the upper part
							rotates with the rotor head. The balls on the lower part are connected to the
							control pushrods, preventing the bottom part from rotating. Moving the cyclic
							control tilts the lower part in the same direction as the cyclic control and
							consequently tilts the upper part in the same direction. One of the upper links
							is coupled to a special link that makes the upper part rotate on the main
							shaft. The whole assembly can slide up and down the main shaft on the spherical
							bearing. This is done by moving the collective control up and down, depending
							on whether the pilot wants to climb or descend the helicopter. The process of
							mixing the two controls to manage both direction and climb can be mechanical,
							hydraulic, or, in the case of model helicopters, controlled by a computer
							mixer.
						</p>

						<p>
							The swashplate, located in the rotor hub, is a key component in controlling a
							helicopter. Pilot control inputs tilt and raise or lower the swashplate,
							effectively feathering the rotor blades. Pulling the collective control up
							raises the swashplate (pushing it down lowers it). Pushing the longitudinal
							cyclic forward typically tilts the swashplate down in the front and up in the
							back. Pushing the lateral cyclic right tilts the right side of the swashplate
							down and the left side up. Pitch links connect the upper (rotating) swashplate
							to the pitch horns on the rotor blades, outboard of the feathering hinge.
							Raising the pitch horns feathers the blade, leading edge up. Lowering them
							decreases feathering. There is typically a 90-degree azimuth offset between the
							pitch link attachment point on the swashplate and the blade it’s connected to.
						</p>

						<Flex className={"flex flex-col items-center lg:flex-row lg:w-full gap-10 justify-center mt-10"}>
							<Flex className={"flex flex-col items-center gap-3 lg:w-[40%] w-[90%]"}>
								<video className=' rounded-2xl' controls autoPlay muted loop>
									<source
										src={`/videos/blog/swashplate/video1.webm`}
										type={`video/webm`}
									/>
								</video>
								<span className=' text-darker_blue font-semibold'>Figure 2.1</span>
							</Flex>
							<Flex className={"flex flex-col items-center gap-3 lg:w-[40%] w-[90%]"}>
								<video className='rounded-2xl' controls autoPlay muted loop>
									<source
										src={`/videos/blog/swashplate/video2.webm`}
										type={`video/webm`}
									/>
								</video>
								<span className=' text-darker_blue font-semibold'>Figure 2.2</span>
							</Flex>
						</Flex>

						<p>
							Figure 2.1 demonstrates how the pitch link slides up and down due to the angle
							of the plates. Here, the pitch link is shown in dark blue color while the
							rotating plates are shown in light and dark green respectively. (Note: The
							mechanism is demonstrated for one blade only){" "}
						</p>

						<p>
							Figure 2.2 demonstrates how the up-and-down movement of the pitch link tilts
							the blade at a certain angle which changes the pitch angle for the helicopter.
							Here, the pitch link is shown in a dark blue color. (Note: The mechanism is
							demonstrated for one blade only){" "}
						</p>

						<h3 className='mt-10 text-darker_blue text-xl font-bold'>
							Advantages of Using a Swashplate in Modern Helicopters:
						</h3>
						<p>
							When we think of helicopters, the image of rotor blades slicing through the air
							often comes to mind. However, behind this mesmerizing dance of aerodynamics
							lies a crucial component that makes it all possible: the swashplate.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>
							Mastering Flight Control: Cyclic and Collective Pitch
						</h4>
						<p>
							At the core of helicopter maneuverability is the swashplate mechanism. This
							ingenious device allows pilots to control both the cyclic and collective pitch
							of the rotor blades. What does this mean? Essentially, it enables the
							helicopter to roll, pitch, and change its lift. By adjusting the angle of the
							rotor blades, the pilot can direct the helicopter to move in any desired
							direction. This level of control is crucial for the precision and versatility
							that helicopters are known for, from hovering in place to performing complex
							aerial maneuvers.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>
							Boosting Efficiency and Reducing Power Consumption
						</h4>
						<p>
							In the quest for efficiency, the swashplate plays a key role. Interestingly,
							while a conventional swashplate-controlled rotor system is highly effective, a
							swashplate-less configuration can offer some advantages, particularly in
							high-speed forward flight. By reducing parasite drag, a swashplate-less design
							can moderately lower power consumption during these conditions. However, it’s
							worth noting that in hover and low-speed flight, the power consumption remains
							similar to that of a swashplate system. This balance ensures that helicopters
							can perform efficiently across a range of flight conditions.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>
							Simplifying Actuation Requirements
						</h4>
						<p>
							One of the notable benefits of the swashplate system is its reduced actuation
							requirements. The trailing-edge flap deflections needed to trim the rotor are
							moderate, leading to smaller actuation demands. This simplification not only
							makes the swashplate system more efficient but also reduces the overall
							complexity of the design. For engineers and maintenance crews, this translates
							to a more streamlined and manageable system, enhancing reliability and ease of
							operation.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>
							Versatile Adaptability Across Rotor Configurations
						</h4>
						<p>
							The versatility of the swashplate is another aspect that cannot be overlooked.
							It can be adapted to accommodate various rotor configurations, whether in
							single-rotor or dual-rotor helicopters. This adaptability ensures that the
							swashplate mechanism remains relevant across a wide range of helicopter models,
							catering to diverse needs and applications in the aviation sector.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>
							Cutting Weight and Maintenance Costs
						</h4>
						<p>
							The swashplate system, while critical, does add to the weight, drag, and
							maintenance burden of a helicopter. However, advancements in design have led to
							significant improvements. A swashplate-less design, for instance, can mitigate
							some of these drawbacks by reducing weight and maintenance needs. This
							reduction not only improves the helicopter’s overall mission performance and
							range but also lowers operating costs. In an industry where efficiency and
							cost-effectiveness are paramount, these savings are substantial.
						</p>

						<p className='mt-16'>
							In summary, the swashplate is much more than a mere component; it is the heart
							of modern helicopter flight control. It provides precise maneuverability,
							improves efficiency, and reduces complexity, making it a cornerstone of
							helicopter design. While it does introduce some weight and maintenance
							considerations, the benefits it offers generally far outweigh these drawbacks.
							For most helicopter applications, the swashplate remains an indispensable
							mechanism, enabling the remarkable capabilities that helicopters are celebrated
							for. So, the next time you see a helicopter gracefully hovering or swiftly
							cruising through the sky, remember the swashplate—an engineering marvel that
							makes it all possible.
						</p>
					</Flex>
					<Flex className={"flex flex-col items-end my-16 font-poppins gap-2"}>
						<span className='font-medium text-light-blue'>By</span>
						<span className='font-bold text-darker_blue text-lg'>Ali Tahmid Niloy</span>
						<span className='font-bold text-darker_blue'>28 June 2024</span>
					</Flex>
				</Flex>

				<BlogComment></BlogComment>
			</Container>
		</AnimatePage>
	)
}

export default Swashplate
