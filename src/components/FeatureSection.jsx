import React, { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

export const FeatureSection = () => {
    const [item, setItem] = useState("");

    return (
        <div className='flex flex-col h-fit text-center py-10 px-4 md:px-24 gap-6 md:gap-10'>
            {/* Best Selling Header */}
            <div className='p-5 bg-neutral-50 rounded-lg shadow-md'>
                <span className='text-2xl md:text-4xl font-black text-orange-400'>Best Selling</span>
            </div>

            {/* Product Section */}
            <div className='flex flex-col gap-6 md:gap-10'>
                {/* First Product */}
                <div className='w-full flex flex-col md:flex-row gap-6 md:gap-10 items-center'>
                    <div className='shadow-lg rounded-lg w-full md:w-3/5 flex justify-center items-center transition-all duration-1000 ease-in-out md:hover:scale-105'>
                        <img className='object-cover h-60 md:h-96 w-full rounded-lg' src="https://images.unsplash.com/photo-1619149651177-b09092806f1a?q=80&w=1374&auto=format&fit=crop" alt="Chocolate Chip Cookies" />
                    </div>
                    <div className='flex flex-col py-5 px-6 md:px-10 gap-5 w-full md:h-96 bg-neutral-50 rounded-lg shadow-inner'>
                        <span className='text-base md:text-2xl font-bold text-amber-950'>Chocolate Chip Cookies</span>
                        <p className='text-justify text-sm md:text-base text-amber-900 mb-auto font-medium'>
                            Chocolate chip cookies have secured their place as a best-selling favorite, captivating taste buds with their perfect blend of chewy texture and rich, melty chocolate.
                        </p>
                        <div className='relative w-full flex justify-start'>
                            <ShoppingCartIcon className='z-0 absolute right-2 bottom-1 size-8 text-orange-600' />
                            <Link to="/auth" className="z-10 bg-orange-400 text-white px-4 py-2 rounded-lg w-full hover:font-bold hover:bg-orange-600 md:hover:w-11/12 transition-all duration-500">
                                Order Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Second Product */}
                <div className='w-full flex flex-col md:flex-row gap-6 md:gap-10 items-center'>
                    <div className=' shadow-lg rounded-lg w-full md:w-3/5 flex md:hidden justify-center items-center transition-all duration-1000 ease-in-out md:hover:scale-105'>
                        <img className='object-cover h-60 md:h-96 w-full rounded-lg' src="https://images.unsplash.com/photo-1688279432554-16cd6de375ac?q=80&w=1470&auto=format&fit=crop" alt="Decadent Brownies" />
                    </div>
                    <div className='flex flex-col py-5 px-6 md:px-10 gap-5 w-full md:h-96 bg-neutral-50 rounded-lg shadow-inner'>
                        <span className='text-base md:text-2xl font-bold text-amber-950'>Decadent Brownies</span>
                        <p className='text-justify text-sm md:text-base text-amber-900 mb-auto font-medium'>
                            Decadent brownies are a rich and indulgent treat that have earned their spot among the best-selling desserts, offering a luxurious experience with deep chocolate flavor.
                        </p>
                        <div className='relative w-full flex justify-end'>
                            <ShoppingCartIcon className='z-0 absolute left-2 bottom-1 size-8 text-orange-600' />
                            <Link to="/auth" className="z-10 bg-orange-400 hover:font-bold text-white px-4 py-2 rounded-lg w-full hover:bg-orange-600 md:hover:w-11/12 transition-all duration-500">
                                Order Now
                            </Link>
                        </div>
                    </div>
                    <div className='hidden shadow-lg rounded-lg w-full md:w-3/5 md:flex justify-center items-center transition-all duration-1000 ease-in-out md:hover:scale-105'>
                        <img className='object-cover h-60 md:h-96 w-full rounded-lg' src="https://images.unsplash.com/photo-1688279432554-16cd6de375ac?q=80&w=1470&auto=format&fit=crop" alt="Decadent Brownies" />
                    </div>
                </div>
            </div>

            {/* What's New Section */}
            <div 
                onMouseEnter={() => setItem("CROISSANT")}
                onMouseLeave={() => setItem("")} 
                className='relative h-72 md:h-96 overflow-hidden'
            >
                <div className='absolute inset-0 h-full'>
                    <img className='object-cover h-full w-full rounded-lg' src="https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1470&auto=format&fit=crop" alt="New Product" />
                </div>
                <div className='relative p-6 h-full'>
                    <div className='relative w-full py-5'>
                        <div className='absolute rounded-md inset-0 bg-neutral-50 w-full h-full opacity-80' />
                        <span className='relative text-2xl md:text-4xl font-black text-orange-400'>What's New!</span>
                    </div>
                    <div className='flex h-3/4 w-full items-center justify-center'>
                        <span className='abolute top-1/2 text-5xl md:hidden tracking-widest font-black text-neutral-50 opacity-75 transition-all duration-500 ease-in-out'>CROISSANT</span>
                        <span className='text-5xl md:text-9xl tracking-widest font-black text-neutral-50 opacity-75 transition-all duration-500 ease-in-out'>{item}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};