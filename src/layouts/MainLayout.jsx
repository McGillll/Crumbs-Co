import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

export const MainLayout = () => {
  return (
    <>
        <div className='relative'>
            <div className='fixed inset-0 left-0 top-0 w-full z-50'>
                <NavBar />
            </div>
        </div>

        <div className=''>
            <Outlet />
        </div>

        <div>
          <Footer />
        </div>
    </>
  )
}
