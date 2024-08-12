import React from 'react'
import Header from './components/Header/Header'
import SubHeader from './components/SubNev/SubNav'
import LibraryNav from './components/LibraryNav/LibraryNav';
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <SubHeader/>
    <LibraryNav/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout