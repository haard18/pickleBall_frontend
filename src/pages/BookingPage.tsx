import React from 'react';

import Navbar from '../components/Navbar';
import { TurffDetails } from '../components/TurffDetails';

export const BookingPage = () => {
    return (
        <>

            <Navbar />
            <TurffDetails/>
            <div className="page-nav flex justify-center gap-4  bg-gray-800 w-4/5">
                <h1>Book Slots</h1>
                <h1>Details</h1>
            </div>



        </>
    );
};

export default BookingPage;
