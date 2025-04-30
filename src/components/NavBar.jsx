import React, { useState } from 'react';
import Logo from '../assets/img/Crumbs & Co White Logo 3.png';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    const linkActive = ({ isActive }) => 
        isActive 
            ? 'text-neutral-50 bg-orange-400 py-2 px-4 rounded-md' 
            : 'text-neutral-950 py-2 px-4 hover:bg-neutral-200 hover:rounded-md';

    const [auth, setAuth] = useState("Sign in");

    return (
        <>
            <div className='flex px-5 bg-neutral-100 items-center shadow-lg'>
                <img className='mr-auto ml-2 size-15 object-contain' src={Logo} alt="" />
                <div className="flex">
                    <div className="font-medium flex flex-row p-4 space-x-4">
                        <NavLink to="/" className={linkActive}>Home</NavLink>
                        <NavLink to="/about" className={linkActive}>About</NavLink>
                        <NavLink 
                            to="/auth" 
                            className={linkActive} 
                            onClick={() => {
                                setAuth(auth === "Sign up" ? "Sign in" : "Sign up");
                            }}
                        >
                            {auth}
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};