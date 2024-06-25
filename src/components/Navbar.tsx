import React from 'react';
import logo from "../assets/images/logo.png"
export const Navbar = () => {
    return (
        // <>
        //   <div className="flex flex-row bg-[#223649]">
        //     <div className="flex flex-row gap-[1vw]">
        //       <div className="flex items-center">
        //         <img src={logo} alt="" className="h-[4vw] w-[4vw]" />
        //       </div>
        //       <h3 className="mt-[1vw] text-white">USA</h3>
        //     </div>
        //     <div className="flex flex-row gap-[1vw] ml-auto mr-[75vw]">
        //       <div className="flex flex-row gap-[3vw] mt-[1.5vw]">
        //         <div className="flex flex-row gap-[1vw] items-center">
        //           <i className="fa-solid fa-phone text-[#336A25]" id='call-icon'></i>
        //           <button className="bg-[#223649] text-white font-bold text-[1vw] mt-[-0.5vw] border-none cursor-pointer">Contact Us</button>
        //         </div>
        //         <div className="flex flex-row gap-[1vw] items-center">
        //           <i className="fa-regular fa-user text-white" id='user-icon'></i>
        //           <button className="bg-[#223649] text-white font-bold text-[1vw] mt-[-0.5vw] border-none cursor-pointer">Login</button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </>
        <>
            <div className="flex justify-between mt-4 items-center">
                <div className='flex items-center'>

                    <div className='flex mx-4'>
                        <img src={logo} alt="" className='w-10 h-10' />
                    </div>
                    <div className='text-lg font-semibold '>
                        USA SPORTS
                    </div>
                </div>
                <div className='flex gap-3 mr-4'>
                    <button className="btn px-4 py-2 font-serif">
                        Contact Us
                    </button>
                    <button className="btn px-4 py-2 font-serif">
                        Signup
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
