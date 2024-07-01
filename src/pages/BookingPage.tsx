import React, { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import { TurffDetails } from '../components/TurffDetails';
import { Choose } from '../components/Choose';
import axios from 'axios';
import { Details } from '../components/Details';



export const BookingPage = () => {
    const [isClickedBooked, setIsClickedBooked] = useState(true);
    const [isClickedDetails, setIsClickedDetails] = useState(false);
    useEffect(() => {
        const getSlots = async () => {
            const slots = await axios.get(`https://pickleball.haardsolanki-itm.workers.dev/api/booking/getSlots/2024-07-01,2024-07-07`);
            console.log(slots.data.slots);
        };
        getSlots();
    }, []);
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
            {isClickedBooked && <div className='grid grid-cols-3'>

                <Choose />
                {isClickedDetails && <div className='grid grid-cols-3'>
                <Details/>

                </div>}
                
            </div>}


            <div>
            
            </div>

        </>
    );
};

export default BookingPage;