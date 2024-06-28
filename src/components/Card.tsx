import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ title, location, image }: { title: string, location: string, image: string }) => {
    const navigate=useNavigate();
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl border-white border-2">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Turf Image"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{location}</p>
                    <div className="card-actions">
                        <button onClick={()=>{
                            navigate('/bookings')
                        }} className="btn btn-outline">Book Slot</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
