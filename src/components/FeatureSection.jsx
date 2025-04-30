import React, { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
export const FeatureSection = () => {
    const [item, setItem] = useState();
    return (
        <>
            <div className='flex flex-col text-center py-10 px-25 gap-10'>
                <div className='p-5 bg-neutral-50 rounded-lg shadow-md'>
                    <span className='text-4xl font-black text-orange-400'>Best Selling</span>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='w-full flex gap-10'>
                        <div className='shadow-lg rounded-lg size-96 hover:w-5/12 flex justify-center items-center transition-all duration-1000 ease-in-out'>
                            <img className='mr-auto object-cover h-full w-full rounded-lg'
                                src="https://images.unsplash.com/photo-1619149651177-b09092806f1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='flex flex-col py-5 px-10 gap-5 w-full bg-neutral-50 rounded-lg shadow-inner'>
                            <span className='text-2xl font-bold text-amber-950'>Chocolate Chip Cookies</span>
                            <span className='text-justify text-amber-900 font-medium mb-auto'>
                                Chocolate chip cookies have secured their place as a best-selling favorite, captivating taste buds with their perfect blend of chewy texture and rich, melty chocolate. Their irresistible aroma wafting from the oven evokes a sense of comfort and nostalgia, making them a go-to treat for any occasion.
                            </span>
                            <div className='relative w-full '>
                                <div className='absolute right-1 bottom-1 z-0'>
                                    <ShoppingCartIcon className='size-8 text-orange-600' />
                                </div>
                                <div className='relative z-10'>
                                    <div className='flex'>
                                        <Link to="/auth" className="bg-orange-400 text-white px-4 py-2 rounded-lg w-full h-10 hover:bg-orange-600 hover:w-11/12 transition-all duration-500">
                                            <div className='flex hover:opacity-0 transition-opacity duration-500 w-full justify-center'>
                                                <span className='font-medium'>Order Now</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-end gap-10'>
                        <div className='flex flex-col py-5 px-10 gap-5 w-full bg-neutral-50 rounded-lg shadow-inner'>
                            <span className='text-2xl font-bold text-amber-950'>Decadent Brownies</span>
                            <span className='mb-auto text-justify text-amber-900 font-medium'>
                                Decadent brownies are a rich and indulgent treat that have earned their spot among the best-selling desserts. With their fudgy texture and intense chocolate flavor, these brownies offer a luxurious experience that satisfies even the most discerning sweet tooth.
                            </span>
                            <div className='relative w-full '>
                                <div className='absolute left-1 bottom-1 z-0'>
                                    <ShoppingCartIcon className='size-8 text-orange-600' />
                                </div>
                                <div className='relative z-10'>
                                    <div className='flex justify-end'>
                                        <Link to="/auth" className="bg-orange-400 text-white px-4 py-2 rounded-lg w-full h-10 hover:bg-orange-600 hover:w-11/12 transition-all duration-500">
                                            <div className='flex hover:opacity-0 transition-opacity duration-500 w-full justify-center'>
                                                <span className='font-medium'>Order Now</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-lg rounded-lg size-96 hover:w-5/12 flex justify-center items-center transition-all duration-1000 ease-in-out'>
                            <img className='object-cover h-full w-full rounded-lg'
                                src="https://images.unsplash.com/photo-1688279432554-16cd6de375ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>
                </div>
                <div 
                onMouseEnter={()=>{setItem("CROISSANT")}}
                onMouseLeave={()=>{setItem("")}} 
                className='relative h-96'>
                    <div className='absolute inset-0 h-full '>
                        <img className='object-cover h-full w-full rounded-lg'
                            src="https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='relative p-10 h-full'>
                        <div className='relative w-full py-5'>
                            <div className='absolute rounded-md inset-0 bg-neutral-50 w-full h-full opacity-80' />
                            <span className='relative text-4xl font-black text-orange-400'>What's New!</span>
                        </div>
                        <div className='flex h-3/4 w-full bg items-center justify-center'>
                            <span className='text-9xl text-justify tracking-widest font-black text-neutral-50 opacity-75 transition-all duration-500 ease-in-out'>{item}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};