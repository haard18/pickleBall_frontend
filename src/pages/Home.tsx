import React from 'react'
import Navbar from '../components/Navbar'
import hero from "../assets/images/WhatsApp_Image_2024-06-25_at_15.57.07_42191b53-removebg-preview.png"
import Card from '../components/Card'
import img1 from "../assets/images/pckl.jpg"
import Footer from '../components/Footer'
import Aminities from '../components/Aminities'


const Home = () => {
    return (
        <>
            <div className="home bg-gradient-to-r from-custom-gold to-custom-black">
                <Navbar />

                <div className="home font-serif flex flex-col-reverse laptop:flex-row gap-10 laptop:gap-20 p-4 laptop:ml-20 laptop:mt-20">
                    <div className="left mt-10 laptop:mt-20 flex-1">
                        <h1 className='text-4xl laptop:text-7xl'>United sports<br />Arena</h1>
                        <p className='text-lg mt-1 italic laptop:text-2xl'>“Your Ultimate Court Destination!"</p>
                        <button className="btn btn-outline px-3 py-1 mt-4 laptop:px-4 laptop:py-2">Get Started</button>
                    </div>
                    <div className="right mt-10 laptop:mt-0 flex-1 flex mr-8 justify-end">
                        <img src={hero} alt="Hero image" className="w-full h-auto laptop:w-auto laptop:h-full" />
                    </div>
                </div>

                <hr className='h-4 border-double' />
                <h1 className='mobile:text-2xl laptop:text-4xl text-center mt-20'>Our Courts</h1>

                <div className='flex flex-col items-center laptop:flex-row justify-center mt-3 ml-2 gap-4'>
                    <Card rate='₹ 500' image={img1} title='Pickle Ball' location='Vadodara' />
                    <Card rate='₹ 1400' image={img1} title='Football/Cricket' location='Vadodara' />
                    
                </div>
                <div className="amenities flex justify-center mt-8 laptop:hidden">
                    <Aminities />
                </div>

            


                <div className='mt-20'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home
