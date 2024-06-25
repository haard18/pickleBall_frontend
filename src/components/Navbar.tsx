import React from 'react';
import logo from "../assets/images/logo.png"
export const Navbar = () => {
    return (
        <>
            <div className="flex justify-between mt-4 items-center ">
                <div className='flex items-center'>

                    <div className='flex mx-4'>
                        <img src={logo} alt="" className='w-14 h-14' />
                    </div>
                    <div className='text-lg font-semibold '>
                        USA SPORTS
                    </div>
                </div>
                <div className='flex gap-3 mr-4'>
                    <button className="btn btn-outline px-4 py-2 font-serif">
                        Contact Us
                    </button>
                    <button className="btn btn-outline px-4 py-2 font-serif">
                        Signup
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
