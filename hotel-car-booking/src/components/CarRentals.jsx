import React from "react";
import corollaImage from "../assets/Corolla.PNG";
import civicImage from "../assets/Honda Civic.jpeg";
import fortunerImage from "../assets/Fortuner.jpeg";
import pajeroImage from "../assets/Pajero.jpeg";

const CarRentals = () => {
  // Define an array of cars
  const cars = [
    {
      image: corollaImage, // Ensure the path is correct
      name: "Toyota Corolla",
      passengers: 5,
      cost: 3000, // Cost in Kenyan Shillings
      numberPlate: "KCB 2546A",
    },
    {
      image: civicImage, // Ensure the path is correct
      name: "Honda Civic",
      passengers: 4,
      cost: 4000, // Cost in Kenyan Shillings
      numberPlate: "KDA 123B",
    },
    {
      image: fortunerImage, // Ensure the path is correct
      name: "Toyota Fortuner",
      passengers: 7,
      cost: 7000, // Cost in Kenyan Shillings
      numberPlate: "KCE 456C",
    },
    {
      image: pajeroImage, // Ensure the path is correct
      name: "Mitsubishi Pajero",
      passengers: 6,
      cost: 6500, // Cost in Kenyan Shillings
      numberPlate: "KDB 789D",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-purple-100 rounded-lg shadow-lg">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-6 text-purple-800">
        CAR RENTALS FOR ANY KIND OF TRIP
      </h1>
      <p className="text-2xl text-center mb-4 text-gray-700">
        Great cars at great prices
      </p>

      {/* Search Section */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Pickup Destination */}
          <div>
            <label
              htmlFor="pickup-destination"
              className="block text-gray-600 mb-2 text-center"
            >
              Pick-up destination
            </label>
            <input
              id="pickup-destination"
              type="text"
              placeholder="Enter location"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          {/* Pickup Date */}
          <div>
            <label htmlFor="pickup-date" className="block text-gray-600 mb-2">
              Pick-up Date
            </label>
            <input
              id="pickup-date"
              type="date"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          {/* Pickup Time */}
          <div>
            <label htmlFor="pickup-time" className="block text-gray-600 mb-2">
              Pick-up Time
            </label>
            <div className="flex space-x-2">
              <input
                id="pickup-hour"
                type="number"
                placeholder="HH"
                min="1"
                max="12"
                className="w-16 border border-gray-300 rounded-md p-2 text-center"
              />
              <input
                id="pickup-minute"
                type="number"
                placeholder="MM"
                min="0"
                max="59"
                className="w-16 border border-gray-300 rounded-md p-2 text-center"
              />
              <select
                id="pickup-period"
                className="w-20 border border-gray-300 rounded-md p-2"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
          {/* Drop-off Date */}
          <div>
            <label htmlFor="dropoff-date" className="block text-gray-600 mb-2">
              Drop-off Date
            </label>
            <input
              id="dropoff-date"
              type="date"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          {/* Drop-off Time */}
          <div>
            <label htmlFor="dropoff-time" className="block text-gray-600 mb-2">
              Drop-off Time
            </label>
            <div className="flex space-x-2">
              <input
                id="dropoff-hour"
                type="number"
                placeholder="HH"
                min="1"
                max="12"
                className="w-16 border border-gray-300 rounded-md p-2 text-center"
              />
              <input
                id="dropoff-minute"
                type="number"
                placeholder="MM"
                min="0"
                max="59"
                className="w-16 border border-gray-300 rounded-md p-2 text-center"
              />
              <select
                id="dropoff-period"
                className="w-20 border border-gray-300 rounded-md p-2"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Search
        </button>
      </div>

      {/* Cars List Section */}
      {cars.map((car, index) => (
        <div
          key={index}
          className={`${car.color} rounded-lg shadow-md p-5 mb-8`}
        >
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-80 object-contain mx-auto rounded-lg"
          />
          <div className="p-5 text-center">
            <h2 className="text-xl font-bold text-purple-800">{car.name}</h2>
            <p className="text-blue-600">Passengers: {car.passengers}</p>
            <p className="text-blue-600">
              Cost to Hire: KSh {car.cost.toLocaleString()}
            </p>
            <p className="text-blue-600">Number Plate: {car.numberPlate}</p>
            <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-purple-600">
              Rent Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarRentals;