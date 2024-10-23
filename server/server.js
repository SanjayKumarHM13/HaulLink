const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send("GET is working"));

const connectDB = require('./db');
connectDB();

const truckBookingRoutes = require('./routes/truckBooking');

app.use('/truckbooking', truckBookingRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));

// (async () => {
// const getPort = (await import('get-port')).default  ;
//   PORT = await getPort({
//     port: [process.env.PORT || process.env.PORT_ALT || 5000],
//   });

//   console.log(PORT);

//   app.get('/', (req, res) => res.send("GET is working"));

//   app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
// })();