import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import { TurffDetails } from '../components/TurffDetails';
import { Choose } from '../components/Choose';

export const BookingPage = () => {
    const [isClickedBooked, setIsClickedBooked] = useState(false);
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
            <div className="nav-ineer flex justify-center mt-4 p-5">
                <div className="page-nav flex justify-center gap-8 bg-gray-800 w-4/5 rounded p-8">
                    <div className="book-slots flex flex-col">
                        <button onClick={handleClickbook} >Book Slots</button>
                        {isClickedBooked && <hr style={{ width: '100%' }} />}
                    </div>
                    <div className="details">
                        <button onClick={handleClickdetails}>Details</button>
                        {isClickedDetails && <hr style={{ width: '100%' }} />}
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3'>

                <Choose />
            </div>

        </>
    );
};

export default BookingPage;