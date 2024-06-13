import React from "react"
import Container from "./Container"
import Flex from "./Flex"
import TeamMember from "./TeamMember"

const TeamContent = () => {
	return (
		<div className=' mt-16'>
			<Flex className={"flex flex-col items-center gap-3 mb-24"}>
				<h3 className=' font-poppins font-bold text-darker_blue text-4xl'>
					Our Remarkable Team Members
				</h3>
				<h3 className=' font-poppins font-bold text-darker_blue text-3xl'>
					Executive Committee Fall 2023
				</h3>
			</Flex>
			<Flex className={"flex flex-col items-center gap-5 mb-40"}>
				{/* Professor */}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col"}>
					<TeamMember
						name={"Prof. Dr. Mazharul Islam"}
						image={""}
						position={"Faculty Advisor"}
						deparment={"MPE"}
					></TeamMember>
					<TeamMember
						name={"Md. Ishtiaque Hossain"}
						image={""}
						position={"Faculty Co-Advisor"}
						deparment={"MPE"}
					></TeamMember>
				</Flex>

				{/* Chairs */}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col mt-24"}>
					<TeamMember
						name={"Anas AL Rafin"}
						image={""}
						position={"Chair"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Tahzeeb Rahman Alvi"}
						image={""}
						position={"Vice Chair"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Nakibul Islam    "}
						image={""}
						position={"Secretary"}
						deparment={"ME"}
					></TeamMember>
				</Flex>

				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col"}>
					<TeamMember
						name={"Rifah Tasfia Kabir"}
						image={""}
						position={"Additional Secretary"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"Fabbiha Tahsin Prova"}
						image={""}
						position={"Additional Secretary"}
						deparment={"CSE"}
					></TeamMember>
					<TeamMember
						name={"Munshi Redwan Elahi"}
						image={""}
						position={"Treasurer"}
						deparment={"ME"}
					></TeamMember>
				</Flex>

				{/* Admin Team */}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col mt-24"}>
					<TeamMember
						name={"Mohtasim Ahsan Labib"}
						image={"Mohtasim Ahsan Labib.png"}
						position={"Administrative Operations Director"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Yeasin Arafath Mahid"}
						image={"Yeasin Arafath Mahid.png"}
						position={"Administrative Operations Executive"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Jahirul Islam"}
						image={"Jahirul Islam.png"}
						position={"Administrative Operations Executive"}
						deparment={"ME"}
					></TeamMember>
				</Flex>

				{/* Organizing Team*/}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col mt-24"}>
					<TeamMember
						name={"Sakib Md. Minhajul Alam"}
						image={"Sakib Md Minhajul Alam.png"}
						position={"Organizing Director"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Shahedul Alam"}
						image={"Shahedul Alam.png"}
						position={"Organizing Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"Md. Zawadul Islam Rafee"}
						image={"Md Zawadul Islam Rafee.png"}
						position={"Organizing Executive"}
						deparment={"EEE"}
					></TeamMember>
				</Flex>
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col"}>
					<TeamMember
						name={"Ahnaf Ittesaf Zarif"}
						image={"Ahnaf Ittesaf Zarif.png"}
						position={"Organizing Executive"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Md. Al Noman Ruhin"}
						image={"MD Al Noman Ruhin.png"}
						position={"Jr Organizing Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"Amit Chakraborty"}
						image={"Amit Chakraborty.png"}
						position={"Jr Organizing Executive"}
						deparment={"EEE"}
					></TeamMember>
				</Flex>

				{/* Creative Team*/}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col mt-24"}>
					<TeamMember
						name={"Abdullah Al Mreenmay"}
						image={"Abdullah Al Mreenmay.png"}
						position={"Creative Design and Media Director"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Ashiqur Islam Niloy"}
						image={"Ashiqur Islam Niloy.png"}
						position={"Creative Design and Media Executive"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Md. Ahsanul Kabir"}
						image={"MD AHSANUL KABIR.png"}
						position={"Creative Design and Media Executive"}
						deparment={"ME"}
					></TeamMember>
				</Flex>
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col"}>
					<TeamMember
						name={"Hasan Ul Hoq"}
						image={"Hasan Ul Hoq.png"}
						position={"Creative Design and Media Executive"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Tanmim Rahman Feeha"}
						image={"Tanmim Rahman Feeha.png"}
						position={"Jr Creative Design and Media Executive"}
						deparment={"EEE"}
					></TeamMember>
				</Flex>

				{/* Technical Team*/}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col mt-24"}>
					<TeamMember
						name={"K. M. Mosaddique Enam"}
						image={"K M Mosaddique Enam.png"}
						position={"Technical Projects Executive"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Md. Atesham Muzammel Bhuiyan"}
						image={"MD ATESHAM MUZAMMEL BHUIYAN.png"}
						position={"Technical Projects Executive"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Md. Meheraj"}
						image={"Md Meheraj.png"}
						position={"Technical Projects Executive"}
						deparment={"EEE"}
					></TeamMember>
				</Flex>
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col"}>
					<TeamMember
						name={"Khorshed Alam"}
						image={"Khorshed Alam.png"}
						position={"Technical Projects Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"Samin Yeaser"}
						image={""}
						position={"Technical Projects Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"MD.Iftaker Hossain Rafi"}
						image={"MD Iftaker Hossain Rafi.png"}
						position={"Technical Projects Executive"}
						deparment={"EEE"}
					></TeamMember>
				</Flex>
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col"}>
					<TeamMember
						name={"Md. Fahim Ahmed"}
						image={"Md Fahim Ahmed.png"}
						position={"Jr Technical Projects Executive"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Mehrab Hossain"}
						image={"Mehrab Hossain.png"}
						position={"Jr Technical Projects Executive"}
						deparment={"ME"}
					></TeamMember>
				</Flex>

				{/* Web Develoment Team*/}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col mt-24"}>
					<TeamMember
						name={"Syed Towshik"}
						image={"Syed Towshik.png"}
						position={"Web Development & Publicity Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"Abrar Jahin Sachcha"}
						image={"Abrar Jahin Sachcha.png"}
						position={"Web Development & Publicity Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"Md. Omar Karim"}
						image={"Md Omar Karim.png"}
						position={"Jr Web Development & Publicity Executive"}
						deparment={"ME"}
					></TeamMember>
				</Flex>

				{/* PR Team*/}
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col mt-24"}>
					<TeamMember
						name={"Zubayer Bin Rahman"}
						image={""}
						position={"Public Relations & Digital Marketing Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"Mst Afia Motahara Keya"}
						image={"Mst Afia Motahara Keya.png"}
						position={"Public Relations & Digital Marketing Executive"}
						deparment={"ME"}
					></TeamMember>
					<TeamMember
						name={"Afifa Tabassum Promity"}
						image={"Afifa Tabassum Promity.png"}
						position={"Public Relations & Digital Marketing Executive"}
						deparment={"ME"}
					></TeamMember>
				</Flex>
				<Flex className={"flex lg:gap-20 gap-8 lg:flex-row flex-col"}>
					<TeamMember
						name={"Tasfia Jaman"}
						image={"Tasfia Jaman.png"}
						position={"Public Relations & Digital Marketing Executive"}
						deparment={"EEE"}
					></TeamMember>
					<TeamMember
						name={"Ali Tahmid"}
						image={"Ali Tahmid Niloy.png"}
						position={"Jr Public Relations & Digital Marketing Executive"}
						deparment={"ME"}
					></TeamMember>
				</Flex>
			</Flex>
		</div>
	)
}

export default TeamContent
