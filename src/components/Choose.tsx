import React, { useState } from 'react';
import BookingCard from './BookingCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';
import BookingComponent from './BookingComponent';
import MobileBookingComponent from './MobileBooking';
import { useMediaQuery } from 'usehooks-ts'

export const Choose = () => {
  const [card1, setcard1] = useState(true);
  const [card2, setcard2] = useState(false);

  const isMobile = useMediaQuery('(max-width: 1024px)');

  const handleClick1 = () => {
    setcard1(false);
    setcard2(true);
  }



  return (
    <>
      <div className="choose">
        <div className="time-line justify-start">
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-middle ">
                <FontAwesomeIcon icon={fa1} />
              </div>
              <div className="timeline-end timeline-box">
                {card1 ?
                  <BookingCard onclick={handleClick1} title={"PickeBall Turf"} rate={"350"} facility={"Indoor turf"} />
                  : <div className="timeline-end timeline-box flex items-center justify-between w-[40vw] flex-col laptop:flex-row">
                    <p className='text-2xl '> Choose a Facility</p>
                    {card2 && <button onClick={() => {
                      setcard1(true);
                      setcard2(false);
                    }} className='btn btn-neutral '>Change</button>}
                  </div>}
              </div>
              <hr />
            </li>

            <li>
              <hr />
              <div className="timeline-middle ">
                <FontAwesomeIcon icon={fa2} />
              </div>
              <div className="timeline-end timeline-box flex flex-col items-center justify-between w-[78vw] laptop:w-[80vw]">
                <h1 className='text-2xl py-5'>Book Your Slots</h1>
                {card2 && (isMobile ? <MobileBookingComponent /> : <BookingComponent />)}
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div >
    </>
  );
}
