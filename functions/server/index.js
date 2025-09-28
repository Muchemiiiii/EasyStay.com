const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const FLW_SECRET_KEY = process.env.FLW_SECRET_KEY;
const FLW_BASE_URL = "https://api.flutterwave.com/v3";

// ✅ Route for verifying payment
app.post("/verifyFlutterwavePayment", async (req, res) => {
  try {
    const { transactionId, bookingId } = req.body;

    if (!transactionId || !bookingId) {
      return res.status(400).json({ error: "Missing transactionId or bookingId" });
    }

    // ✅ Verify payment with Flutterwave
    const response = await axios.get(
      `${FLW_BASE_URL}/transactions/${transactionId}/verify`,
      {
        headers: { Authorization: `Bearer ${FLW_SECRET_KEY}` },
      }
    );

    const payment = response.data;

    if (payment.status === "success" && payment.data.status === "successful") {
      return res.json({ success: true, message: "Payment verified", payment: payment.data });
    } else {
      return res.status(400).json({ success: false, message: "Payment not successful" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error.response?.data || error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
