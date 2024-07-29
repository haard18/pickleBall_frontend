import { useState } from 'react';
import logo from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className='flex justify-between items-center p-4 top-0 z-50 sticky bg-gray-700 bg-opacity-70 h-[50px] laptop:h-[60px]'>
                <div className='flex items-center'>
                    <div className='mx-2'>
                        <img src={logo} alt="Logo" className='w-14 h-10 laptop:w-19 h-13' />
                    </div>
                    <div className='text-lg laptop:text-xl font-semibold'>
                        <a href="/">USA SPORTS</a>
                    </div>
                </div>
                <div className='flex items-center'>
                    {/* Menu button for mobile */}
                    <button 
                        className="laptop:hidden text-xl" 
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        &#9776;
                    </button>
                    {/* Menu items for laptop */}
                    <div className='hidden laptop:flex gap-2'>
                        <button className="btn btn-outline px-2 py-1 text-sm laptop:px-4 laptop:py-2">
                            Contact Us
                        </button>
                        <button 
                            onClick={() => navigate('/auth')} 
                            className="btn btn-outline px-2 py-1 text-sm laptop:px-4 laptop:py-2"
                        >
                            Signup 
                        </button>
                    </div>
                </div>
            </div>
            {/* Dropdown menu for mobile */}
            {menuOpen && (
                <div className='laptop:hidden flex flex-col items-start sticky top-12 z-50 px-4 py-2 bg-black bg-opacity-77'>
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
                    <button className="btn btn-outline w-full text-left px-4 py-2 text-sm mt-2">
                        Cancellation policy
                    </button>
                </div>
            )}
        </>
    );
}

export default Navbar;