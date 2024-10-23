const express = require("express");
const router = express.Router();
const TruckBooking = require("../models/TruckBooking");

router.get("/login", async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const booking = await TruckBooking.findOne({ email }, "phone");
    if (!booking) {
      return res
        .status(404)
        .json({ message: "No booking found for this email" });
    }
    res.json({ password: booking.phone });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.get("/userprofile", async (req, res) => {
  try {
    const { email } = req.query;
    console.log(email);
    const booking = await TruckBooking.findOne({ email });
    res.status(200).json(booking);
    console.log(booking);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

const { encrypt, decrypt } = require("../encrypt");

router.post("/", async (req, res) => {
  try {
    console.log(await req.body);
    const { name, email, phone, service, date } = await req.body;

    // const hashedPhone = await encrypt(phone);

    const newBooking = new TruckBooking({ name, email, phone, service, date });

    await newBooking.save();

    res
      .status(201)
      .json({ message: "Booking created successfully", data: newBooking });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ message: "Error fetching user details" });
  }
});

module.exports = router;
