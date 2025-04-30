import React from 'react'
import { Link} from 'react-router-dom'

export const CallToAction = () => {
    return (
    <>
            <div className="mx-24 flex">
            <div className='w-1/3'>
                <img
                className='object-cover rounded-l-lg rou w-fit'    
                src="https://images.unsplash.com/photo-1729168115128-01ff0ec2d041?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='w-2/3 bg-neutral-50 rounded-r-lg shadow-md flex flex-col p-10 items-center justify-center'>
                <h2 className="text-4xl font-bold text-orange-400">Craving Something Sweet? 🍫</h2>
                <p className="text-lg text-amber-800 mt-3">
                    Indulge in the richness of our <span className="font-semibold">Decadent Brownies</span>  
                    or the <span className="font-semibold">flaky perfection</span> of our Croissants.  
                </p>
                <p className="text-md text-amber-700 mt-2 italic">**Order Now & Savor Every Bite!**</p>
                <Link className="mt-5 bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-all" onClick={click}
                >
                    Order Now
                </Link>
            </div>
        </div>
    </>
  )
}
