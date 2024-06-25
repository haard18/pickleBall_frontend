import React from 'react'
import Navbar from '../components/Navbar'
import hero from "../assets/images/WhatsApp_Image_2024-06-25_at_15.57.07_42191b53-removebg-preview.png"

const Home = () => {
    return (
        <>
        <div className="home  bg-gradient-to-r from-custom-gold to-custom-black">
            <Navbar />

            <div className=" home grid gap-20 grid-cols-2 ml-20 mt-20 ">
                <div className="left mt-20" >
                    <h1 className='text-7xl'>United sports<br />Arena</h1>
                    <p className='text-2xl mt-1 italic'>“Your Ultimate Court Destination!"</p>
                    <button className="btn px-4 py-2 font-serif mt-4">Get Started</button>
                </div>
                <div className="right ml-12">
                    <img src={hero} alt="Hero image" />
                </div>
            </div>
            <div className=" flex-col justify-center  mt-10"style={{marginLeft:"30vw"}}>
                <h1 className='text-5xl'>Book Courts and Turfs </h1>
                <h1 className='text-1xl italic mt-4'>"Playing turf soccer with friends at United Sports Arena means excitement, teamwork, and<br/> unforgettable moments on the perfect playing surface".</h1>
            </div>

        </div>
        </>
    )
}

export default Home
