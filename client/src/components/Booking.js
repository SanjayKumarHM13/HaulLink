// import React, { useState } from 'react';
// import axios from 'axios';
// import './Booking.css';

// function Booking() {
//   const [booking, setBooking] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     date: '',
//   });

//   const handleChange = (e) => {
//     setBooking({ ...booking, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/bookings', booking);
//       alert('Booking successful!');
//       setBooking({ name: '', email: '', phone: '', service: '', date: '' });
//     } catch (error) {
//       alert('Error making booking. Please try again.');
//     }
//   };

//   return (
//     <section className="booking" id="book-now">
//       <div className="booking-container">
//         <h2 className="booking-title">Book a Service</h2>
//         <form onSubmit={handleSubmit} className="booking-form">
//           <div className="form-group">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={booking.name}
//               onChange={handleChange}
//               className="form-input"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={booking.email}
//               onChange={handleChange}
//               className="form-input"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone" className="form-label">Phone</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={booking.phone}
//               onChange={handleChange}
//               className="form-input"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="service" className="form-label">Service</label>
//             <select
//               id="service"
//               name="service"
//               value={booking.service}
//               onChange={handleChange}
//               className="form-input"
//               required
//             >
//               <option value="">Select a service</option>
//               <option value="city-tempo">City Tempo</option>
//               <option value="packers-movers">Packers & Movers</option>
//               <option value="enterprise">For Enterprise</option>
//               <option value="on-demand">On-Demand</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="date" className="form-label">Date</label>
//             <input
//               type="date"
//               id="date"
//               name="date"
//               value={booking.date}
//               onChange={handleChange}
//               className="form-input"
//               required
//             />
//           </div>
//           <button type="submit" className="form-submit">Book Now</button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Booking;