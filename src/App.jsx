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

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Home></Home>}></Route>
				<Route path='about' element={<About></About>}></Route>
				<Route path='activites' element={<Activities></Activities>}></Route>
				<Route path='committee' element={<Team></Team>}></Route>
				<Route path='joinus' element={<JoinUs></JoinUs>}></Route>
				<Route path='/blog' >
					<Route index element={<Blog></Blog>}></Route>
				<Route
					path='the_swashplate_of_a_helicopter'
					element={<Swashplate></Swashplate>}
				></Route>
				<Route
					path='propeller_of_an_aircraft'
					element={<Proppeller></Proppeller>}
				></Route>
				</Route>
				<Route path='contact' element={<ContactUs></ContactUs>}></Route>
				<Route path='login' element={<Login></Login>}></Route>
				<Route path='signup' element={<SignUp></SignUp>}></Route>
				<Route path='myaccount' element={<MyAccount></MyAccount>}></Route>
				<Route path='admin' element={<AdminPage></AdminPage>}></Route>
			</Route>
		)
	)

	return <RouterProvider router={router} />
}

export default App
