import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import { TurffDetails } from '../components/TurffDetails';
import { Choose } from '../components/Choose';
// import axios from 'axios';
import { Details } from '../components/Details';
import Footer from '../components/Footer';



export const BookingPage = () => {
    const [isClickedBooked, setIsClickedBooked] = useState(true);
    const [isClickedDetails, setIsClickedDetails] = useState(false);
   
    // Function to handle button clicks
    const handleClickbook = () => {
        setIsClickedBooked(true);
        setIsClickedDetails(false);
        // Update state to true when either button is clicked
    };
    const handleClickdetails = () => {
        setIsClickedDetails(true);
        setIsClickedBooked(false);
        // Update state to true when either button is clicked
    };
    return (
        <>
            <Navbar />
            <TurffDetails />


            <div className="nav-ineer flex justify-center mt-4 h-[60px]">
                <div className="page-nav flex justify-center gap-8 bg-gray-800 bg-opacity-70 w-4/5 rounded p-8 flex-row">
                    <div className="book-slots flex flex-col justify-center text-1.5xl">
                        <button onClick={handleClickbook} >Book Slots</button>
                        {isClickedBooked && <hr style={{ width: '100%' }} />}
                    </div>
                    <div className="details flex flex-col text-1.5xl justify-center">
                        <button onClick={handleClickdetails}>Details</button>
                        {isClickedDetails && <hr style={{ width: '100%' }} />}
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 mt-3 px-0 mr-[125px]'>
                {isClickedBooked && <div className="chooseComponent">
                    <Choose />
                </div>}
            </div>
            {isClickedDetails && <div className="details">
                <Details />
            </div>}


            <div>

            </div>

            <div className='mt-20'>
                <Footer />
            </div>

        </>
    );
};

export default BookingPage;