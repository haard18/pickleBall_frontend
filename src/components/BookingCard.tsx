import React from 'react'
import img from "../assets/images/pckl.jpg"
const BookingCard = ({title,facility,rate}:{title:string,facility:string,rate:string}) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="pt-10">
                    <img
                        src={img}
                        alt={title}
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{facility}</p>
                    <div className="card-actions flex items-center">
                        <p>{"₹"+rate+""}</p>
                        <button className="btn btn-neutral">Book slot</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingCard
