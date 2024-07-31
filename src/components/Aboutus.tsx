import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="mb-4">
                Welcome to PickleBall Club! We are passionate about the sport of pickleball and dedicated to promoting it within our community. Our club offers a friendly and inclusive environment for players of all skill levels.
            </p>
            <p className="mb-4">
                Our mission is to foster a love for pickleball through organized play, tournaments, and community events. We believe in the power of sports to bring people together and create lasting friendships.
            </p>
            <p className="mb-4">
                Thank you for visiting our website. We look forward to seeing you on the court and being part of our pickleball family.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-4">Our Team</h2>
            <p className="mb-4">
                Our team is composed of experienced players and coaches who are dedicated to helping you improve your game. Whether you're a beginner or an advanced player, we have something for everyone.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-4">Our Values</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Inclusivity</li>
                <li>Sportsmanship</li>
                <li>Community</li>
                <li>Excellence</li>
                <li>Fun</li>
            </ul>
            <h2 className="text-2xl font-bold mt-6 mb-4">Contact Us</h2>
            <p className="mb-4">
                If you have any questions or need further information, please feel free to contact us at:
            </p>
            <p>Email: contact@pickleballclub.com</p>
            <p>Phone: (123) 456-7890</p>
        </div>
    );
}

export default AboutUs;