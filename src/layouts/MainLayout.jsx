import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { CallToAction } from '../components/CallToAction'

export const MainLayout = () => {
  return (
    <>
        <div className='relative'>
            <div className='fixed inset-0 left-0 top-0 w-full z-10 h-fit'>
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
