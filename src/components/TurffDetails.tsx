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
                            <h3 className="text-2xl">Pickle Ball Court</h3>
                            <div className='flex gap-2'>
                                <div className="location-marker ">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </div>
                                <p className="text-1xl w-76 text ml-2 laptop:w-80">
                                    Behind Doggers Park, Opposite Veda Lawns, Near Greenwood Antica, Ankodiya Sevasi Road Vadodara, Gujarat 391330
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                    <div className="flex flex-row items-center gap-20  mt-10 laptop:flex-col ">


                        <div className="flex flex-row gap-5 laptop:gap-5 ">
                            <FontAwesomeIcon icon={farHeart} />
                            <FontAwesomeIcon icon={faShareAlt} />
                        </div>

                        <div className="ratings flex flex-row gap-2  p-1 w-16">
                            <h1>5.00</h1>
                            <FontAwesomeIcon icon={faStar} className='mt-1' />

                        </div>

                    </div>
                    <div className="getdirections mt-5">
                            <div className="flex flex-col">

                                <button className="btn btn-outline">
                                    Get Directions
                                </button>
                            </div>
                        </div>
                        </div>
                </div>

            </div >

        </>
    )
}
export default TurffDetails