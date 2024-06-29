import React, { useState } from 'react'
import BookingCard from './BookingCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons'
import BookingComponent from './BookingComponent';
export const Choose = () => {
  const [card1, setcard1] = useState(true);
  const [card2, setcard2] = useState(false);
  const [card3, setcard3] = useState(false);
  const handleClick1 = () => {
    setcard1(false);
    setcard2(true);
  }
  const handleClick2 = () => {
    setcard2(false);
    setcard3(true);
  }
  return (
    <>
      <div className="choose">
        <div className="time-line">
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-middle">
                <FontAwesomeIcon icon={fa1} />
              </div>
              <div className="timeline-end timeline-box">
                {card1 ?

                  <BookingCard onclick={handleClick1} title={"PickeBall Turf"} rate={"350"} facility={"Indoor turf"} />

                  : <div className="timeline-end timeline-box flex items-center justify-between w-[40vw]">

                    <p className='text-2xl '> Choose a Facility</p>
                   {card2&& <button onClick={() => {
                      setcard1(true);
                      setcard2(false);
                    }} className='btn btn-neutral '>Change</button>}
                  </div>}
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <FontAwesomeIcon icon={fa2} />
              </div>
              <div className="timeline-end timeline-box">
                {card3 ? <BookingCard onclick={handleClick2} title={"Choose a facility"} rate={"350"} facility={"Indoor turf"} /> : <div className="timeline-end timeline-box flex items-center justify-between w-[40vw]">

                  <p className='text-2xl '> Choose a Facility</p>
                  <button onClick={() => {
                    setcard2(true);
                    setcard3(false);
                  }} className='btn btn-neutral '>Change</button>
                </div>}
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle ">
                <FontAwesomeIcon icon={fa3} />
              </div>
                <div className="timeline-end timeline-box flex flex-col items-center justify-between w-[80vw]">
                <h1 className='text-2xl'>Book Your Slots</h1>
                {card1 && <BookingComponent></BookingComponent>}
              </div>
              <hr />
            </li>

          </ul>
        </div>
      </div >
    </>
  )
}
