import React from 'react';
import { FaTint, FaCar, FaChair, FaToilet, FaLightbulb, FaTools } from 'react-icons/fa';

export const Details = () => {
  return (
    <div className='details flex flex-col justify-center items-center'>
      <div className="details-summary flex flex-col gap-10 justify-center items-center bg-gray-800 w-4/5 rounded">
        <h1 className='mt-5 text-3xl'>Description</h1>
        <div className="para1 w-1/2">
          <p>Discover United Sports Arena, the premier sports venue in Vadodara City, Gujarat. Featuring 4 international-standard pickleball courts with Vadodara's first 8-layer synthetic surface, it's the ultimate destination for sports enthusiasts. Our courts meet international standards, including ample spacing between courts and behind the baselines, ensuring a top-notch playing experience. Book your slots effortlessly using the Hudle app and enjoy a thrilling game of pickleball nearby.</p>
        </div>
        <div className="para2 w-1/2">
          <p>Located in the heart of Vadodara, United Sports Arena offers convenience and top-notch facilities for players of all levels. Whether you're a seasoned athlete or a beginner looking to have fun, our venue caters to all. Don't miss out on the excitement – book your spot now and experience sports like never before!</p>
        </div>
        
          <h1 className='text-3xl'>Amenities</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
        
        <div className="text-center mb-5">
          <p>Cancellation of bookings is allowed as per the <a href="/cancellation-policy" className="text-blue-500 hover:text-blue-700">cancellation policy</a>.</p>
        </div>
      </div>
    </div>
  )
}