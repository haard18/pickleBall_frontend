import React, { useEffect, useState } from 'react';
import logo from "../assets/images/logo.png"
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
    // const authToken = Cookies.get('authToken');
    const[isAuth,setIsAuth]=useState(false);
    useEffect(() => {
        const authToken = Cookies.get('authToken');
        if (authToken) {
            setIsAuth(true);
        }
    }, []);
    const handleLogout=()=>{
        Cookies.remove('authToken');
        setIsAuth(false);
    }
    const navigate=useNavigate();
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
                    <button onClick={()=>{
                        if(isAuth){
                            handleLogout();
                        }else{
                            navigate('/auth');
                        }
                    }} className="btn btn-outline px-4 py-2 font-serif">
                        {isAuth ? 'Logout' : 'Login'}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
