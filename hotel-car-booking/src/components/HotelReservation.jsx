import React, { useState } from "react";

const HotelReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "single",
  });

  const [loading, setLoading] = useState(false); // Loading state for button
  const [message, setMessage] = useState(""); // Feedback message

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state
    setMessage(""); // Clear any previous message

    try {
      // Replace with your backend API endpoint
      const response = await fetch("https://example.com/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Reservation successfully submitted:", result);
        setMessage("Reservation submitted successfully!");
        setFormData({
          name: "",
          checkIn: "",
          checkOut: "",
          guests: 1,
          roomType: "single",
        });
      } else {
        setMessage(`Failed to submit reservation. Error: ${response.statusText}`);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      console.error("Error:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
        Hotel Reservation Form
      </h1>

      {/* Feedback Message */}
      {message && (
        <p
          className={`text-center ${
            message.includes("success") ? "text-green-600" : "text-red-600"
          } mb-4`}
        >
          {message}
        </p>
      )}

      {/* Reservation Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-800 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-800 mb-2">
            Check-in Date
          </label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-800 mb-2">
            Check-out Date
          </label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-800 mb-2">
            Number of Guests
          </label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number of guests"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-800 mb-2">
            Room Type
          </label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
          </select>
        </div>

        {/* Reserve Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-xl py-3 rounded-lg transition duration-300 ${
            loading
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-purple-700"
          }`}
        >
          {loading ? "Submitting..." : "Reserve Now"}
        </button>
      </form>
    </div>
  );
};

export default HotelReservationForm;