import React, { useState } from 'react';
import Logo from '../assets/img/Crumbs & Co White Logo 3.png';
import { NavLink } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/16/solid';

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkActive = ({ isActive }) =>
        isActive
            ? 'font-semibold text-neutral-50 bg-orange-400 py-2 px-4 rounded-md'
            : 'font-semibold text-neutral-950 py-2 px-4 hover:bg-neutral-200 hover:rounded-md';

    return (
        <>
            <div className='flex items-center justify-between px-5 bg-neutral-100 shadow-lg'>
                <img className='size-15 object-contain' src={Logo} alt="Logo" />

                <button
                    className="md:hidden text-orange-400 transition-transform duration-300 ease-in-out"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <XMarkIcon className={`fixed top-4 right-7 size-8 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
                    <Bars3Icon className={`fixed top-4 right-7 size-8 ${!menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}/>
                </button>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex space-x-4">
                    <NavLink to="/" className={linkActive}>Home</NavLink>
                    <NavLink to="/about" className={linkActive}>About</NavLink>
                    <NavLink to="/auth" className={linkActive}>Sign in</NavLink>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-15 left-0 w-full h-full transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className='absolute inset-0 bg-black opacity-50 z-0'/>
                <div className={`absolute z-10 flex flex-col top-0 right-0 h-fit w-full bg-neutral-50 shadow-lg transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out `}>
                    <NavLink to="/" className={linkActive} onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/about" className={linkActive} onClick={() => setMenuOpen(false)}>About</NavLink>
                    <NavLink to="/auth" className={linkActive} onClick={() => setMenuOpen(false)}>Sign in</NavLink>
                </div>
            </div>
        </>
    );
};