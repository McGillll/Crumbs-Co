import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-neutral-100 px-4 sm:px-8">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-xs sm:max-w-sm md:max-w-md w-full flex flex-col items-center">
                <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-amber-600 mt-4">Join Crumbs & Co!</h2>
                <p className="text-sm sm:text-base text-orange-400 mt-2 text-center">Sign up and enjoy exclusive treats! 🍪</p>

                <div className="w-full mt-4 sm:mt-6">
                    {/* First & Last Name Inputs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full">
                            <label className="block text-sm sm:text-base text-gray-700">First Name</label>
                            <input 
                                type="text"
                                name="firstName"
                                className="w-full p-2 sm:p-3 bg-neutral-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="Enter your first name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm sm:text-base text-gray-700">Last Name</label>
                            <input 
                                type="text"
                                name="lastName"
                                className="w-full p-2 sm:p-3 bg-neutral-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="Enter your last name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <label className="block mt-3 sm:mt-4 text-sm sm:text-base text-gray-700">Email</label>
                    <input 
                        type="email"
                        name="email"
                        className="w-full p-2 sm:p-3 bg-neutral-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    {/* Password Input */}
                    <label className="block mt-3 sm:mt-4 text-sm sm:text-base text-gray-700">Password</label>
                    <input 
                        type="password"
                        name="password"
                        className="w-full p-2 sm:p-3 bg-neutral-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    {/* Confirm Password Input */}
                    <label className="block mt-3 sm:mt-4 text-sm sm:text-base text-gray-700">Confirm Password</label>
                    <input 
                        type="password"
                        name="confirmPassword"
                        className="w-full p-2 sm:p-3 bg-neutral-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    {/* Sign-Up Button */}
                    <button className="mt-4 sm:mt-6 w-full bg-orange-400 text-white py-2 sm:py-3 rounded-lg hover:bg-orange-600 transition-all">
                        Sign Up
                    </button>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 mt-4 text-center">
                    Already have an account? <Link to="/auth" className="text-orange-400 font-semibold">Sign in</Link>
                </p>
            </div>
        </div>
    );
};