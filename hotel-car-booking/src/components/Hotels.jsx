import React, { useState } from "react";
import axios from "axios";
import sarovaImage from "../assets/Sarova.jpeg";
import kempinsikiImage from "../assets/Kempinsiki.PNG";
import socialImage from "../assets/Social House.jpeg";
import tamarindTreeImage from "../assets/Tamarid.PNG";
import acaciaPremierImage from "../assets/Acacia Hotel.jpeg";
import budgetInnImage from "../assets/Budget inn.jpeg";
const hotels = [
  {
    image: sarovaImage,
    name: "Sarova Panafric",
    destination: "Kilimani, Kenya",
    rating: 5,
    pricePerDay: 12000,
    pricePerWeek: 51000,
    mapsLink: "https://www.google.com/maps/place/Sarova+Panafric,+Kilimani,+Kenya",
  },
  {
    image: kempinsikiImage,
    name: "Villa Rosa Kempinski",
    destination: "Nairobi, Kenya",
    rating: 4,
    pricePerDay: 8000,
    pricePerWeek: 40000,
    mapsLink: "https://www.google.com/maps/place/Villa+Rosa+Kempinski,+Nairobi,+Kenya",
  },
  {
    image: socialImage,
    name: "The Social House",
    destination: "Nairobi, Kenya",
    rating: 3,
    pricePerDay: 7500,
    pricePerWeek: 51000,
    mapsLink: "https://www.google.com/maps/place/The+Social+House,+Nairobi,+Kenya",
  },
  {
    image: tamarindTreeImage,
    name: "Tamarind Tree Hotel",
    destination: "Langata, Kenya",
    rating: 3,
    pricePerDay: 9000,
    pricePerWeek: 45000,
    mapsLink: "https://www.google.com/maps/place/Tamarind+Tree+Hotel,+Langata,+Kenya",
  },
  {
    image: acaciaPremierImage,
    name: "Acacia Premier Hotel",
    destination: "Kisumu, Kenya",
    rating: 5,
    pricePerDay: 15000,
    pricePerWeek: 70000,
    mapsLink: "https://www.google.com/maps/place/Acacia+Premier+Hotel,+Kisumu,+Kenya",
  },
  {
    image: budgetInnImage,
    name: "Budget Inn",
    destination: "Nakuru, Kenya",
    rating: 2,
    pricePerDay: 3000,
    pricePerWeek: 15000,
    mapsLink: "https://www.google.com/maps/place/Budget+Inn,+Nakuru,+Kenya",
  },
];

const Hotels = () => {
  const [bookingStatus, setBookingStatus] = useState("");

  const handleBooking = async (hotel) => {
    try {
      const response = await fetch("YOUR_BACKEND_API_URL/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hotel),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setBookingStatus(`Booking successful: ${data.message}`);
    } catch (error) {
      setBookingStatus(`Booking failed: ${error.message}`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold text-center mb-8 text-blue-800">Explore Our Hotels</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel, index) => (
          <div key={index} className="border bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            {hotel.image && (
              <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover rounded-md mb-5" />
            )}
            <h2 className="text-2xl font-semibold text-gray-800">{hotel.name}</h2>
            <p className="text-gray-600">{hotel.destination}</p>
            <p className="text-gray-600">Rating: {hotel.rating} stars</p>
            <p className="text-gray-600">Price per day: KSh {hotel.pricePerDay.toLocaleString()}</p>
            <p className="text-gray-600">Price per week: KSh {hotel.pricePerWeek.toLocaleString()}</p>
            <a href={hotel.mapsLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-4 block text-center">
              View on Google Maps
            </a>
            <a href="/registraction">
                 <button className="block mt-3 bg-green-500 text-white text-center py-2 rounded-lg hover:bg-purple-600">
            BOOK NOW
          </button>
          </a>
          </div>
        ))}
      </div>
      {bookingStatus && <p className="text-center mt-6 text-red-600">{bookingStatus}</p>}
    </div>
  );
};

export default Hotels;
