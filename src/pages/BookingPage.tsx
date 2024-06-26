import React from 'react';
import Carousal from '../components/Carousal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faShareAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import Navbar from '../components/Navbar';

export const BookingPage = () => {
    return (
        <>

            <Navbar />

            <div className="BookingsPage flex mt-10 bg-gray-800 p-4">
                
                <div className="carousal ml-10">
                    <Carousal />
                </div>

                <div className="headings">
                    <h3 className="text-4xl">Pickle Ball Court</h3>
                    <div className="address flex" style={{ marginRight: '50vw' }}>
                        <div className="location-marker">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <p className="text-1xl w-60">
                            Behind Doggers Park, Opposite Veda Lawns, Near Greenwood Antica, Ankodiya Sevasi Road Vadodara, Gujarat 391330
                        </p>
                    </div>
                </div>
                <div className="likes-directions flex flex-col gap-5 mr-10">
                    <div className="like-share flex flex-row gap-5 mr-10">
                        <FontAwesomeIcon icon={farHeart} />
                        <FontAwesomeIcon icon={faShareAlt} />
                    </div>
                    <div className="star-rattings">
                        <div className="ratings flex flex-row gap-2  border-2 p-1 w-16">
                            <h1>5.00</h1>
                            <FontAwesomeIcon icon={faStar} className='mt-1' />

                        </div>
                    </div>
                    <div className="location mt-5">
                        <h1 className='w-60'>Best Pickle ball court in <br />Manjalpur</h1>
                        <button className="btn btn-outline">Get Directions</button>
                    </div>
                </div>
            </div>

            

        </>
    );
};

export default BookingPage;
