import React from 'react'
import Navbar from '../components/Navbar'
import hero from "../assets/images/WhatsApp_Image_2024-06-25_at_15.57.07_42191b53-removebg-preview.png"
import Card from '../components/Card'
import img1 from "../assets/images/pckl.jpg"
const Home = () => {
    return (
        <>
            <div className="home  bg-gradient-to-r from-custom-gold to-custom-black">
                <Navbar />

                <div className="home font-serif grid gap-20 grid-cols-2 ml-20 mt-20 ">
                    <div className="left mt-20" >
                        <h1 className='text-7xl '>United sports<br />Arena</h1>
                        <p className='text-2xl mt-1 italic'>“Your Ultimate Court Destination!"</p>
                        <button className="btn btn-outline px-4 py-2 mt-4">Get Started</button>
                    </div>
                    <div className="right ml-12">
                        <img src={hero} alt="Hero image" />
                    </div>
                </div>
                <hr className='h-4 border-double ' />
                <h1 className='text-4xl text-center mt-20'>Our Courts</h1>
                <div className='flex justify-center mt-3 gap-4'>
                    <Card image={img1} title='Court 1' location='Vadodara' />
                    <Card image={img1} title='Court 1' location='Vadodara' />
                    <Card image={img1} title='Court 1' location='Vadodara' />
                </div>
            </div>
        </>
    )
}

export default Home
