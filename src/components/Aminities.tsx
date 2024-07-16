import React from 'react';
import { FaTint, FaCar, FaChair, FaToilet, FaLightbulb, FaTools } from 'react-icons/fa';



export const Aminities = () => {
    return (
        <>
            <div className="aminitites flex flex-col items-center">
                <h1 className='text-3xl '>Amenities</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                    <div className="flex flex-col items-center">
                        <FaTint size={24} />
                        <span>Drinking Water</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaLightbulb size={24} />
                        <span>Flood Lights</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaCar size={24} />
                        <span>Parking</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaTools size={24} />
                        <span>Rental Equipment</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaChair size={24} />
                        <span>Sitting Area</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaToilet size={24} />
                        <span>Washroom</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Aminities;
