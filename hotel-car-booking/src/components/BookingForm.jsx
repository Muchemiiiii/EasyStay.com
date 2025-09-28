import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hotel = location.state?.hotel;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookingId = Date.now().toString();

      // ✅ Save booking in Firestore (pending until payment completes)
      await setDoc(doc(db, "bookings", bookingId), {
        bookingId,
        hotelName: hotel?.name,
        location: hotel?.location,
        amountKES: hotel?.priceKES,
        ...formData,
        status: "Pending",
        createdAt: serverTimestamp(),
      });

      // ✅ Navigate to Payments page and pass booking info
      navigate("/payments", {
        state: {
          hotel,
          bookingId,
          bookingData: { ...formData, amount: hotel?.priceKES },
        },
      });
    } catch (err) {
      console.error("Error saving booking:", err);
      alert("❌ Failed to save booking. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        Booking at {hotel?.name || "Hotel"}
      </h1>
      <p className="text-gray-600 mb-2">📍 {hotel?.location}</p>
      <p className="text-gray-600 mb-4">
        💵 KES {hotel?.priceKES?.toLocaleString()} / night
      </p>

      <form className="space-y-3" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="2547XXXXXXXX"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Check-in Date</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Check-out Date</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
