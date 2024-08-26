import React, { useState } from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import Footer from "../Footer"
import Navbar from "../Navbar"
import { ToastContainer, Slide } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import InitialLoadingAnimation from "../InitialLoadingAnimation"
import axios from "axios"

const RootLayout = () => {

	const [initialLoading, setInitialLoading] = useState(true)
	const onScreenLoaded = (e) => {
		const screen = document.querySelector("#loading-screen")
		const root = document.querySelector("#root-layout")

		screen.addEventListener("animationend", (e) => {
			if (e.animationName === 'screen-fade-out') {
				root.removeChild(screen)
			}
		})
	}

	window.addEventListener("beforeunload",(e)=>{
		
		console.log("unload")
	})
	return (
		<div id='root-layout' className={`${initialLoading ? "overflow-hidden" : "overflow-auto"}`}>
			<InitialLoadingAnimation contentRef={onScreenLoaded}></InitialLoadingAnimation>
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
				transition={Slide}
			/>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	)
}

export default RootLayout
