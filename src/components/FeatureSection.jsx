import React, { useState } from 'react'

export const FeatureSection = () => {
  return (
    <>
    <div className=' flex flex-col text-center py-10 px-25 gap-10'>
      <div className='p-5 bg-neutral-50 rounded-lg shadow-md'>
        <span className='text-4xl font-black text-orange-400'>Best Selling</span>
      </div>
      <div className='flex flex-col gap-10'>
        <div className='w-full flex gap-10'>
          <div className='shadow-lg rounded-lg'>
            <img className='mr-auto object-cover size-96 rounded-lg' 
            src="https://images.unsplash.com/photo-1619149651177-b09092806f1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className='flex flex-col py-5 px-10 gap-5 w-full bg-neutral-50 rounded-lg shadow-inner'>
            <span className='text-2xl font-bold text-amber-950'>Chocolate Chip Cookies</span>
            <span className='text-justify text-amber-900 font-medium mb-auto'>Chocolate chip cookies have secured their place as a best-selling favorite, captivating taste buds with their perfect blend of chewy texture and rich, melty chocolate. Their irresistible aroma wafting from the oven evokes a sense of comfort and nostalgia, making them a go-to treat for any occasion. Whether enjoyed as a classic snack, a delightful dessert, or a thoughtful gift, these cookies consistently top the charts, proving that their timeless appeal transcends generations. With each bite, it's no wonder they remain a beloved staple in bakeries and homes alike.</span>             
            <button className="bg-orange-400 text-white px-4 py-2 rounded-lg w-full">
              Order Now
            </button>            
          </div>
        </div>
        <div className='w-full flex gap-10'>
          <div className='flex flex-col py-5 px-10 gap-5 w-full bg-neutral-50 rounded-lg shadow-inner'>
            <span className='text-2xl font-bold text-amber-950'>Decadent Brownies</span>
            <span className='mb-auto text-justify text-amber-900 font-medium'>Decadent brownies are a rich and indulgent treat that have earned their spot among the best-selling desserts. With their fudgy texture and intense chocolate flavor, these brownies offer a luxurious experience that satisfies even the most discerning sweet tooth. Whether served warm with a scoop of ice cream or enjoyed on their own, their deep, chocolatey goodness is simply irresistible. Perfect for celebrations, gatherings, or a personal indulgence, decadent brownies continue to delight chocolate lovers everywhere, making them a must-have in any bakery's lineup.</span>              
            <button className="bg-orange-400 text-white px-4 py-2 rounded-lg w-full">
              Order Now
            </button>  
          </div>
          <div className='flex flex-col shadow-lg rounded-lg'>
            <img className='object-cover size-96 rounded-lg' 
            src="https://images.unsplash.com/photo-1688279432554-16cd6de375ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
      </div>
      <div className='relative h-96 hover:bg-black hover:opacity-50'>
          <div className='absolute inset-0 h-full '>
            <img className='object-cover h-full w-full rounded-lg' 
            src="https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className='relative p-10 h-full' >
            <div className='relative w-full py-5 '>
              <div className='absolute rounded-md inset-0 bg-neutral-50 w-full h-full opacity-80'/>
              <span className='relative text-4xl font-black text-orange-400'>What's New!</span>
            </div>
            <div className='flex h-3/4 w-full bg items-center justify-center'>
              <span className='text-9xl text-justify tracking-widest font-black text-neutral-50 opacity-75'>C R O I S S A N T</span>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}
