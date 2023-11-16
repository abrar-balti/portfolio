import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
   <>

   <Outlet/>
   <Header/>
   </>
  )
}

export default Layout