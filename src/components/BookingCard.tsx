import img from "../assets/images/pckl.jpg"
type BookingCardProps = {
    title: string;
    facility: string;
    rate: string;
    onclick: () => void;
};

const BookingCard = ({ title, facility, rate, onclick }: BookingCardProps) => {
    return (
        <div>
            <div className="card bg-base-100 w-75 shadow-xl font-serif laptop:w-96">
                <figure className="pt-10 justify-center w-[270px] laptop:w-[390px]">
                    <img src={img} alt={title} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{facility}</p>
                    <div className="card-actions flex items-center">
                        <p className='font-semibold'>{"₹" + rate + ""}</p>
                        <button onClick={onclick} className="btn btn-neutral">
                            Book slot
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCard
