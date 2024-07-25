import React from 'react'
import image1 from '../assets/carousal_pickleball/car1.jpg'
import image2 from '../assets/carousal_pickleball/car2.jpg'
import image3 from '../assets/carousal_pickleball/car3.jpg'
import image4 from '../assets/carousal_pickleball/car4.jpg'
import turf1  from '../assets/carousal_turf/turf1.jpg'
import turf2  from '../assets/carousal_turf/turf2.jpg'
import turf3  from '../assets/carousal_turf/turf3.jpg'
import turf4  from '../assets/carousal_turf/turf4.jpg'
export const Carousal = ({title}:{title:string|null}) => {

    return (
        <>
            <div className="carousel w-full " style={{ height: '400px' }}>
                <div id="item1" className="carousel-item w-full">
                    <img
                        src={title==="Pickleball" ? image1 : turf1}
                        className="w-full rounded-lg" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src={title==="Pickleball" ? image2 : turf2}
                        className="w-full rounded-lg" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src={title==="Pickleball" ? image3 : turf3}
                        className="w-full rounded-lg" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src={title==="Pickleball" ? image4 : turf4}
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