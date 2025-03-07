import React from 'react'
import Footer from '../COMMAN/Footer'
import Header from '../COMMAN/Header'
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='relative'>
        < Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
