import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Login from "./components/Login";
import Register from "./components/Register"; // ✅ matches Register.jsx
import Hotels from "./components/Hotels";
import BookingForm from "./components/BookingForm";
import Payments from "./components/Payments";
import Home from "./components/Home";
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
          <Route path="/" element={<Home />} />
         <Route path="/BookingForm" element={<BookingForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payments" element={<Payments />} />

          {/* Add more routes as needed */}
        </Routes>
        {/* Footer Section */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
