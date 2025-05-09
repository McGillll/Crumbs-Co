import { useState } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

const AboutUs = () => {
    const [position, setPosition] = useState(0);
    const persons = [
        {
            name: "John Doe",
            testimony: "I didn't know perfection existed until I tried their croissants. Flaky, buttery, and melt-in-your-mouth goodness! Highly recommend to every dessert lover!",
            photo: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop"
        },
        {
            name: "Jane Damn",
            testimony: "Absolutely phenomenal! The pastries are fresh, flavorful, and simply delightful. Every bite feels like a warm hug. This place has become my go-to spot!",
            photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop"
        },
        {
            name: "Mark Zuch",
            testimony: "Their chocolate chip cookies? Pure magic! Soft, chewy, and packed with rich chocolate. I've never tasted anything quite like it—I'm officially addicted!",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop"
        }
    ];

    return (
        <div className="relative w-screen h-fit py-16 sm:py-24">
            {/* Background Image */}
            <div className="absolute inset-0 w-full z-0">
                <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1532635224-cf024e66d122?q=80&w=2070&auto=format&fit=crop" alt="About Us Background" />
            </div>

            {/* Container */}
            <div className="flex justify-center h-full items-center px-4 sm:px-12">
                <div className="relative w-full max-w-4xl h-full flex flex-col items-center p-6 sm:p-10 rounded-lg shadow-lg">
                    {/* Overlay */}
                    <div className="absolute inset-0 h-full w-full bg-black rounded-lg z-0 opacity-30" />

                    {/* Content */}
                    <div className="z-10 flex flex-col items-center">
                        {/* About Us Header */}
                        <div className="text-center bg-neutral-100 rounded-lg p-6 sm:p-8 mb-10 w-full">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-900 mb-5">About Us</h1>
                            <p className="text-sm sm:text-lg text-amber-700 max-w-2xl mx-auto mt-3">
                                Welcome to <span className="font-semibold">Crumbs & Co</span> –  
                                where we craft the finest homemade pastries and delicious treats  
                                with love and passion.  
                                Our mission is simple: <strong>bringing people together through the joy of baking.</strong>
                            </p>
                        </div>

                        {/* Team & Mission Section */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-4xl">
                            <div className="flex flex-col items-center p-6 sm:p-8 bg-amber-50 rounded-lg shadow-md w-full">
                                <h2 className="text-lg sm:text-xl font-semibold text-amber-900">Our Team</h2>
                                <p className="text-sm sm:text-base text-amber-800 text-center mt-2">
                                    A passionate group of bakers, chefs, and food enthusiasts  
                                    dedicated to crafting the best sweet treats!  
                                </p>
                            </div>

                            <div className="flex flex-col items-center p-6 sm:p-8 bg-amber-50 rounded-lg shadow-md w-full">
                                <h2 className="text-lg sm:text-xl font-semibold text-amber-900">Our Mission</h2>
                                <p className="text-sm sm:text-base text-amber-800 text-center mt-2">
                                    Bringing people together through the warmth and comfort  
                                    of freshly baked goods.  
                                </p>
                            </div>
                        </div>

                        {/* Testimonials Section */}
                        <div className="mt-10 w-full flex flex-col items-center max-w-4xl">
                            <div className="bg-neutral-100 w-fit p-6 rounded-lg">
                                <h2 className="text-xl sm:text-3xl font-bold text-amber-900 text-center">What Our Customers Say</h2>
                            </div>

                            {/* Testimonial Carousel */}
                            <div className="mt-5 flex flex-col gap-6 md:flex-row justify-center">
                                <div className="relative ">
                                    <TestimonialCard
                                        name={persons[position].name}
                                        testimony={persons[position].testimony}
                                        photo={persons[position].photo}
                                    />
                                    <div className="absolute rounded-lg flex justify-between inset-0 z-10">
                                        <div onClick={()=>{
                                            if(position === 0){
                                                setPosition(persons.length -1)
                                                return
                                            }
                                            setPosition(position-1);
                                        }} 
                                        className="bg-neutral-300/20 h-full opacity-50 rounded-l-lg p-4 text-neutral-700 flex items-center hover:opacity-100 transition-all duration-500">
                                            <ArrowLeftIcon className="size-6"/>
                                        </div>
                                        <div onClick={()=>{
                                            if(position === persons.length-1){
                                                setPosition(0)
                                                return
                                            }
                                            setPosition(position+1);
                                        }}
                                        className="bg-neutral-300/20 h-full opacity-50 rounded-r-lg text-neutral-700 p-4 flex items-center hover:opacity-100 transition-all duration-500">
                                            <ArrowRightIcon className="size-6"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call-to-Action Button */}
                        <Link to="/auth" className="mt-6 sm:mt-8 bg-orange-400 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-orange-600 transition-all shadow-md">
                            Explore Our Treats 🍪
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;