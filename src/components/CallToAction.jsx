import React from 'react';
import { Link } from 'react-router-dom';

export const CallToAction = () => {
    return (
        <div className="mx-4 sm:mx-12 md:mx-24 flex flex-col sm:flex-row">
            <div className='w-full sm:w-3/5 md:w-1/3'>
                <img
                    className='object-cover rounded-t-lg sm:rounded-l-lg w-full h-60 sm:h-full'
                    src="https://images.unsplash.com/photo-1729168115128-01ff0ec2d041?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
            </div>

            {/* Text Section */}
            <div className='w-full sm:w-2/5 md:w-2/3 bg-neutral-50 rounded-b-lg sm:rounded-r-lg shadow-md flex flex-col p-6 sm:p-8 md:p-10 items-center justify-center'>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-orange-400 text-center sm:text-left">
                    Craving Something Sweet? 🍫
                </h2>
                <p className="text-sm sm:text-lg text-amber-800 mt-3 text-center sm:text-left">
                    Indulge in the richness of our <span className="font-bold">Decadent Brownies</span>  
                    or the flaky perfection of our <span className="font-bold">Croissants.</span>
                </p>
                <p className="text-xs sm:text-md text-amber-700 mt-2 italic text-center sm:text-left">
                    <strong>Order Now & Savor Every Bite!</strong>
                </p>

                {/* CTA Button */}
                <Link 
                    to="/auth" 
                    className="mt-4 sm:mt-5 bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all"
                >
                    Order Now
                </Link>
            </div>
        </div>
    );
};