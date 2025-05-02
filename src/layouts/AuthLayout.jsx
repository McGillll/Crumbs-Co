import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../assets/img/Crumbs & Co White Logo 3.png';


export const AuthLayout = () => {
  return (
    <>
        <div className='relative py-24 min-h-screen h-fit w-screen'>
            <div className='absolute inset-0'>
                <img 
                    className='object-cover w-full h-full' 
                    src="https://images.unsplash.com/photo-1597528662465-55ece5734101?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt=""
                />
            </div>
            <div className='absolute inset-0 w-full h-full bg-black opacity-50' />
            <div className='absolute inset-0 w-full h-full bg-orange-400 opacity-5' />
            <div className='relative h-full w-full'>
                <div className=' h-fit w-full flex justify-center items-center'>
                    <div className='flex max-h-fit'>
                        <div className='flex flex-col sm:flex-col md:flex-row transition-all '>
                            <div className='flex justify-center items-center drop-shadow-lg shadow shadow-neutral-400 rounded-l-md bg-orange-400 md:px-5'>
                                <img className='h-28 md:h-36  object-contain' src={Logo} alt="" />
                            </div>
                            <div>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}
