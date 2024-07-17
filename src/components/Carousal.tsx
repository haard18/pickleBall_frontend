import React from 'react'
import image1 from '../assets/carousal_pickleball/car1.jpg'
import image2 from '../assets/carousal_pickleball/car2.jpg'
import image3 from '../assets/carousal_pickleball/car3.jpg'
import image4 from '../assets/carousal_pickleball/car4.jpg'
export const Carousal = () => {
    return (
        <>
            <div className="carousel w-full " style={{ height: '400px' }}>
                <div id="item1" className="carousel-item w-full">
                    <img
                        src={image1}
                        className="w-full rounded-lg" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src={image2}
                        className="w-full rounded-lg" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src={image3}
                        className="w-full rounded-lg" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src={image4}
                        className="w-full rounded-lg" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </>
    )
}

export default Carousal;