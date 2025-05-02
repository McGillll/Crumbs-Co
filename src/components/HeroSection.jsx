import React from 'react';
import Logo from '../assets/img/Crumbs & Co White Logo 3.png';

export const HeroSection = () => {
    return (
        <div className='relative h-screen w-screen'>
            <div className='absolute inset-0'>
                <img 
                    className='object-cover w-full h-full bg-cover bg-center' 
                    src="https://images.unsplash.com/photo-1597528662465-55ece5734101?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt=""
                />
            </div>
            <div className='absolute inset-0 w-full h-full bg-black opacity-50' />
            <div className='absolute inset-0 w-full h-full bg-orange-400 opacity-5' />

            <div className='relative h-full flex items-center justify-center px-6'>
                <div className='flex flex-col md:flex-row gap-5 text-center md:text-left items-center'>
                    <div className='flex justify-center items-center drop-shadow-lg shadow-neutral-400 rounded-md bg-orange-400 p-4'>
                        <img className='h-24 md:h-36 object-contain' src={Logo} alt="Logo" />
                    </div>

                    <div className='flex flex-col gap-2 max-w-xl'>
                        <span className='text-3xl md:text-5xl font-bold text-neutral-50 leading-tight'>
                            Where Every <span className='text-orange-400'>Bite <br/></span> is a Little Indulgence!
                        </span>
                        <span className='text-md md:text-lg font-medium text-neutral-300'>
                            Freshly Baked Joy, Delivered to Your Door!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};