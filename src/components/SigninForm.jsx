import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const SigninForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div >
        <div className="flex justify-center items-center bg-neutral-100 rounded-r-md">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full flex flex-col items-center">
                <h2 className="text-3xl font-bold text-amber-900 mt-4">Welcome Back!</h2>
                <p className="text-amber-700 text-sm mt-2">Sign in to continue enjoying our delicious treats 🍪</p>
                <div className="w-full mt-6">
                    <label className="block text-sm text-gray-700">Email</label>
                    <input 
                        type="email"
                        className="w-full p-3 mt-2 bg-neutral-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />

                    <label className="block mt-4 text-sm text-gray-700">Password</label>
                    <input 
                        type="password"
                        className="w-full p-3 mt-2 bg-neutral-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />

                    <button className="mt-6 w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-600 transition-all">
                        Sign In
                    </button>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                    Don't have an account? <Link to="/auth/signup" className="text-orange-400 font-semibold">Sign up</Link>
                </p>
            </div>
        </div>
        </div>
    );

}
