import { useState } from 'react';
import logo from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const setterFunction = () =>{
        setMenuOpen(true);
        setContactModalOpen(true);
    }

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
                        <button className="btn btn-outline px-2 py-1 text-sm laptop:px-4 laptop:py-2 " onClick={() => setContactModalOpen(true)}>
                            Contact Us
                        </button>

                        <button className="btn btn-outline px-2 py-1 text-sm laptop:px-4 laptop:py-2" onClick={() => navigate('/aboutus')}>
                            About Us
                        </button>
                        {contactModalOpen && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 ">
                                <div className="bg-black opacity-50 absolute inset-0"></div>
                                <div className="bg-white p-6 rounded-lg shadow-lg z-10 mt-2">
                                    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                                    <p>Email: contact@example.com</p>
                                    <p>Phone: (123) 456-7890</p>
                                    <button
                                        className="btn btn-primary mt-4"
                                        onClick={() => setContactModalOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
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
                    <button className="btn btn-outline mb-2 w-full text-left px-4 py-2 text-sm" onClick = {setterFunction}>
                        Contact Us
                    </button>
                    {contactModalOpen && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 ">
                                <div className="bg-black opacity-50 absolute inset-0"></div>
                                <div className="bg-white p-6 rounded-lg shadow-lg z-10 mt-2">
                                    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                                    <p>Email: contact@example.com</p>
                                    <p>Phone: (123) 456-7890</p>
                                    <button
                                        className="btn btn-primary mt-4"
                                        onClick={() => setContactModalOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    <button
                        className="btn btn-outline w-full text-left px-4 py-2 text-sm"
                        onClick={() => {
                            setMenuOpen(false);
                            navigate('/auth');
                        }}
                    >
                        Signup
                    </button>
                    <button
                        className="btn btn-outline w-full text-left px-4 py-2 text-sm"
                        onClick={() => {
                            setMenuOpen(false);
                            navigate('/aboutus');
                        }}
                    >
                        About us
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