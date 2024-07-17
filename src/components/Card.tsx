import { faFutbol, faTableTennisPaddleBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Card = ({ title, location, image, rate }: { title: string, location: string, image: string, rate: string }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl border-gray border">
                <figure className="">
                    <img
                        src={image}
                        alt="Turf Image"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h1 className='card-title'>{rate} onwards</h1>
                    <h2 className="card-title">{title}</h2>
                    <p>{location}</p>
                    <div className="card-actions items-center w-full flex justify-between">
                        <div>
                          {title === "Pickle Ball" ?<FontAwesomeIcon icon={faTableTennisPaddleBall} />: <FontAwesomeIcon icon={faFutbol} />}
                        </div>
                        <button onClick={() => {
                            navigate('/bookings')
                        }} className="btn btn-outline">Book Slot</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
