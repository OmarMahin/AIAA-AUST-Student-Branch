import React from "react"
import { useState } from "react"
import { FaBookOpen, FaRegHeart, FaRegStar } from "react-icons/fa"
import AnimatePage from "../../component/AnimatePage"
import BlogComment from "../../component/BlogComment"
import BlogContent from "../../component/BlogContent"
import Container from "../../component/Container"
import Flex from "../../component/Flex"
import Image from "../../component/Image"

const Proppeller = () => {
	let [liked, setLiked] = useState(false)
	let [favourtie, setFavourtie] = useState(false)

	return (
		<AnimatePage>
			<Container>
				{/* <BlogContent
					content={
						`<<BannerImage>>swashplate/blogBanner.png<</BannerImage>> 

            <<Title>>The Swashplate of a Helicopter: Engineering Marvel in Rotary Wing Flight<</Title>> 

            <<FirstPara>> Helicopters are marvels of modern engineering, capable of taking off, landing vertically, and hovering in place. At the heart of this functionality lies a critical component known as the swashplate. Understanding the swashplate’s role in helicopter flight reveals much about the intricate mechanics of rotary-wing aircraft.<</FirstPara>>

            A Swashplate is a key component in controlling a Helicopter. It is a mechanical
					  device that translates input via the helicopter flight controls into the motion of
					  the main rotor blades. The swashplate consists of two main parts: a stationary
					  swashplate and a rotating swashplate. The stationary swashplate is mounted on the
					  main rotor mast and is connected to the cyclic and collective controls by a series of
					  pushrods. The rotating swashplate is mounted to the stationary swashplate using a
					  bearing and is allowed to rotate with the main rotor mast.
            `
					}
				></BlogContent> */}
				<Flex className={"flex flex-col mt-8"}>
					<Flex
						className={
							"items-center font-poppins font-bold text-darker_blue mb-9 text-[14px] gap-1 justify-end"
						}
					>
						<Flex className='py-2 px-4 rounded-full bg-[#d2deeb] items-center gap-2'>
							<FaBookOpen className={"text-darker_blue"} />
							<span>6 min read</span>
						</Flex>
						<Flex className='h-8 max-w-8  px-2 gap-2 duration-500 rounded-full bg-[#d2deeb] justify-start items-center'>
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
						<Flex className='h-8 max-w-8 px-2 gap-2 duration-500 rounded-full bg-[#d2deeb] justify-start items-center'>
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
					<div
						className={
							"relative w-full h-[400px] after:bg-black/5 after:absolute after:w-full after:h-full overflow-hidden rounded-xl"
						}
					>
						<Image
							src={"/images/blog/propeller/blogBanner.png"}
							alt={"Banner"}
							className={
								"absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[100%]"
							}
						></Image>
					</div>

					<h1 className='my-10 font-poppins text-center font-bold text-darknest_blue text-3xl'>
						Propeller of Aircrafts
					</h1>

					<Flex
						className={
							"flex flex-col gap-7 font-poppins font-medium text-lg leading-9 text-font-color"
						}
					>
						<p className=' indent-10'>
							A propeller is a mechanism that converts rotational motion into thrust in
							aircraft and other vehicles. It consists of blades mounted on a central hub
							that rotates around an axis. When the propeller blades rotate, they interact
							with the surrounding air, generating aerodynamic forces that push the vehicle
							forward or backward, depending on the design and purpose. Important parts of a
							propeller consist of blades, a hub, spinner. Propellers are employed in a
							variety of applications, including aviation (plane propellers), marine (boat
							propellers), and even some land vehicles (such as hovercrafts and specialized
							vehicles). Propeller design and construction vary greatly based on the type of
							vehicle, intended performance qualities, and environmental circumstances in
							which they operate.
						</p>
						<p>Let's start by getting how thurst is generated from a propeller.</p>

						<h3 className='mt-10 text-darker_blue text-xl font-bold'>
							How to generate thrust with a propeller :
						</h3>
						<p>
							Propellers generate thrust by rotating airfoil-shaped blades through the air.
							The interaction of the revolving blades and the oncoming airflow generates
							pressure differences, propelling the aircraft forward (or backward in the case
							of pusher propellers). This thrust is required for the propulsion of aircraft
							and other vehicles using propeller-based propulsion systems. Here is a detailed
							description of how thrust is generated using a propeller :
						</p>

						{/* <Flex className={"flex flex-col items-center gap-3"}>
							<Image
								src={"/images/blog/swashplate/image1.png"}
								alt={"content image 1"}
								className={"w-[60%] rounded-2xl"}
							></Image>
							<span className=' text-darker_blue font-semibold'>
								Figure 1.1: The basic principle of generating thrust by the propeller.{" "}
							</span>
						</Flex> */}

						{/* <h3 className='mt-10 text-darker_blue text-xl font-bold'>
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

						<Flex className={"w-full gap-10 justify-center mt-10"}>
							<Flex className={"flex-col items-center gap-3 w-[40%]"}>
								<video className=' rounded-2xl' controls autoPlay muted loop>
									<source
										src={`/videos/blog/swashplate/video1.webm`}
										type={`video/webm`}
									/>
								</video>
								<span className=' text-darker_blue font-semibold'>Figure 2.1</span>
							</Flex>
							<Flex className={"flex-col items-center gap-3 w-[40%]"}>
								<video className='rounded-2xl' controls autoPlay muted loop>
									<source
										src={`/videos/blog/swashplate/video2.webm`}
										type={`video/webm`}
									/>
								</video>
								<span className=' text-darker_blue font-semibold'>Figure 2.1</span>
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
						</p> */}

						<h4 className='mt-4 text-light-blue text-lg font-bold'>Engine Power:</h4>
						<p>
							The process begins with the engine, which generates mechanical power to rotate
							the propeller. In aircraft, this is usually a piston or turbine engine.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>Blade Rotation:</h4>
						<p>
							The engine's power is transferred to the propeller via a transmission or
							directly to the propeller shaft. As the engine turns the propeller shaft, the
							propeller blades rotate.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>Blade Aerodynamics:</h4>
						<p>
							Each propeller blade is built as an airfoil, much like a wing. The pressure
							difference between the blade's concave (flat or less curved) and convex
							(curved) surfaces provides lift as it passes through the air. This lift is
							directed in the direction that the blade rotates.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>Thrust Direction:</h4>
						<p>
							Due to the angle of attack and blade rotation, the lift generated by each
							propeller blade is slightly forward of the perpendicular axis of rotation. This
							forward-oriented lift generates a force component in the direction of the
							propeller's rotation, which is called thrust.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>Propeller Accuracy:</h4>
						<p>
							The efficiency of thrust generation is determined by various elements,
							including the shape and pitch angle of the propeller blades, the propeller's
							RPM (revolutions per minute), and aerodynamic circumstances (such as air
							density and speed).
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>Total Thrust:</h4>
						<p>
							The propeller's total thrust is calculated by adding the thrust generated by
							each blade. In multi-blade propellers, each blade contributes to the total
							thrust produced.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>
							Variable-Pitch Propellers:
						</h4>
						<p>
							Certain propellers include blades that may vary pitch angle during flight.
							Pilots alter the pitch angle to maximize engine performance at various speeds
							and altitudes, resulting in maximum thrust efficiency.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>
							Regulate and Regulation:
						</h4>
						<p>
							The navigator or computerized systems regulate engine power and propeller RPM
							to control thrust generation, guaranteeing optimal operation and productivity
							throughout the flight phase.
						</p>

						<h3 className='mt-10 text-darker_blue text-xl font-bold'>Propeller’s Pitch :</h3>
						<p>
							Propeller pitch is an important feature of propeller design since it directly
							affects the efficiency and performance of aviation propulsion systems. It
							denotes the angle at which the propeller blades are positioned relative to the
							hub. This angle regulates how much air the propeller can move with each
							rotation, which influences the amount of thrust produced.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>Low Pitch:</h4>
						<p>
							When a propeller has a low pitch angle, the blades are slanted closer to the
							direction of spin. This arrangement moves less air each rotation while using
							less engine power. Low pitch is commonly employed in conditions requiring lower
							speeds or less thrust, such as takeoff or climbing at slower airspeeds. It
							helps to conserve fuel and reduce engine strain while providing appropriate
							propulsion for the initial flight phases.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'> Pitch Control: </h4>
						<p>
							Controlling propeller pitch is an important part of maintaining aircraft
							performance and efficiency. Operators manually modify propeller pitch using
							cockpit controls, which are normally handled via a lever or knob connected to
							mechanical linkages. This provides for exact control over the angle of the
							propeller blades relative to the hub, resulting in optimal thrust output for
							various flight situations. Automatic pitch control systems in modern airplanes
							rely on sophisticated sensors and computer algorithms. These systems
							continuously monitor engine RPM, airspeed, and other factors to dynamically
							modify propeller pitch for optimal efficiency and performance. Electric or
							hydraulic actuators move the blades in response to automated commands,
							decreasing pilot effort and guaranteeing efficient engine operation throughout
							the flight.
						</p>
						<p>
							During emergencies such as engine failure, pilots use feathering tactics to
							reduce drag. Feathering includes moving the propeller blades parallel to the
							airflow, which reduces resistance and improves glide performance. Proper
							training and procedural adherence are vital for proper feathering, which
							improves aircraft safety in critical conditions.
						</p>
						<p>
							In essence, accurate pitch control—whether manual or automatic—is vital to
							achieving optimal propulsion efficiency, ensuring safe flight operations, and
							maximizing the capabilities of propeller-powered aircraft.
						</p>

						<h3 className='mt-10 text-darker_blue text-xl font-bold'>
							Different types of propellers are used in various aircraft:
						</h3>
						<p>
							The type of propeller used is determined by the aircraft's size, engine type,
							performance needs, efficiency considerations, and operational conditions. Each
							type of propeller has distinct advantages in terms of performance, fuel
							efficiency, noise levels, and operating characteristics, customized to the
							individual needs of the aircraft and its mission.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>
							{" "}
							Fixed pitch propellers:
						</h4>
						<p>
							Fixed-pitch propellers are used by many small piston-engine aircraft, including
							training and pleasure flights. These propellers are simple to construct and
							cost-effective, making them suited for general aviation applications where
							variable pitch is not required.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>
							{" "}
							Variable-Pitch Propellers (Controllable-Pitch Propellers, or CPP):
						</h4>
						<p>
							Fixed-pitch propellers are used by many small piston-engine aircraft, including
							training and pleasure flights. These propellers are simple to construct and
							cost-effective, making them suited for general aviation applications where
							variable pitch is not required.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>-General Aviation:</h4>
						<p>
							Variable-pitch propellers are commonly used on high-performance single- and
							multi-engine aircraft. These propellers let pilots change the pitch angle of
							the blades while flying, maximizing engine performance across several flight
							phases such as takeoff, climb, cruise, and descent.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>-Turboprop Aircraft:</h4>
						<p>
							Nearly all turboprop-powered aircraft have controllable-pitch propellers.
							Turboprop engines are designed to operate most efficiently within a specified
							RPM range, and variable-pitch propellers aid in maintaining optimal engine RPM
							under changing flight conditions.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>
							Constant-Speed Propellers:
						</h4>
						<p>
							Some high-performance piston-engine aircraft and many turboprop aircraft have
							constant-speed propellers. These propellers automatically alter their pitch to
							maintain the pilot's desired RPM. Constant-speed propellers provide effective
							engine performance in a variety of flight circumstances and speeds.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>
							Counter-rotating propellers:
						</h4>
						<p>
							Some military aircraft, particularly fighters and transport aircraft, have
							counter-rotating propellers. These propellers are made up of two sets of blades
							that rotate in opposite directions on the same engine. Counter-rotating
							propellers reduce torque effects and improve stability and overall aircraft
							performance.
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>Pusher Propellers:</h4>
						<p>
							Pusher propellers are situated behind the engine and move the aircraft forward
							rather than pulling it (like tractor propellers). They are frequently found on
							experimental aircraft, amphibious planes, and some unmanned aerial vehicles
							(UAVs).
						</p>

						<h4 className='mt-4 text-light-blue text-lg font-bold'>
							Multi-Blade Propellers:
						</h4>
						<p>
							Multi-blade propellers are used on some large transport aircraft, notably those
							powered by turboprop or high-powered piston engines. These propellers can
							contain three or more blades, which can improve efficiency and minimize noise
							compared to designs with fewer blades.
						</p>

						<h3 className='mt-10 text-darker_blue text-xl font-bold'>
							Effect of Propellers on Aircraft:
						</h3>
						<p>
							Propellers are vital components of propeller-driven aircraft, as they generate
							push to propel the aircraft forward through the air. They are made up of
							several blades attached to a central hub that rotates around an axis powered by
							the engine. According to Newton's third equation of motion, the propeller
							blades accelerate air rearward, resulting in a force known as thrust. Propeller
							design and configuration vary greatly depending on aircraft type and intended
							usage. Fixed-pitch propellers have blades that are set at a fixed angle, making
							them simple and reliable for light aircraft and general aviation.
							Variable-pitch propellers, on the other hand, have blades that may change angle
							while in flight. This adaptability enables pilots to optimize engine
							performance across all flight phases, from takeoff and climb to cruising and
							descent. Efficient propeller design is critical for maximizing fuel economy and
							performance. Propellers are designed to efficiently convert engine power into
							thrust, reducing fuel consumption while maintaining desired speeds and
							operational capabilities. Advances in materials and aerodynamic research
							continue to increase propeller efficiency, lowering noise levels and improving
							overall aircraft performance. Propellers also influence aircraft control and
							maneuverability. The distribution of thrust influences how the aircraft
							responds to pilot inputs, affecting its stability during maneuvers and ensuring
							smooth control under a variety of flight conditions. Pilots are educated to
							control the specific characteristics of each aircraft's propeller system,
							including takeoff, landing, and emergency procedures. Additionally, propellers
							play an important part in safety. In the event of an engine failure, pilots can
							modify the propeller pitch or feather the blades to reduce drag and improve
							glide performance, giving them enough time to carry out emergency procedures
							and safely land the aircraft. Overall, propellers combine a combination of
							mechanical accuracy and aerodynamic concepts that are critical to the reliable
							and efficient functioning of propeller-driven aircraft. Their constant progress
							and refinement help to advance aviation technology, influencing the
							capabilities and sustainability of modern air transportation.
						</p>
					</Flex>
					<Flex className={"flex flex-col items-end my-16 font-poppins gap-2"}>
						<span className='font-medium text-light-blue'>By</span>
						<span className='font-bold text-darker_blue text-lg'>Tasfia Jaman</span>
						<span className='font-bold text-darker_blue'>02 July 2024</span>
					</Flex>
				</Flex>

				<BlogComment></BlogComment>
			</Container>
		</AnimatePage>
	)
}

export default Proppeller
