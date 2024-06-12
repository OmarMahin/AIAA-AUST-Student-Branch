import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'

const RootLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <ScrollRestoration></ScrollRestoration>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default RootLayout