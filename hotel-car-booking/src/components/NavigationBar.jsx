import React from 'react';
import { Link } from 'react-router-dom';
import img from "../assets/Capturelogo.PNG";

const NavigationBar = () => {
  return (
    <nav className="bg-black py-4 pr-4">
      <div className="mx-auto flex justify-between items-center">
        <img src={img} alt="logo" className="w-70 h-10" />
        <div className="space-x-6">
          <Link to="/" className="text-white text-lg">Home</Link>
          <Link to="/register" className="text-white text-lg">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
