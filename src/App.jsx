import { AnimatePresence } from "framer-motion"
import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
	RouterProvider,
	useLocation,
} from "react-router-dom"
import RootLayout from "./component/layout/RootLayout"
import About from "./pages/About"
import Activities from "./pages/Activities"
import AdminPage from "./pages/AdminPage"
import Blog from "./pages/Blog"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import JoinUs from "./pages/JoinUs"
import Login from "./pages/Login"
import MyAccount from "./pages/MyAccount"
import SignUp from "./pages/SignUp"
import Team from "./pages/Team"
import Swashplate from "./pages/Blogs/Swashplate"
import Proppeller from "./pages/Blogs/Propeller"
import ForgetPassword from "./pages/ForgetPassword"
import PasswordChange from "./pages/PasswordChange"
import OTP_Page from "./pages/OTP_Page"
import GM_Recruitment_F23 from "./pages/Activites/GM_Recruitment_F23"
import Seminer_F23 from "./pages/Activites/Seminer_F23"
import DBF_Information from "./pages/DBF_Information"
import RegionalStudentConf from "./pages/RegionalStudentConf"
import DesignCompetition from "./pages/DesignCompetition"
import SpaceportAmeriacaCup from "./pages/SpaceportAmeriacaCup"
import VolunteerOpportunites from "./pages/VolunteerOpportunites"
import PageNotFound from "./pages/PageNotFound"
import Test from "./pages/Test"
import LoadingScreen from "./pages/LoadingScreen"
import RescueAndReliefBot from "./pages/Activites/RescueAndReliefBot"

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Home></Home>}></Route>
				<Route path='about' element={<About></About>}></Route>
				<Route path='activites'>
					<Route index element={<Activities></Activities>}></Route>
					<Route
						path='gm_recruitment_fall23'
						element={<GM_Recruitment_F23></GM_Recruitment_F23>}
					></Route>
					<Route
						path='aasb_seminar_fall23'
						element={<Seminer_F23></Seminer_F23>}
					></Route>
					<Route
						path='rescue_and_relief_bot'
						element={<RescueAndReliefBot></RescueAndReliefBot>}
					></Route>
				</Route>
				<Route path='design_build_fly' element={<DBF_Information></DBF_Information>}></Route>
				<Route path='regional_student_conference' element={<RegionalStudentConf></RegionalStudentConf>}></Route>
				<Route path='designCompetition' element={<DesignCompetition></DesignCompetition>}></Route>
				<Route path='spaceport_america_cup' element={<SpaceportAmeriacaCup></SpaceportAmeriacaCup>}></Route>
				<Route path='volunteer_opportunities' element={<VolunteerOpportunites></VolunteerOpportunites>}></Route>
				<Route path='committee' element={<Team></Team>}></Route>
				<Route path='joinus' element={<JoinUs></JoinUs>}></Route>
				<Route path='/blog'>
					<Route index element={<Blog></Blog>}></Route>
					<Route
						path='the_swashplate_of_a_helicopter'
						element={<Swashplate></Swashplate>}
					></Route>
					<Route path='propeller_of_an_aircraft' element={<Proppeller></Proppeller>}></Route>
				</Route>
				<Route path='contact' element={<ContactUs></ContactUs>}></Route>
				{/* <Route path='login' element={<Login></Login>}></Route>
				<Route path='forget-password' element={<ForgetPassword></ForgetPassword>}></Route>
				<Route path='password-change/:id' element={<PasswordChange></PasswordChange>}></Route>
				<Route path='user-otp/:id' element={<OTP_Page></OTP_Page>}></Route>
				<Route path='signup' element={<SignUp></SignUp>}></Route>
				<Route path='myaccount' element={<MyAccount></MyAccount>}></Route>
				<Route path='admin' element={<AdminPage></AdminPage>}></Route>
				<Route path='test' element={<Test></Test>}></Route>
				<Route path='loading' element={<LoadingScreen></LoadingScreen>}></Route> */}
				<Route path='*' element={<PageNotFound></PageNotFound>}></Route>
			</Route>
		)
	)

	return <RouterProvider router={router} />
}

export default App
