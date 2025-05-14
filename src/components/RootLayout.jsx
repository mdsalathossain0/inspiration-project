import React from 'react'
import Nav from '../layouts/Nav'
import Footer from '../layouts/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout