const express = require('express');
const router = express.Router();
const TruckBooking = require('../models/TruckBooking');

router.get('/', async (req, res) => {
    try {
      const booking = await TruckBooking.find();
      res.json(booking);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
  );
  
router.post('/', async (req, res) => {
  
    try {
      console.log(await req.body);
      const {name, email, phone, service, date} = await req.body;
  
      const newBooking = new TruckBooking({name, email, phone, service, date});
  
      await newBooking.save();
  
      res.status(201).json({ message: 'Booking created successfully', data: newBooking });
  
    } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).json({ message: 'Error fetching user details' });
    }
  });

module.exports = router;