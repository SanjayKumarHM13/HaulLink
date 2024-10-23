import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';  
import './EnterprisePortal.css';

// Register the necessary components from Chart.js
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

function EnterprisePortal() {
  const [key, setKey] = useState('registration');
  const [formData, setFormData] = useState({
    companyName: '',
    industryType: '',
    businessAddress: '',
    taxId: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    shipmentVolume: '',
    deliveryFrequency: '',
    preferredTruckSizes: [],
    operationLocations: '',
    specialHandling: '',
    deliveryTimeframes: [],
    insurancePreferences: '',
    warehousingNeeds: '',
    billingCycle: '',
    paymentMethods: [],
    creditTerms: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedArray = [...formData[name]];
    if (checked) {
      updatedArray.push(e.target.value);
    } else {
      updatedArray = updatedArray.filter(item => item !== e.target.value);
    }
    setFormData({ ...formData, [name]: updatedArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Enterprise registration submitted successfully!');
  };

  // Mock data for the dashboard
  const shipmentData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Shipment Volume',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div className="enterprise-portal">
      <h1>Enterprise Portal</h1>
      
      {/* Custom Tabs */}
      <div className="enterprise-tabs">
        <div 
          className={`enterprise-tab ${key === 'registration' ? 'active' : ''}`}
          onClick={() => setKey('registration')}
        >
          Registration
        </div>
        <div 
          className={`enterprise-tab ${key === 'dashboard' ? 'active' : ''}`}
          onClick={() => setKey('dashboard')}
        >
          Dashboard
        </div>
      </div>

      {/* Conditional Rendering for Tabs */}
      {key === 'registration' && (
        <form onSubmit={handleSubmit}>
          <h2>Enterprise Registration</h2>

          <h3>Business Information</h3>
          <div className="form-group">
            <label className="form-label" htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="form-control"
              value={formData.companyName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="industryType">Industry Type</label>
            <input
              type="text"
              id="industryType"
              name="industryType"
              className="form-control"
              value={formData.industryType}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Other form fields similar to the above */}

          <button type="submit" className="form-button">Submit Registration</button>
        </form>
      )}

      {key === 'dashboard' && (
        <div>
          <h2>Enterprise Dashboard</h2>

          <h3>Shipment Overview</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Shipment ID</th>
                <th>Status</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Estimated Delivery</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SH001</td>
                <td>In Transit</td>
                <td>New York</td>
                <td>Los Angeles</td>
                <td>2023-05-25</td>
              </tr>
              <tr>
                <td>SH002</td>
                <td>Delivered</td>
                <td>Chicago</td>
                <td>Houston</td>
                <td>2023-05-20</td>
              </tr>
            </tbody>
          </table>

          <h3>Fleet Utilization</h3>
          <div className="alert alert-info">
            Current fleet utilization: 80%
          </div>

          <h3>Shipment Volume Trends</h3>
          <div className="chart-container">
            <Line data={shipmentData} />
          </div>

          <h3>Financial Overview</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Total Shipments</th>
                <th>Total Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>May 2023</td>
                <td>150</td>
                <td>$25,000</td>
              </tr>
              <tr>
                <td>April 2023</td>
                <td>140</td>
                <td>$23,500</td>
              </tr>
            </tbody>
          </table>

          <div className="support-buttons">
            <button className="support-button">Contact Account Manager</button>
            <button className="support-button">Submit Support Ticket</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EnterprisePortal;
