import React from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import Footer from "../Footer"
import Navbar from "../Navbar"
import { ToastContainer, Slide } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const RootLayout = () => {
	return (
		<div>
			<Navbar></Navbar>
			<ScrollRestoration></ScrollRestoration>
			<ToastContainer
				className={"w-[400px] text-center font-poppins font-semibold text-[16px] duration-700"}
				position='top-center'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				theme='light'
				transition = {Slide}
			/>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	)
}

export default RootLayout
