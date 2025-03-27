import React from 'react';
import { link } from 'react-router-dom';
import img from "../assets/Capturelogo.PNG"

const NavigationBar = () => {
  return (
    <nav className="bg-black py-4 pr-4">
        <div className=" mx-auto flex justify-between items-center">
            <img src={img} alt="logo" className="w-70 h-10" />
            <div className="space-x-6">
                <a href="/" className="text-white text-lg">Home</a>
                <a href="/hotels" className="text-white text-lg">Hotels</a>
                <a href="/car-rentals" className="text-white text-lg">Car Rentals</a>
                <a href="/registraction" className="text-white text-lg">Registration</a>
                <a href="/reservation" className="text-white text-lg">Hotel Reservation</a>
                <a href="/Payment" className="text-white text-lg">Payment</a>
            </div>
        </div>
    </nav>
);
};

export default NavigationBar;
