import React from 'react'
import Carousal from '../components/Carousal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faShareAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
export const TurffDetails = () => {
    return (
        <>
            <div className='flex w-full justify-center '>
                <div className="BookingsPage flex flex-col laptop:flex-row rounded-lg font-serif justify-between mt-10 bg-gray-800 bg-opacity-70 p-4 w-4/5 items-center">


                    <div className="flex flex-col justify-center items-center h-[220px] w-85% laptop:h-[200px] laptop:w-1/4 mb-4 laptop:mb-0">


                        <Carousal />
                    </div>

                    <div className="flex gap-4 justify-center items-center">
                        <div className="address gap-5 flex flex-col items-center" >
                            <h3 className="text-4xl">Pickle Ball Courts </h3>
                            <div className='flex'>
                                <div className="location-marker">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </div>
                                <p className="text-1xl w-76 text-center laptop:w-80">
                                    Behind Doggers Park, Opposite Veda Lawns, Near Greenwood Antica, Ankodiya Sevasi Road Vadodara, Gujarat 391330
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 ">


                        <div className="flex flex-row gap-5 ">
                            <FontAwesomeIcon icon={farHeart} />
                            <FontAwesomeIcon icon={faShareAlt} />
                        </div>

                        <div className="ratings flex flex-row gap-2  p-1 w-16">
                            <h1>5.00</h1>
                            <FontAwesomeIcon icon={faStar} className='mt-1' />

                        </div>

                        <div className="flex flex-col">

                            <button className="btn btn-outline">
                                Get Directions
                            </button>
                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}
export default TurffDetails