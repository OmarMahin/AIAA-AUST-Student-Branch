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
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import Login from "./pages/Login"
import MyAccount from "./pages/MyAccount"
import SignUp from "./pages/SignUp"
import Team from "./pages/Team"

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path='/'
				element={<RootLayout />}
			>
				<Route index element={<Home></Home>}></Route>
				<Route path='/about' element={<About></About>}></Route>
				<Route path='/activites' element={<Activities></Activities>}></Route>
				<Route path='/team' element={<Team></Team>}></Route>
				<Route path='/contact' element={<ContactUs></ContactUs>}></Route>
				<Route path='/login' element={<Login></Login>}></Route>
				<Route path='/signup' element={<SignUp></SignUp>}></Route>
				<Route path='/myaccount' element={<MyAccount></MyAccount>}></Route>
				<Route path='/admin' element={<AdminPage></AdminPage>}></Route>
			</Route>
		)
	)

	return <RouterProvider router={router} />
}

export default App
