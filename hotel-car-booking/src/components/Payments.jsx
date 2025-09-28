import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const Payments = () => {
  const location = useLocation();
  const { hotel } = location.state || {};
  const amountKES = hotel?.priceKES;

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bookingId, setBookingId] = useState(null);

  const flutterwaveKey = process.env.REACT_APP_FLW_PUBLIC_KEY;

  // ✅ Flutterwave config
  const config = {
    public_key: flutterwaveKey,
    tx_ref: bookingId || Date.now().toString(),
    amount: amountKES,
    currency: "KES",
    payment_options: "card, mobilemoney, ussd, mpesa",
    customer: {
      email,
      phonenumber: phone,
      name: email ? email.split("@")[0] : "Guest",
    },
    customizations: {
      title: "EasyStay Hotel Booking",
      description: `Payment for ${hotel?.name}`,
      logo: "https://your-logo-url.com/logo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  // ✅ Save booking as "Pending"
  const initializeBooking = async () => {
    if (!hotel || !phone || !email) {
      alert("❌ Please provide email and phone number.");
      return null;
    }

    try {
      const id = Date.now().toString();
      setBookingId(id);

      await setDoc(doc(db, "bookings", id), {
        hotelName: hotel.name,
        location: hotel.location,
        amountKES,
        phone,
        email,
        status: "Pending",
        createdAt: serverTimestamp(),
      });

      return id;
    } catch (err) {
      console.error("❌ Error saving booking:", err);
      return null;
    }
  };

  // ✅ Handle Pay Now
  const handlePayNow = async () => {
    const id = await initializeBooking();
    if (!id) return;

    handleFlutterPayment({
      callback: async (flwResponse) => {
        console.log("✅ Flutterwave response:", flwResponse);

        try {
          // ✅ Call Firebase Cloud Function to verify payment
          const verifyRes = await fetch(
            "https://us-central1-hotel-booking-3d39f.cloudfunctions.net/verifyFlutterwavePayment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                transactionId: flwResponse.transaction_id,
                bookingId: id,
              }),
            }
          );

          const data = await verifyRes.json();

          if (verifyRes.ok && data.success) {
            alert("✅ Payment verified successfully!");
          } else {
            alert("❌ Payment verification failed!");
          }
        } catch (err) {
          console.error("⚠️ Error verifying payment:", err);
          alert("⚠️ Could not verify payment.");
        }

        closePaymentModal();
      },
      onClose: async () => {
        console.log("❌ Payment modal closed.");
        await setDoc(
          doc(db, "bookings", id),
          { status: "Canceled" },
          { merge: true }
        );
        alert("❌ Payment canceled.");
      },
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 mt-10 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Pay with Flutterwave
      </h2>

      <p className="text-center mb-4">
        Paying for <strong>{hotel?.name}</strong>
      </p>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="your@email.com"
          required
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Phone Number (2547XXXXXXXX)
        </label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="2547XXXXXXXX"
          required
        />
      </div>

      {/* Amount */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Amount (KES)
        </label>
        <input
          type="number"
          value={amountKES || ""}
          readOnly
          className="w-full border rounded-lg px-3 py-2 mt-1 bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Pay Now */}
      <button
        onClick={handlePayNow}
        disabled={!phone || !email}
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payments;
