import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
<<<<<<< HEAD
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
            <div className="flex justify-between mt-4 items-center px-4 sm:px-8">
                <div className='flex items-center'>
                    <div className='flex mx-4'>
                        <img src={logo} alt="" className='w-14 h-14' />
                    </div>
                    <div className='text-lg font-semibold hidden sm:block'>
                        USA SPORTS
                    </div>
                </div>
                <div className='flex gap-3'>
                    <button className="btn btn-outline px-2 py-1 sm:px-4 sm:py-2 font-serif text-xs sm:text-sm">
                        Contact Us
                    </button>
                    <button onClick={()=>{
                        if(isAuth){
                            handleLogout();
                        }else{
                            navigate('/auth');
                        }
                    }} className="btn btn-outline px-2 py-1 sm:px-4 sm:py-2 font-serif text-xs sm:text-sm">
                        {isAuth ? 'Logout' : 'Login'}
=======
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className='flex justify-between items-center px-4 py-2'>
                <div className='flex items-center'>
                    <div className='mx-2'>
                        <img src={logo} alt="Logo" className='w-14 h-10 laptop:w-[15.4px] laptop:h-[15.8px]' />
                    </div>
                    <div className='text-lg laptop:text-xl font-semibold'>
                        USA SPORTS
                    </div>
                </div>
                <div className='flex items-center'>
                    {/* Menu button for mobile */}
                    <button 
                        className="laptop:hidden text-xl" 
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        &#9776;
>>>>>>> 832a1b102e90e26a91d5809aed66085663a27ea5
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