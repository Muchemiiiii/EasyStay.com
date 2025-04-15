import React, { useState, useEffect } from "react";
import { Star, MapPin, DollarSign } from "lucide-react";

const BASE_URL = "https://e100-41-90-101-26.ngrok-free.app"; // Ensure this URL is current

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);

      try {
        // Fetch the hotels from your backend
        const response = await fetch(`${BASE_URL}/api/hotels`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        });

        const responseData = await response.json();
        console.log("Response status:", responseData);

        if (responseData && responseData.length > 0) {
          setHotels(responseData);
        } else {
          console.error("Unexpected data format:", responseData);
          throw new Error(
            "Unexpected data format: expected an array of hotels"
          );
        }
      } catch (err) {
        console.error("Error fetching hotels:", err);
        setError(
          `Failed to load hotels. Please try again later. ${err.message}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) return <div>Loading hotels...</div>;
  if (error) return <div>{error}</div>;

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={`star-${i}`}
            className="w-4 h-4 text-yellow-400 fill-yellow-400"
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={`star-half-${i}`} className="relative">
            <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star key={`star-empty-${i}`} className="w-4 h-4 text-gray-300" />
        );
      }
    }
    return stars;
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Discover Our Hotels
      </h1>

      {hotels.length === 0 ? (
        <div className="flex justify-center items-center h-64 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-500 text-lg">
            No hotels available at the moment.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={
                    hotel.imageUrl?.startsWith("http")
                      ? hotel.imageUrl
                      : `${BASE_URL}${hotel.imageUrl}`
                  }
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {hotel.featured && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200">
                    {hotel.name}
                  </h2>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{hotel.location}</span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderRating(hotel.rating || 0)}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({hotel.rating ? hotel.rating.toFixed(1) : "0.0"})
                  </span>
                </div>

                {hotel.amenities && (
                  <div className="flex flex-wrap gap-2 mb-4">
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

                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <div className="flex items-center text-gray-800">
                    <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                    <span className="font-bold">
                      KES {(hotel.pricePerNight || 0).toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">/ night</span>
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hotels;

