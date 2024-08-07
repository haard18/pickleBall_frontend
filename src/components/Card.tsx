import { faFutbol, faTableTennisPaddleBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cardpickel from '../assets/card_image/cardpickel.jpg'
import trf from '../assets/card_image(turf)/cardturf.jpg'
import { useNavigate } from 'react-router-dom'
const Card = ({ title, location, rate }: { title: string, location: string, rate: string }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl border-gray border">
                <figure className="">
                    <img
                        src={title==="Pickle Ball"?cardpickel:trf}
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
                            localStorage.setItem('sport',title==='Pickle Ball'?'pickleball':'cricket')
                            navigate('/bookings')
                        }} className="btn btn-outline">Book Slot</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
