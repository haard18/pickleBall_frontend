import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='flex-col'>
                <Card image='https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b' title='Turf 1' location='Location 1' />
            </div>
        </div>
    )
}

export default Home
