import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className='flex justify-between items-center px-2 py-2 sticky top-0 z-50 bg-gray-700 bg-opacity-50'>
                <div className='flex items-center'>
                    <div className='mx-0 laptop:mx-4'>
                        <img src={logo} alt="Logo" className='w-14 h-10 laptop:w-15.4 h-15.9' />
                    </div>
                    <div className='text-lg laptop:text-xl font-semibold'>
                        USA SPORTS
                    </div>
                </div>
                <div className='flex items-center'>
                    <button
                        className="laptop:hidden text-xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        &#9776;
                    </button>
                    <div className='hidden laptop:flex gap-2'>
                        <button className="btn btn-outline px-2 py-1 text-sm laptop:px-4 py-2">
                            Contact Us
                        </button>
                        <button
                            onClick={() => navigate('/auth')}
                            className="btn btn-outline px-2 py-1 text-sm laptop:px-4 py-2"
                        >
                            Signup
                        </button>
                    </div>
                </div>
            </div>
            {menuOpen && (
                
                <div className='laptop:hidden flex flex-col items-start px-4 py-2'>
                    <button className="btn btn-outline mb-2 w-full text-left px-4 py-2 text-sm" onClick={() => setMenuOpen(false)}>
                        Contact Us
                    </button>
                    <button
                        className="btn btn-outline w-full text-left px-4 py-2 text-sm"
                        onClick={() => {
                            setMenuOpen(false);
                            navigate('/auth');
                        }}
                    >
                        Signup
                    </button>
                </div>
            )}
        </>
    );
}

export default Navbar;
