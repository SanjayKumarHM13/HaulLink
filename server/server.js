const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/', {
  dbName: 'HaulLink'
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.get('/', (req, res) => res.send("GET is working"));

const TruckBookingSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  service: {type: String, required: true},
  date: {type: String, required: true}
});

const TruckBooking = mongoose.model('TruckBooking', TruckBookingSchema, 'truck_booking');

app.get('/bookings', async (req, res) => {
  try {
    const booking = await TruckBooking.find();
    res.json(booking);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);

app.post('/bookings', async (req, res) => {

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

const PORT = process.env.PORT || process.env.PORT_ALT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));