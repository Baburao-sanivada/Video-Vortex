import React from 'react'
import SideBar from './SideBar'
import { BrowserRouter, Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex scroll-smooth'>
        <SideBar/>
        {/* Gives the Sub Child According to Path */}
        <Outlet/>
    </div>
  )
}

export default Body