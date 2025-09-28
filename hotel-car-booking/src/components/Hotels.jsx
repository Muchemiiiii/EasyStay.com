// src/components/Hotels.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, DollarSign } from "lucide-react";

// ✅ Import images
import kempinskiImg from "../assets/Kempinsiki.PNG";
import sarovaimg from "../assets/Sarova PNG.png";
import hiltonimg from "../assets/Hilton.png";
import radison from "../assets/Radison.png";
import fairmont from "../assets/Fairmont.png";
import ibis from "../assets/Ibis.png";

const Hotels = () => {
  const navigate = useNavigate();

  const [hotels] = useState([
    {
      id: 1,
      name: "Villa Rosa Kempinski",
      location: "Westlands, Nairobi",
      priceKES: 25000,
      rating: 4.8,
      amenities: ["Spa", "Gym", "Fine Dining"],
      imageUrl: kempinskiImg,
    },
    {
      id: 2,
      name: "Sarova Stanley",
      location: "Nairobi CBD",
      priceKES: 21000,
      rating: 4.5,
      amenities: ["Free WiFi", "Pool", "Parking", "Restaurant"],
      imageUrl: sarovaimg,
    },
    {
      id: 3,
      name: "Radisson Blu Hotel",
      location: "Upper Hill, Nairobi",
      priceKES: 20000,
      rating: 4.4,
      amenities: ["Pool", "Bar", "Conference Rooms"],
      imageUrl: radison,
    },
    {
      id: 4,
      name: "Fairmont Norfolk",
      location: "Westlands, Nairobi",
      priceKES: 18000,
      rating: 4.6,
      amenities: ["Heritage Hotel", "Garden", "Luxury Dining"],
      imageUrl: fairmont,
    },
    {
      id: 5,
      name: "Hilton Garden Inn Nairobi Airport",
      location: "JKIA Airport, Nairobi",
      priceKES: 15000,
      rating: 4.3,
      amenities: [
        "Rooftop Pool",
        "Restaurant",
        "Fitness Center",
        "Free WiFi",
        "Airport Shuttle",
      ],
      imageUrl: hiltonimg,
    },
    {
      id: 6,
      name: "Ibis Styles Hotel",
      location: "Westlands, Nairobi",
      priceKES: 7500,
      rating: 4.2,
      amenities: ["Budget Friendly", "Free Breakfast", "WiFi"],
      imageUrl: ibis,
    },
  ]);

  // ⭐ Render rating stars
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Discover Nairobi Hotels 🇰🇪
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Hotel Image */}
            <div className="relative h-48">
              <img
                src={
                  hotel.imageUrl ||
                  "https://via.placeholder.com/400x250?text=Kenya+Hotel"
                }
                alt={hotel.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>

            {/* Hotel Details */}
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                {hotel.name}
              </h2>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{hotel.location}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex mr-2">{renderRating(hotel.rating)}</div>
                <span className="text-sm text-gray-600">
                  ({hotel.rating.toFixed(1)})
                </span>
              </div>

              {/* Amenities */}
              {hotel.amenities && hotel.amenities.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {hotel.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              )}

              {/* Price & Book Now */}
              <div className="flex justify-between items-center border-t pt-3">
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                  <span className="font-bold">
                    KES {hotel.priceKES.toLocaleString()}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">/ night</span>
                </div>
                <button
                  onClick={() => navigate("/BookingForm", { state: { hotel } })}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
