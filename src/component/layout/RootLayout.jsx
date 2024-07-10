import React from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import Footer from "../Footer"
import Navbar from "../Navbar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
	return (
		<div className='overflow-x-hidden'>
			<Navbar></Navbar>
			<ScrollRestoration></ScrollRestoration>
			<ToastContainer
        className={"w-[400px] text-center font-poppins font-semibold text-[16px]"}
				position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
			/>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	)
}

export default RootLayout
