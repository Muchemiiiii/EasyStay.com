import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import LoginPage from "./components/LoginPage";
import Hotels from './components/Hotels';
import CarRentals from "./components/CarRentals";
import BookingSummary from "./components/BookingSummary";
import HotelReservationForm from "./components/HotelReservation";
import Registration from "./components/registration";
import Payment from "./components/Payment";
import Home from"./components/Home";
import Footer from "./components/Footer";
import "./index.css";


const App = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <div className="mx-auto bd-red-200">
      <Router>
        <NavigationBar /> {/* Navigation Bar is always visible */}
        <Routes>
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/" element={<Home/>} />
          <Route path="/reservation" element={<HotelReservationForm />} />
          <Route path="/car-rentals" element={<CarRentals />} />
          <Route path= "/registraction" element={<Registration />} />
          <Route path= "/payment" element={<Payment/>} />

          {/* Add more routes as needed */}
        </Routes>
        {/* Footer Section */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
